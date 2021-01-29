import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanjiComponent } from '../kanji/kanji.component';


@NgModule({
  declarations: [KanjiComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[
    KanjiComponent
  ]
})
export class KanjiModule { }

