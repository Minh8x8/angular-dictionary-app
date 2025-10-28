import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DictionaryEntry } from '@models/dictionary-model';

@Component({
  selector: 'app-word-header',
  imports: [],
  templateUrl: './word-header.component.html',
  styleUrl: './word-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordHeaderComponent {
  entry = input.required<DictionaryEntry>();

  playAudio(url?: string) {
    if (!url) return;
    new Audio(url.startsWith('http') ? url : `https:${url}`).play().catch(() => {});
  }
}
