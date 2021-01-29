import { KanjiDatabase } from './kanji-database';
import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../themes.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

export interface DialogData {
  kanji: string;
}

@Component({
  selector: 'app-kanji',
  templateUrl: './kanji.component.html',
  styleUrls: ['./kanji.component.scss']
})
export class KanjiComponent implements OnInit {

  kanjiDb = new KanjiDatabase().jouyouKanji;

  theme = 'amethystTheme';
  constructor(private readonly themeService: ThemesService,
    public dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.theme = this.themeService.currentTheme;
    this.themeService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });
  }

  kanjiClick(evt) {

    this.dialog.open(dialogBox, {
      data: {
        kanji: (evt.target as HTMLButtonElement).id
      }
    });
  }

}

@Component({
  selector: 'dialog-box',
  templateUrl: 'dialog-box.html',
})
export class dialogBox {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}

