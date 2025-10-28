import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrimeImportsModule } from '@PrimeImport';

@Component({
  selector: 'app-about',
  imports: [PrimeImportsModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {}
