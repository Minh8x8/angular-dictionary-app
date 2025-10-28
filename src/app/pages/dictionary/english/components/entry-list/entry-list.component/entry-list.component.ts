import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Meaning } from '@models/dictionary-model';
import { MeaningGroupComponent } from '../../meaning-group/meaning-group.component/meaning-group.component';

@Component({
  selector: 'app-entry-list',
  imports: [MeaningGroupComponent],
  templateUrl: './entry-list.component.html',
  styleUrl: './entry-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryListComponent {
  meanings = input.required<Meaning[]>();
}
