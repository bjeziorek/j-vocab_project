import { ThemesService } from './../themes.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  theme = 'amethystTheme';

  constructor(private readonly themeService: ThemesService) { }

  ngOnInit(): void {
    this.theme = this.themeService.currentTheme;
    this.themeService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });
  }


  setTheme() {
   // this.themeService.currentTheme = this.theme;
  }

}
