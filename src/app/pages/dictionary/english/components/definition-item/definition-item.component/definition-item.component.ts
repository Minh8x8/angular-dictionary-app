import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Definition } from '@models/dictionary-model';
import { PrimeImportsModule } from '@PrimeImport';

@Component({
  selector: 'app-definition-item',
  imports: [PrimeImportsModule],
  templateUrl: './definition-item.component.html',
  styleUrl: './definition-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefinitionItemComponent {
  def = input.required<Definition>();
}
