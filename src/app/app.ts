import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrimeImportsModule } from './prime-imports';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [PrimeImportsModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: {
    class: 'app-root',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
