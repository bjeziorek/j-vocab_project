import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { SaveHelper } from '../save-helper';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {

  mode = 'none';

  theme = 'amethystTheme';
  keyStringForSavedSets = 'set1';
  chosenSetString = 'wszystko';
  chosenSetData = [];
  saveHelper = new SaveHelper();
  loadedData;
  preparedSets = [];

  constructor(
    private readonly themeService: ThemesService,
    private readonly dataService: DataService) {
    this.loadedData = this.saveHelper.load(this.keyStringForSavedSets);
    this.prepareSets();
  }

  ngOnInit(): void {
    this.theme = this.themeService.currentTheme;
    this.themeService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });
  }

  prepareSets() {
    for (let i = 0; i < this.loadedData.length; i++) {
      let str = '';
      for (let j = 0; j < this.loadedData[i].length; j++) {
        str += this.loadedData[i][j].character;
      }
      let z = this.loadedData[i];
      this.preparedSets.push({ string: str, data: z });
    }
  }

  clearClassList(children) {
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove('chosen');
    }
  }

  chosenSetClick(event) {
    if (!(event.target as HTMLButtonElement).classList.contains('chosen')) {
      this.chosenSetString = JSON.parse((event.target as HTMLButtonElement).id).string;
      const listOfClassToClear = (event.target as HTMLButtonElement).parentElement.children;
      this.clearClassList(listOfClassToClear);
      (event.target as HTMLButtonElement).classList.add('chosen');
      const data = JSON.parse((event.target as HTMLButtonElement).id).data
      this.dataService.chosenSet = data;
      this.dataService.chosenSetDynamic.next(data);
    } else {
      // const rawData = this.dataService.dataFromDB;
      // const save = saveService.getSave(null);
      this.chosenSetString = 'wszystko';
      (event.target as HTMLButtonElement).classList.remove('chosen');
      const data = this.dataService.dataFromDB;
      this.dataService.chosenSet = data;
      this.dataService.chosenSetDynamic.next(data);//this.dataService.generateSet(this.rawData, this.save));
    }
  }

  quizClick(): void {
    this.mode = 'quiz';
  }
  presentationClick(): void {
    this.mode = 'presentation';
  }
  backToLearnClick(): void {
    this.mode = 'none';
    this.chosenSetString = 'wszystko';
    const data = this.dataService.dataFromDB;
    this.dataService.chosenSet = data;
    this.dataService.chosenSetDynamic.next(data);//this.dataService.generateSet(this.rawData, this.save));
    console.log(data);
  }

}
