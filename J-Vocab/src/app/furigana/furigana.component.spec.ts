import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuriganaComponent } from './furigana.component';

describe('FuriganaComponent', () => {
  let component: FuriganaComponent;
  let fixture: ComponentFixture<FuriganaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuriganaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuriganaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
