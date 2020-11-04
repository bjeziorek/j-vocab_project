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

  constructor(private readonly themesService: ThemesService) { }

  ngOnInit(): void {
    this.themesService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });

  }
}
