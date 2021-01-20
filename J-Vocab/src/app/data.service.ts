import { Data } from './raw-data.model';
import { Subject } from 'rxjs';
import { DataBase } from './data-base';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  chosenSet = [];
  chosenSetDynamic = new Subject();
  dataFromDB = new DataBase().getResources();
  forFurigana = new Subject();
  forFuriganaStatic;

  constructor() { }

  generateSet(rawData, save) {
    let set = '';
    return set;
  }
}
