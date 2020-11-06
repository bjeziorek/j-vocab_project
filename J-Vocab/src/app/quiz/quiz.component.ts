import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { SaveService } from '../save.service';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  theme = 'amethystTheme';

  answerInput = new FormControl();

  exerciseType = 'abcd';

  answerShown;
  summary;
  questionText;
  answerText;
  summaryText;

  answerA = 'odpA';
  answerB = 'odpB';
  answerC = 'odpC';
  answerD = 'odpD';

  chosenSet;
  rawData;
  listToDisplay;
  save;

  saveState = '';

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

    this.randomizeTypeOfExercise();

  }

  generateListFromChosenSet(chosenSet) {
    this.listToDisplay = [...this.rawData]; //clone a nie referencja!!
  }

  ngOnInit(): void {
    this.theme = this.themeService.currentTheme;
    this.themeService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });
  }

  randomizeTypeOfExercise() {
    const r = Math.floor(Math.random() * 3);
    switch (r) {
      case 0:
        this.exerciseType = 'abcd';
        break;
      case 1:
        this.exerciseType = 'writing';
        break;
      case 2:
        this.exerciseType = 'snapping';
        break;
    }
  }

  setTexts() {
    this.questionText = this.listToDisplay[0].character;
    this.answerText = this.listToDisplay[0].meaningPL;
  }

  showAnswerClick() {
    console.log('form',this.answerInput.value);
    this.answerShown = true;
  }

  answerClick(letter){
    console.log('aaaa',letter);
    this.showAnswerClick();
  }

  nextClick() {
    this.answerInput.reset();
    this.answerShown = false;
    if (this.listToDisplay.length > 1) {
      this.randomizeTypeOfExercise();
      this.listToDisplay.shift();
      this.setTexts();
    } else {
      this.summary = true;
    }
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


}
