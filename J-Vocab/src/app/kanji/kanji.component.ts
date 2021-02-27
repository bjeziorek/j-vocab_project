import { KanjiDialogBoxComponent } from './../kanji-dialog-box/kanji-dialog-box.component';
import { KanjiData } from './kanji-data.model';
import { KanjiDatabase } from './kanji-database';
import { Component, NgZone, OnInit } from '@angular/core';
import { ThemesService } from '../themes.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { isNgTemplate } from '@angular/compiler';
import { DataBase } from '../data-base';

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
  fullKanjiDb = this.kanjiHandler.jouyouKanji;
  kanjiDb = this.fullKanjiDb;
  radicals = ['1', '2', '3'];
  strokes = ['1', '2', '3'];
  alreadyChecked = '';
  dataReady = true;

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
  constructor(private readonly themeService: ThemesService, private ngZone: NgZone,
    public dialog: MatDialog) {
    this.radicals = this.listElements('radical');
    this.strokes = this.listElements('stroke');
    //    this.activePageDataChunk = this.datasource.slice(0,this.pageSize);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.theme = this.themeService.currentTheme;
    this.themeService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });
    this.themeService.dataIsReady.subscribe((receivedIfIsDataReady: boolean) => {
      this.dataReady = receivedIfIsDataReady;
    });
  }

  radicalClick(evt): void {
    this.kanjiDb = this.fullKanjiDb.filter((item) => item.Radical === evt.target.id);
  }
  strokeClick(evt): void {
    this.kanjiDb = this.fullKanjiDb.filter((item) => item.Strokes === evt.target.id);
  }

  listElements(what): string[] {
    function existsOnTagListAlready(tag, tagList): boolean {
      for (const t of tagList) {
        if (t === tag) {
          return true;
        }
      }
      return false;
    }
    let tagList: string[];
    tagList = [];
    const db = this.fullKanjiDb;
    for (const el of this.fullKanjiDb) {
      for (const tag of (what === 'radical' ? el.Radical : el.Strokes)) {
        if (!existsOnTagListAlready(tag, tagList)) {
          tagList.push(tag);
        }
      }
    }
    console.log(tagList);
    return tagList;
  }

  isDataReady() {
    return this.dataReady;
  }

  loadingX() { //nie robi nic na razie
    console.log('loading');
    this.ngZone.run(() => {
      this.dataReady = false;
      this.themeService.dataIsReady.next(false);
    });
  }

  filterByPresence(): void {
    console.log('filter');
    this.kanjiDb = this.getFilteredDbWithUsedKanjiOnly();
    this.dataReady = true;
  }

  getFilteredDbWithUsedKanjiOnly(): any {
    this.dataReady = false;
    const vocabulary = new DataBase().getResources();
    this.kanjiDb = [];

    function filterKanji(item): boolean {
      for (const word of vocabulary) {
        if (word.character.includes(item.New)) {
          return true;
        }
      }
      return false;
    }
    return this.fullKanjiDb.filter(filterKanji);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string): void {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  getPaginatorData(event): void {
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

