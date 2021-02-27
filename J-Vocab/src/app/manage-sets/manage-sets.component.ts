import { Converter } from './../converter';
import { Tags } from './tags';
import { Data } from './../raw-data.model';
import { SaveHelper } from './../save-helper';
import { Component, EventEmitter, OnInit, SystemJsNgModuleLoader, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { SaveService } from '../save.service';
import { ThemesService } from '../themes.service';
import { ElementRef } from '@angular/core';
import { removeSummaryDuplicates } from '@angular/compiler';

@Component({
  selector: 'app-manage-sets',
  templateUrl: './manage-sets.component.html',
  styleUrls: ['./manage-sets.component.scss']
})
export class ManageSetsComponent implements OnInit {

  @ViewChild('setBox', { static: false }) public setBox: ElementRef;
  @ViewChild('resourceBox', { static: false }) public resourceBox: ElementRef;

  tagsHandler = new Tags();
  tags = this.tagsHandler.listTags();

  theme = 'amethystTheme';
  saveState = '';
  rawData: Data[];
  resourceBoxContent: Data[];
  setBoxContent: Data[];

  converter = new Converter();

  saveHelper = new SaveHelper();
  loadedData;
  keyStringForSavedSets = 'set1';
  not0Elements = 0;

  constructor(
    private readonly themeService: ThemesService,
    private readonly dataService: DataService,
    private readonly saveService: SaveService
  ) {
    this.resourceBoxContent = [];
    this.setBoxContent = [];

    this.setBoxContent = this.rawData = dataService.dataFromDB;
    //  this.saveHelper.save('test', this.rawData);
    this.saveHelper.save('test', this.setBoxContent);
    this.loadedData = this.saveHelper.load(this.keyStringForSavedSets);
  }
  ngOnInit(): void {
    this.theme = this.themeService.currentTheme;
    this.themeService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });
  }
  childList = [];
  tagClick(evt: Event) {
    //todo - przed przeslanie listy usunac z niej elementy ktore sa w wybrane bo sie duplikuja

    let child = this.resourceBox.nativeElement.firstChild as HTMLButtonElement;
    child.addEventListener('click', this.switchClick);
    this.childList.push(child);
    console.log(this.childList[0].parentElement);
    // let y= Object.assign({},this.resourceBox);

    let btnEl = evt.target as HTMLButtonElement;
    btnEl.classList.toggle("clicked");
    btnEl.classList.toggle("unclicked");
    console.log('tagclick test', btnEl.innerHTML, this.setBox.nativeElement);

    this.setBoxContent = this.rawData = this.tagsHandler.newDb(btnEl.innerHTML);
    // console.log(x);
    // this.resourceBox=y;

    setTimeout(() => {
      //   (this.resourceBox.nativeElement as HTMLDivElement).appendChild(this.childList[0] as HTMLButtonElement);
    }, 1000);


    console.log(this.childList[0].parentElement);
    this.removeDuplicates();
  }
  removeDuplicates() {
    for (let i = 0; i < this.setBoxContent.length; i++) {
      for (let j = 0; j < this.resourceBoxContent.length; j++) {
        if (this.setBoxContent[i].character === this.resourceBoxContent[j].character) {
          this.setBoxContent.splice(i, 1);
        }
      }
    }
  }

  toStr(obj: Data): string {
    return JSON.stringify(obj);
  }

  moveFromArrayToArray(rawWhat, setToResource) {
    let what = JSON.parse((rawWhat as HTMLButtonElement).id);
    if (setToResource) {
      const index = findIndex(what, this.setBoxContent);
      if (index > -1) {
        let z = this.setBoxContent.splice(index, 1);
        this.resourceBoxContent.push(z[0]);
      } else {
        console.log("nie ma takiego elementu!!!");
      }
    } else {
      const index = findIndex(what, this.resourceBoxContent);
      if (index > -1) {
        let z = this.resourceBoxContent.splice(index, 1);
        console.log(z);
        this.setBoxContent.push(z[0]);
      }
    }
    function findIndex(what, source) {
      for (let i = 0; i < source.length; i++) {
        if (source[i].character === what.character) {
          return i;
        }
      }
      return -1;
    }
  }

  switchClick(event: Event): void {
    //  console.log(this.setBoxContent);
    //  console.log('t', (event.target as HTMLButtonElement).parentElement.id);
    if((event.target as HTMLButtonElement).parentElement){

    
    if ((event.target as HTMLButtonElement).parentElement.id === 'resourceBox') {
      this.not0Elements--;
      this.moveFromArrayToArray(event.target as HTMLButtonElement, false);
      //  this.setBox.nativeElement.appendChild(event.target as HTMLButtonElement);
      ////  (event.target as HTMLButtonElement).parentElement.parentElement.children[3].appendChild(event.target as HTMLButtonElement);
    } else {
      if ((event.target as HTMLButtonElement).parentElement.id === 'setBox') {
        this.not0Elements++;
        this.moveFromArrayToArray(event.target as HTMLButtonElement, true);

        //   this.resourceBox.nativeElement.appendChild(event.target as HTMLButtonElement);
        /////   (event.target as HTMLButtonElement).parentElement.parentElement.children[1].appendChild(event.target as HTMLButtonElement);
      }
    }
  }else{
    console.log('warining! event.target as HTMLButtonElement).parentElement is '+(event.target as HTMLButtonElement).parentElement);
  }
    this.saveState = '';
    console.log(this.setBoxContent);
  }

  clearListClick(event) {
    const el = (event.target as HTMLButtonElement).parentElement.nextElementSibling;

    for (let i = 0; i < el.children.length; i++) {
      this.not0Elements--;
      this.moveFromArrayToArray(el.children[i], false);
    }
    /*const length = el.children.length
    for (let i = 0; i < length; i++) {
      this.not0Elements--;
      if (el.children[0].tagName === 'BUTTON') {
        //  this.setBox.nativeElement.appendChild(el.children[0] as HTMLButtonElement);
        // el.children[0].parentElement.parentElement.children[3].appendChild(el.children[0] as HTMLButtonElement);
        

      }
    }*/
  }

  saveClick(event): void {
    let p = this.resourceBox.nativeElement.children;
    // let p = (event.target as HTMLButtonElement).parentElement.parentElement.children[1].children;

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
