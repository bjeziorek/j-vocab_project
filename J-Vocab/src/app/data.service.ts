import { DataBase } from './data-base';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  chosenSet = 'none';
  dataFromDB = new DataBase().getResources();

  constructor() { }

  generateSet(rawData, save) {
    let set = '';
    return set;
  }

}
