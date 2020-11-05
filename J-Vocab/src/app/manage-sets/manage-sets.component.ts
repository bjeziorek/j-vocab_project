import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-manage-sets',
  templateUrl: './manage-sets.component.html',
  styleUrls: ['./manage-sets.component.scss']
})
export class ManageSetsComponent implements OnInit {

  theme = 'amethystTheme';

  constructor(private readonly themeService: ThemesService) { }

  ngOnInit(): void {
    this.theme = this.themeService.currentTheme;
    this.themeService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });
  }


}
