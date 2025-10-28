import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynonymAntonymListComponent } from './synonym-antonym-list.component';

describe('SynonymAntonymListComponent', () => {
  let component: SynonymAntonymListComponent;
  let fixture: ComponentFixture<SynonymAntonymListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SynonymAntonymListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SynonymAntonymListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
