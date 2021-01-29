import { KanjiComponent } from './kanji/kanji.component';
import { GamesComponent } from './games/games.component';
import { FuriganaComponent } from './furigana/furigana.component';
import { ExportComponent } from './export/export.component';
import { ImportComponent } from './import/import.component';
import { QuizComponent } from './quiz/quiz.component';
import { PresentationComponent } from './presentation/presentation.component';
import { OptionsComponent } from './options/options.component';
import { SetsComponent } from './sets/sets.component';
import { LearnComponent } from './learn/learn.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageSetsComponent } from './manage-sets/manage-sets.component';
import { ManageResourcesComponent } from './manage-resources/manage-resources.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { KanjiDialogBoxComponent } from './kanji-dialog-box/kanji-dialog-box.component';
import {MatPaginatorModule} from '@angular/material/paginator'; 

@NgModule({
  declarations: [
    AppComponent,
    LearnComponent,
    SetsComponent,
    OptionsComponent,
    PresentationComponent,
    QuizComponent,
    ImportComponent,
    ExportComponent,
    ManageSetsComponent,
    ManageResourcesComponent,
    MainMenuComponent,
    FuriganaComponent,
    GamesComponent,
    KanjiComponent,
    KanjiDialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
