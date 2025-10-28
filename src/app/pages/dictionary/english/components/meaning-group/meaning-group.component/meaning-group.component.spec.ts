import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaningGroupComponent } from './meaning-group.component';

describe('MeaningGroupComponent', () => {
  let component: MeaningGroupComponent;
  let fixture: ComponentFixture<MeaningGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeaningGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeaningGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
