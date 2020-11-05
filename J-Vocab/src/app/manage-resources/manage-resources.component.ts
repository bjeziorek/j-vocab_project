import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-manage-resources',
  templateUrl: './manage-resources.component.html',
  styleUrls: ['./manage-resources.component.scss']
})
export class ManageResourcesComponent implements OnInit {

  theme = 'amethystTheme';

  constructor(private readonly themeService: ThemesService) { }

  ngOnInit(): void {
    this.theme = this.themeService.currentTheme;
    this.themeService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });
  }



}
