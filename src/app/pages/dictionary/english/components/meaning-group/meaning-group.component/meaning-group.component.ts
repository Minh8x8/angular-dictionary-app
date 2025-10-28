import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { Meaning } from '@models/dictionary-model';
import { PrimeImportsModule } from '@PrimeImport';
import { DefinitionItemComponent } from '../../definition-item/definition-item.component/definition-item.component';
import { SynonymAntonymListComponent } from '../../synonym-antonym-list/synonym-antonym-list.component/synonym-antonym-list.component';

@Component({
  selector: 'app-meaning-group',
  imports: [PrimeImportsModule, DefinitionItemComponent, SynonymAntonymListComponent],
  templateUrl: './meaning-group.component.html',
  styleUrl: './meaning-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeaningGroupComponent {
  meaning = input.required<Meaning>();

  topDefinitions = computed(() => this.meaning().definitions.slice(0, 3));
  extraDefinitions = computed(() => this.meaning().definitions.slice(3));
  hasExtra = computed(() => this.meaning().definitions.length > 3);

  expanded = signal(false);
  toggleExtra() {
    this.expanded.update((v) => !v);
  }
}
