import { KanjiDialogBoxComponent } from './../kanji-dialog-box/kanji-dialog-box.component';
import { KanjiData } from './kanji-data.model';
import { KanjiDatabase } from './kanji-database';
import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../themes.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

export interface DialogData {
  kanji: KanjiData;
}

@Component({
  selector: 'app-kanji',
  templateUrl: './kanji.component.html',
  styleUrls: ['./kanji.component.scss']
})
export class KanjiComponent implements OnInit {

  kanjiHandler = new KanjiDatabase();
  kanjiDb = this.kanjiHandler.jouyouKanji;
  /*
  // MatPaginator Output
  pageEvent: PageEvent;
  datasource = [];
  activePageDataChunk = []
  */

  pageSizeOptions: number[] = [150];
  pageIndex = 0;
  pageSize = 150;
  lowValue = 0;
  highValue = 150;

  theme = 'amethystTheme';
  constructor(private readonly themeService: ThemesService,
              public dialog: MatDialog) {
    //    this.activePageDataChunk = this.datasource.slice(0,this.pageSize);
  }
  ngOnInit(): void {
    this.theme = this.themeService.currentTheme;
    this.themeService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });
  }


  setPageSizeOptions(setPageSizeOptionsInput: string): void {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  getPaginatorData(event): void {
    console.log(event);
    // this.pageSize= event.pageSize;
    if (event.pageIndex === this.pageIndex + 1) {
      this.lowValue = this.lowValue + this.pageSize;
      this.highValue = this.highValue + this.pageSize;
    }
    else if (event.pageIndex === this.pageIndex - 1) {
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue = this.highValue - this.pageSize;
    }
    this.pageIndex = event.pageIndex;
  }

  kanjiClick(evt): void {
    this.dialog.open(KanjiDialogBoxComponent, {
      data: {
        kanji: JSON.parse((evt.target as HTMLButtonElement).id)
      }
    });
  }

}

