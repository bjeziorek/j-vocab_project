import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuriganaComponent } from '../furigana/furigana.component';



@NgModule({
  declarations: [FuriganaComponent],
  imports: [
    CommonModule
  ],
  exports:[
    FuriganaModule
  ]
})
export class FuriganaModule { }
