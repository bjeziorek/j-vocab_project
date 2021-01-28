import { KanjiComponent } from './kanji/kanji.component';
import { GamesComponent } from './games/games.component';
import { ExportComponent } from './export/export.component';
import { ImportComponent } from './import/import.component';
import { OptionsComponent } from './options/options.component';
import { ManageResourcesComponent } from './manage-resources/manage-resources.component';
import { ManageSetsComponent } from './manage-sets/manage-sets.component';
import { SetsComponent } from './sets/sets.component';
import { PresentationComponent } from './presentation/presentation.component';
import { LearnComponent } from './learn/learn.component';
import { QuizComponent } from './quiz/quiz.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'learn', pathMatch: 'full' },
  {
    path: 'learn',
    component: LearnComponent
  },
  {
    path: 'sets',
    component: SetsComponent
  },
  {
    path: 'kanji',
    component: KanjiComponent
  },
  {
    path: 'options',
    component: OptionsComponent
  },
  {
    path: 'games',
    component: GamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
