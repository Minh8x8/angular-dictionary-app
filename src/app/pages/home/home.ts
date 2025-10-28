import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { PrimeImportsModule } from '@PrimeImport';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [PrimeImportsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  // Search term
  term = signal<string>('');

  // Word facts
  facts = signal<Array<{ id?: number; title?: string; fact: string }>>([]);
  factsLoading = signal<boolean>(false);
  factsError = signal<string | null>(null);

  constructor() {
    this.loadFacts();
  }

  onInput(val: string) {
    this.term.set(val);
  }

  submit() {
    const q = this.term().trim();
    if (!q) return;
    this.router.navigate(['/dictionary/english', q]);
  }

  private loadFacts() {
    this.factsLoading.set(true);
    this.factsError.set(null);
    this.http
      .get<Array<{ id?: number; title?: string; fact: string }>>('/word-facts.json')
      .subscribe({
        next: (data) => {
          this.facts.set(Array.isArray(data) ? data : []);
          this.factsLoading.set(false);
        },
        error: () => {
          this.factsError.set('Failed to load word facts.');
          this.factsLoading.set(false);
        },
      });
  }
}
