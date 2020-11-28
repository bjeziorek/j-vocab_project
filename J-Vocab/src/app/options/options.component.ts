import { ThemesService } from './../themes.service';
import { Component, OnInit } from '@angular/core';
import { Converter } from '../converter';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  mode = 'none';
  theme = 'amethystTheme';
  txt: any;
  
  constructor(private readonly themeService: ThemesService) { }

  ngOnInit(): void {
    this.theme = this.themeService.currentTheme;
    this.themeService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });
  }

  exportClick(): void {
    this.mode = 'export';
  }
  importClick(): void {
    this.mode = 'import';
  }
  backToLearnClick(): void {
    this.mode = 'none';
  }

  setTheme(theme: string): void {
    this.themeService.theme.next(theme);
    this.themeService.currentTheme = theme;
  }

  onInputChange(e: Event): void {

    this.txt = new Converter().toKana((e.target as HTMLInputElement).value);
   }

}
