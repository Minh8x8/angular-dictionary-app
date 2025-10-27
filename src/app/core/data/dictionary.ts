import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DictionaryEntry } from '../models/dictionary-entry';
import { Http } from '../api/http';

@Injectable({ providedIn: 'root' })
export class Dictionary {
  constructor(private http: Http) {}

  /**
   * Search for word definitions
   * @param word - the word to search
   * @returns Observable of DictionaryEntry[]
   */
  search(word: string): Observable<DictionaryEntry[]> {
    // The base URL (https://api.dictionaryapi.dev/api/v2/entries/en)
    // is already defined in Http class
    return this.http.get<DictionaryEntry[]>(word);
  }
}
