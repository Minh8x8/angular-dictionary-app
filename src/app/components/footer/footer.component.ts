import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrimeImportsModule } from '../../prime-imports';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [PrimeImportsModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
}
