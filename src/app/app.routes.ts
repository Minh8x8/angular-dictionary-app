import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { EnglishWordPage } from './pages/dictionary/english/english-word/english-word.page';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  {
    path: 'dictionary/english/:word',
    component: EnglishWordPage,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
