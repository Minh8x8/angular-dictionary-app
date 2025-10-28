import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionItemComponent } from './definition-item.component';

describe('DefinitionItemComponent', () => {
  let component: DefinitionItemComponent;
  let fixture: ComponentFixture<DefinitionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefinitionItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefinitionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
