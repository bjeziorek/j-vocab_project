import { Data } from './../raw-data.model';
import { SaveHelper } from './../save-helper';
import { Component, EventEmitter, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { DataService } from '../data.service';
import { SaveService } from '../save.service';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-manage-sets',
  templateUrl: './manage-sets.component.html',
  styleUrls: ['./manage-sets.component.scss']
})
export class ManageSetsComponent implements OnInit {

  theme = 'amethystTheme';
  saveState = '';
  rawData: Data[];
  saveHelper=new SaveHelper();

  constructor(
    private readonly themeService: ThemesService,
    private readonly dataService: DataService,
    private readonly saveService: SaveService
  ) {
   this.rawData = dataService.dataFromDB;
   this.saveHelper.save('test',this.rawData);

  }
  ngOnInit(): void {
    this.theme = this.themeService.currentTheme;
    this.themeService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });
  }

toStr(obj:Data):string{
  return JSON.stringify(obj);
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

  SaveClick(event): void {
    let p=(event.target as HTMLButtonElement).parentElement.parentElement.children[1].children;
   

    //pobierz sets
    //dodaj nowy/edytuj
    //zapisz

    let setToSave=[];
    let z:Data;

    for(let i=0;i<p.length;i++){ 
     console.log(p.length);
      z=JSON.parse(p[i].id);
      setToSave.push(z);
      console.log(z,setToSave);
    }

    this.saveHelper.save('set1', setToSave);

    this.saveState = 'zapisano';
  }

}
