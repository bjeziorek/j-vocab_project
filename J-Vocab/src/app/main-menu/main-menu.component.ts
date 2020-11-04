import { ThemesService } from './../themes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  theme = 'amethystTheme';
  constructor(private readonly themeService:ThemesService) { }

  ngOnInit(): void {
    this.themeService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });
  }

}
