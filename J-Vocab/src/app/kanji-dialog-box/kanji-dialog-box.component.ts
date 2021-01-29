import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../kanji/kanji.component';

@Component({
  selector: 'app-kanji-dialog-box',
  templateUrl: './kanji-dialog-box.component.html',
  styleUrls: ['./kanji-dialog-box.component.scss']
})
export class KanjiDialogBoxComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
