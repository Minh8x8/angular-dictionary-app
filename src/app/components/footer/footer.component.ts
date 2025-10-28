import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { PrimeImportsModule } from '../../prime-imports';
import { RouterLink } from '@angular/router';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-footer',
  imports: [PrimeImportsModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef as any);

  constructor() {
    fromEvent(window, 'resize')
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.setFooterHeightVar());
  }

  ngAfterViewInit() {
    this.setFooterHeightVar();
  }

  private setFooterHeightVar() {
    const h = this.el?.nativeElement?.offsetHeight ?? 96;
    document.documentElement.style.setProperty('--app-footer-h', `${h}px`);
  }
}
