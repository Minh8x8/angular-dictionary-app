import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PrimeImportsModule } from '@PrimeImport';

@Component({
  selector: 'app-source-footer',
  imports: [PrimeImportsModule],
  templateUrl: './source-footer.component.html',
  styleUrl: './source-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SourceFooterComponent {
  urls = input<string[] | undefined>([]);
}
