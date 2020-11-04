import { ThemesService } from './../themes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  mode = 'mode';

  constructor(private readonly themeService: ThemesService) { }

  ngOnInit(): void {
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
  }

}
