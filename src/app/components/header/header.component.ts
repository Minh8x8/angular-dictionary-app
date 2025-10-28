import { ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';
import { PrimeImportsModule } from '@PrimeImport';
import { RouterLink } from '@angular/router';
import { SearchInputComponent } from '../search-input/search-input.component';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header',
  imports: [PrimeImportsModule, RouterLink, SearchInputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef as any);
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

  constructor() {
    fromEvent(window, 'resize')
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.setHeaderHeightVar());
  }

  ngAfterViewInit() {
    this.setHeaderHeightVar();
  }

  private setHeaderHeightVar() {
    const h = this.el?.nativeElement?.offsetHeight ?? 64;
    document.documentElement.style.setProperty('--app-header-h', `${h}px`);
  }
}
