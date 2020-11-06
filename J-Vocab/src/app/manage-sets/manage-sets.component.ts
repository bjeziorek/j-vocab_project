import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-manage-sets',
  templateUrl: './manage-sets.component.html',
  styleUrls: ['./manage-sets.component.scss']
})
export class ManageSetsComponent implements OnInit {

  theme = 'amethystTheme';
  saveState = '';

  constructor(private readonly themeService: ThemesService) { }

  ngOnInit(): void {
    this.theme = this.themeService.currentTheme;
    this.themeService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });
  }

  switchClick(event: Event): void {
    if ((event.target as HTMLButtonElement).parentElement.id === 'resourceBox') {
      (event.target as HTMLButtonElement).parentElement.parentElement.children[3].appendChild(event.target as HTMLButtonElement);
    } else {
      if ((event.target as HTMLButtonElement).parentElement.id === 'setBox') {
        (event.target as HTMLButtonElement).parentElement.parentElement.children[1].appendChild(event.target as HTMLButtonElement);
      }
    }
    this.saveState = '';
  }

  SaveClick(): void {
    this.saveState = 'zapisano';
  }

}
