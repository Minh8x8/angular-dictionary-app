import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishWordPage } from './english-word.page';

describe('EnglishWordPage', () => {
  let component: EnglishWordPage;
  let fixture: ComponentFixture<EnglishWordPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnglishWordPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishWordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
