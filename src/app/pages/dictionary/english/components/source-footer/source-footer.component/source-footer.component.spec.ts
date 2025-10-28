import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceFooterComponent } from './source-footer.component';

describe('SourceFooterComponent', () => {
  let component: SourceFooterComponent;
  let fixture: ComponentFixture<SourceFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SourceFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourceFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
