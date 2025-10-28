import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ApiUrls } from '../constants/api-urls';
import { DictionaryEntry } from '../../models/dictionary-model';

@Injectable({ providedIn: 'root' })
export class DictionaryService {
  private api = inject(ApiService);

  lookup(word: string) {
    return this.api.get<DictionaryEntry[]>(`${ApiUrls.DICTIONARY}/${word}`);
  }
}
