import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {

  mode = 'none';

  theme = 'amethystTheme';

  constructor(private readonly themeService: ThemesService) { }

  ngOnInit(): void {
    this.theme = this.themeService.currentTheme;
    this.themeService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });
  }



  quizClick(): void {
    this.mode = 'quiz';
  }
  presentationClick(): void {
    this.mode = 'presentation';
  }
  backToLearnClick(): void {
    this.mode = 'none';
  }

}
