import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PrimeImportsModule } from '../../prime-imports';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-input',
  imports: [PrimeImportsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  private readonly router = inject(Router);
  readonly term = signal<string>('');

  search() {
    const t = this.term().trim();
    if (!t) return;
    this.router.navigateByUrl(`/dictionary/english/${encodeURIComponent(t.toLowerCase())}`);
  }
}
