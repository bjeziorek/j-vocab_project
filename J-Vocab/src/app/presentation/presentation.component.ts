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
  summaryText = 'sum';

  chosenSet;
  rawData;
  listToDisplay;
  save;

  constructor(
    private readonly themeService: ThemesService,
    private readonly dataService: DataService,
    private readonly saveService: SaveService
  ) {

    this.summary = false;

    this.chosenSet = dataService.chosenSet;
    this.rawData = dataService.dataFromDB;
    this.save = saveService.getSave(null);

    if (this.chosenSet === 'none') {
      this.chosenSet = dataService.generateSet(this.rawData, this.save);
    }

    this.generateListFromChosenSet(this.chosenSet);
    this.setTexts();
    console.log(this.listToDisplay[0].character);

  }

  ngOnInit(): void {
    this.theme = this.themeService.currentTheme;
    this.themeService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });
  }


  generateListFromChosenSet(chosenSet) {
    this.listToDisplay = [...this.rawData]; //clone a nie referencja!!
  }

  showAnswerClick() {
    this.answerShown = true;
  }

  nextClick() {
    this.answerShown = false;
    if (this.listToDisplay.length > 1) {
      this.listToDisplay.shift();
      this.setTexts();
    } else {
      this.summary = true;
    }
  }

  setTexts() {
    this.questionText = this.listToDisplay[0].character;
    this.answerText = this.listToDisplay[0].meaningPL;
  }

  

  shuffleList(list) {
    return list;
  }

  /*
  wybranyZestaw=pobierzWybranyZestaw();
  suroweDane=pobierzDaneZBazy(wybranyZestaw);
  lista=przygotujListę(suroweDane);
  dopóki lista niepusta:
    wyświetl pierwszy element i czekaj na 'pokaż odpowiedź'
    wyświetl odpowiedź i czekaj na 'dalej'
    usuń pierwszy element i przesuń całą listę o 1
  lista pusta – wyświetl podsumowanie
  czekaj na 'zakończ'
  */

}
