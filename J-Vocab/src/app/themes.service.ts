import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  theme = new Subject();
  currentTheme = 'amethystTheme';

  constructor() { }
}
