import { Tags } from './tags';
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

  tagsHandler=new Tags();
  tags = this.tagsHandler.listTags();

  theme = 'amethystTheme';
  saveState = '';
  rawData: Data[];
  saveHelper = new SaveHelper();
  loadedData;
  keyStringForSavedSets = 'set1';
  not0Elements = 0;

  constructor(
    private readonly themeService: ThemesService,
    private readonly dataService: DataService,
    private readonly saveService: SaveService
  ) {
    this.rawData = dataService.dataFromDB;
    this.saveHelper.save('test', this.rawData);
    this.loadedData = this.saveHelper.load(this.keyStringForSavedSets);
  }
  ngOnInit(): void {
    this.theme = this.themeService.currentTheme;
    this.themeService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });
  }

  tagClick(evt:Event) {
    let btnEl = evt.target as HTMLButtonElement;
    btnEl.classList.toggle("clicked");
    btnEl.classList.toggle("unclicked");
    console.log('tagclick test',btnEl.id);
    this.rawData = this.tagsHandler.newDb(btnEl.id);
  }

  toStr(obj: Data): string {
    return JSON.stringify(obj);
  }

  switchClick(event: Event): void {
    if ((event.target as HTMLButtonElement).parentElement.id === 'resourceBox') {
      this.not0Elements--;
      (event.target as HTMLButtonElement).parentElement.parentElement.children[3].appendChild(event.target as HTMLButtonElement);
    } else {
      if ((event.target as HTMLButtonElement).parentElement.id === 'setBox') {
        this.not0Elements++;
        (event.target as HTMLButtonElement).parentElement.parentElement.children[1].appendChild(event.target as HTMLButtonElement);
      }
    }
    this.saveState = '';
  }

  clearListClick(event) {
    const el = (event.target as HTMLButtonElement).parentElement.nextElementSibling;
    //console.log(el.children);
    const length = el.children.length
    for (let i = 0; i < length; i++) {
      this.not0Elements--;
      console.log(el.children[i], length);
      if (el.children[0].tagName === 'BUTTON') {
        el.children[0].parentElement.parentElement.children[3].appendChild(el.children[0] as HTMLButtonElement);
      }
    }
  }

  saveClick(event): void {
    let p = (event.target as HTMLButtonElement).parentElement.parentElement.children[1].children;

    let setToSave = [];
    let z: Data;

    for (let i = 0; i < p.length; i++) {
      console.log(p.length);
      z = JSON.parse(p[i].id);
      setToSave.push(z);
      console.log(z, setToSave);
    }

    this.loadedData.push(setToSave);

    this.saveHelper.add(this.keyStringForSavedSets, setToSave);

    this.saveState = 'zapisano';
    this.clearListClick(event);
  }


  deleteClick(event) {

    this.saveHelper.remove(this.keyStringForSavedSets, JSON.parse((event.target as HTMLButtonElement).id));
    (event.target as HTMLButtonElement).parentElement.parentElement.removeChild((event.target as HTMLButtonElement).parentElement);
  }

}
