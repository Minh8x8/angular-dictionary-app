import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PrimeImportsModule } from '../../prime-imports';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SearchInputComponent } from '../search-input/search-input.component';

@Component({
  selector: 'app-header',
  imports: [PrimeImportsModule, RouterLink, RouterLinkActive, SearchInputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly isDark = signal<boolean>(
    typeof document !== 'undefined' && document.documentElement.classList.contains('my-app-dark')
  );

  toggleDarkMode() {
    const element = document.querySelector('html');
    if (element) {
      element.classList.toggle('my-app-dark');
      this.isDark.set(element.classList.contains('my-app-dark'));
    }
  }
}
