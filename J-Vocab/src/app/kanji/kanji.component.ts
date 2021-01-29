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

  kanjiHandler= new KanjiDatabase();
  kanjiDb =this.kanjiHandler.jouyouKanji;
/*

// MatPaginator Output
pageEvent: PageEvent;
datasource = [];
activePageDataChunk = []
*/



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
  pageSizeOptions: number[] = [150];
  pageIndex:number = 0;
  pageSize:number = 150;
  lowValue:number = 0;
  highValue:number = 150;       

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }  
  }

getPaginatorData(event){
   console.log(event);
  // this.pageSize= event.pageSize;
   if(event.pageIndex === this.pageIndex + 1){
      this.lowValue = this.lowValue + this.pageSize;
      this.highValue =  this.highValue + this.pageSize;
     }
  else if(event.pageIndex === this.pageIndex - 1){
     this.lowValue = this.lowValue - this.pageSize;
     this.highValue =  this.highValue - this.pageSize;
    }   
     this.pageIndex = event.pageIndex;
}

  kanjiClick(evt) {

    this.dialog.open(KanjiDialogBoxComponent, {
      data: {
        kanji: JSON.parse((evt.target as HTMLButtonElement).id)
      }
    });
  }

}

