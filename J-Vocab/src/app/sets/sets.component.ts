import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss']
})
export class SetsComponent implements OnInit {
  mode = 'none';
  theme = 'amethystTheme';

  constructor(private readonly themeService: ThemesService) { }

  ngOnInit(): void {
    this.theme = this.themeService.currentTheme;
    this.themeService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });
  }



  manageSetsClick(): void {
    this.mode = 'manage-sets';
  }
  manageResourcesClick(): void {
    this.mode = 'manage-resources';
  }
  backToSetsClick(): void {
    this.mode = 'none';
  }

}
