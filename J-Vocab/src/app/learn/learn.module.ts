import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnComponent } from '../learn/learn.component';



@NgModule({
  declarations: [LearnComponent],
  imports: [
    CommonModule
  ],
  exports:[
    LearnComponent
  ]
})
export class LearnModule { }
