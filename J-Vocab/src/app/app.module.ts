import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageSetsComponent } from './manage-sets/manage-sets.component';
import { ManageResourcesComponent } from './manage-resources/manage-resources.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageSetsComponent,
    ManageResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
