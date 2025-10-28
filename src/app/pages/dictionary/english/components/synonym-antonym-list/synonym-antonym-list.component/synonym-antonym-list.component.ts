import { ChangeDetectionStrategy, Component, input, inject } from '@angular/core';
import { PrimeImportsModule } from '@PrimeImport';
import { Router } from '@angular/router';

@Component({
  selector: 'app-synonym-antonym-list',
  imports: [PrimeImportsModule],
  templateUrl: './synonym-antonym-list.component.html',
  styleUrl: './synonym-antonym-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SynonymAntonymListComponent {
  synonyms = input<string[] | undefined>([]);
  antonyms = input<string[] | undefined>([]);

  private readonly router = inject(Router);

  go(word: string) {
    if (!word) return;
    this.router.navigate(['/dictionary/english', word]);
  }
}
