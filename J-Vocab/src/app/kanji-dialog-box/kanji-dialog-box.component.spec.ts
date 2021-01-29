import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjiDialogBoxComponent } from './kanji-dialog-box.component';

describe('KanjiDialogBoxComponent', () => {
  let component: KanjiDialogBoxComponent;
  let fixture: ComponentFixture<KanjiDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanjiDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanjiDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
