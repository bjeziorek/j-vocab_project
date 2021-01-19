import { SaveService } from './../save.service';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  theme = 'amethystTheme';
  answerShown = false;
  summary = false;
  questionText = 'q';
  answerText = 'a';
  romajiText = 'r';
  summaryText = 'sum';

  chosenSet;
  rawData;
  listToDisplay;
  save;
  forFuri;

  grammarBool234 = false;
chosenSetLength=0;

  constructor(
    private readonly themeService: ThemesService,
    private readonly dataService: DataService,
    private readonly saveService: SaveService
  ) {


    this.summary = false;
    

    this.chosenSet = dataService.chosenSet;
    this.rawData = dataService.dataFromDB;
    this.save = saveService.getSave(null);

    if (this.chosenSet === []) {
      this.chosenSet = dataService.generateSet(this.rawData, this.save);
    }

    this.initListToDisplay();
  }

  ngOnInit(): void {
    this.theme = this.themeService.currentTheme;
    this.themeService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });
    this.dataService.chosenSetDynamic.subscribe((receivedTheme: string) => {
      this.chosenSet = receivedTheme;
      this.initListToDisplay();
    });
  }

  initListToDisplay(): void {
    this.generateListFromChosenSet(this.chosenSet);
    this.setTexts();
    this.dataService.forFurigana.next(this.listToDisplay[0]);
    this.dataService.forFuriganaStatic = this.listToDisplay[0];
  }

  generateListFromChosenSet(chosenSet): void {
    if (chosenSet.length > 0) {
      this.listToDisplay = [...chosenSet];
    } else {
      this.listToDisplay = [...this.rawData]; //clone a nie referencja!!
    }
    this.chosenSetLength=this.listToDisplay.length;
  }

  setTexts(): void {
    this.questionText = this.listToDisplay[0].character;
    this.answerText = this.listToDisplay[0].meaningPL;
    this.romajiText = this.listToDisplay[0].sylabs;
    this.forFuri = this.listToDisplay[0];
    this.dataService.forFurigana.next(this.listToDisplay[0]);

    this.dataService.forFuriganaStatic = this.listToDisplay[0];
    console.log(this.listToDisplay[0]);
  }

  shuffleList(list): void {
    return list;
  }
  showAnswerClick(): void {
    this.answerShown = true;
  }

  nextClick(): void {
    this.answerShown = false;
    if (this.listToDisplay.length > 1) {
      this.listToDisplay.shift();
      this.setTexts();
    } else {
      this.summary = true;
      const x = this.chosenSetLength.toString();
      this.grammarBool234 =
        x.charAt(x.length-1) === '4' ||
        x.charAt(x.length-1) === '3' ||
        x.charAt(x.length-1) === '2';
        console.log(this.grammarBool234,x.charAt(x.length-1));
    }
  }
}
