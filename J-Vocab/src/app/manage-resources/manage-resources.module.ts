import { ManageResourcesComponent } from './manage-resources.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ManageResourcesModule],
  imports: [
    CommonModule
  ],
  exports: [
    ManageResourcesModule
  ]
})
export class ManageResourcesModule { }
