import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  dataIsReady = new Subject();
  theme = new BehaviorSubject('amethystTheme');
  currentTheme = 'amethystTheme';

  constructor() { }
}
