import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  currentModule = new Subject();
  currentListToLearn = new Subject();
  singleButtonValue = new Subject();
  clearButtonListClassesSignal = new Subject();
  learningMode = new Subject(); //np compose quiz, quizes
  currentUrlStatic = '/';
  listOfUsedButtonsHandlers = [];
  backUpListToLearn = new Subject();
  currentListToLearnStatic = [];
  dataForFurigana = new Subject();
  currentUrl = new Subject();

  characterOn = new Subject();
  kanaOn = new Subject();
  romajiOn = new Subject();
  meaningOn = new Subject();
  updateData = new Subject();
  kanaOnStatic = true;
  romajiOnStatic = true;
  meaningOnStatic = true;
  characterOnStatic = true;

  signalToReloadListClasses = new Subject();

  listOfKnown = [];
  listOfInLearning = [];
  listOfUnknown = [];

  constructor() { }
}
