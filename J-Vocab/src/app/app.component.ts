import { ThemeSetter } from './../../themeSetter';
import { ThemesService } from './themes.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'J-Vocab';
  theme = 'amethystTheme';

  constructor(private readonly themesService: ThemesService) {
    //this.theme = themesService.currentTheme;
  }

  ngOnInit(): void {
    this.themesService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });
    console.log("app theme: " + this.theme);
  }
}
