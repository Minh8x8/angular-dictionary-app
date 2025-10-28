import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map, distinctUntilChanged, finalize } from 'rxjs/operators';
import { DictionaryService } from '@core/services/dictionary.services';
import { DictionaryEntry, Meaning } from '@models/dictionary-model';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';
import { WordHeaderComponent } from '../components/word-header/word-header.component/word-header.component';
import { EntryListComponent } from '../components/entry-list/entry-list.component/entry-list.component';
import { SourceFooterComponent } from '../components/source-footer/source-footer.component/source-footer.component';

@Component({
  selector: 'app-english-word-page',
  imports: [
    ProgressSpinnerModule,
    MessageModule,
    CardModule,
    WordHeaderComponent,
    EntryListComponent,
    SourceFooterComponent,
  ],
  templateUrl: './english-word.page.html',
  styleUrl: './english-word.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnglishWordPage {
  private readonly route = inject(ActivatedRoute);
  private readonly svc = inject(DictionaryService);

  readonly word = signal<string>('');
  readonly entries = signal<DictionaryEntry[] | null>(null);
  readonly loading = signal<boolean>(false);
  readonly error = signal<string | null>(null);

  readonly hasData = computed(() => !!this.entries() && this.entries()!.length > 0);
  readonly firstEntry = computed<DictionaryEntry | null>(() => this.entries()?.[0] ?? null);
  readonly meanings = computed<Meaning[]>(() => this.firstEntry()?.meanings ?? []);
  readonly sourceUrls = computed<string[]>(() => this.firstEntry()?.sourceUrls ?? []);

  constructor() {
    this.route.paramMap
      .pipe(
        map((pm) => (pm.get('word') ?? '').trim()),
        distinctUntilChanged(),
        takeUntilDestroyed()
      )
      .subscribe((w) => {
        if (!w) return;
        this.fetch(w);
      });
  }

  private fetch(w: string) {
    this.word.set(w);
    this.loading.set(true);
    this.error.set(null);
    this.svc
      .lookup(w)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (res) => this.entries.set(res ?? []),
        error: (err) => {
          console.error(err);
          this.entries.set([]);
          this.error.set('No definitions found.');
        },
      });
  }
}
