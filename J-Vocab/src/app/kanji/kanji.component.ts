import { KanjiDialogBoxComponent } from './../kanji-dialog-box/kanji-dialog-box.component';
import { DialBoxComponent } from './dial-box/dial-box.component';
import { KanjiData } from './kanji-data.model';
import { KanjiDatabase } from './kanji-database';
import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../themes.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

export interface DialogData {
  kanji: KanjiData;
}

@Component({
  selector: 'app-kanji',
  templateUrl: './kanji.component.html',
  styleUrls: ['./kanji.component.scss']
})
export class KanjiComponent implements OnInit {

  kanjiHandler= new KanjiDatabase();
  kanjiDb =this.kanjiHandler.jouyouKanji;

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

    this.dialog.open(KanjiDialogBoxComponent, {
      data: {
        kanji: JSON.parse((evt.target as HTMLButtonElement).id)
      }
    });
  }

}

