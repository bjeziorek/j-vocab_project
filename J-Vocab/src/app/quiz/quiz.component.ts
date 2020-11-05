import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  theme = 'amethystTheme';

  constructor(private readonly themeService: ThemesService) { }

  ngOnInit(): void {
    this.theme = this.themeService.currentTheme;
    this.themeService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });
  }



}
