import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataBase } from '../data-base';
import { DialogData } from '../kanji/kanji.component';

@Component({
  selector: 'app-kanji-dialog-box',
  templateUrl: './kanji-dialog-box.component.html',
  styleUrls: ['./kanji-dialog-box.component.scss']
})
export class KanjiDialogBoxComponent implements OnInit {
  vocabularyList = new DataBase().getResources();
  listToDisplay = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    for (const word of this.vocabularyList) {
      if (word.character.includes(data.kanji.New)) {
        this.listToDisplay.push(
          {
            kanji: word.character,
            reading: word.sylabs,
            meaning: word.meaningPL
          });
      }
    }
  }

  ngOnInit(): void {
  }

}
