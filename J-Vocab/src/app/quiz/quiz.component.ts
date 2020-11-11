import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Data } from '@angular/router';
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
  myAnswerText;
  summaryText;
  correctOrNot = '?';

  answerA = 'odpA';
  answerB = 'odpB';
  answerC = 'odpC';
  answerD = 'odpD';

  numberOfGoodAnswers = 0;
  numberOfBadAnswers = 0;

  romaji = [];

  snappingBlocksList = [];

  textDirection = 'jpToPl'; //

  chosenSet;
  rawData: Data[];
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
    this.shuffleArray(this.listToDisplay);
    this.setTexts();
    this.randomizeTypeOfExercise();


  }

  ngOnInit(): void {
    this.theme = this.themeService.currentTheme;
    this.themeService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });
  }

  random(minInclusive: number, maxExclusive: number): number {
    const rand = Math.floor((Math.random() * maxExclusive - minInclusive) + minInclusive);
    return rand;
  }

  shuffleArray(array: any[]): any[] {
    for (const i of array) {
      const r1 = this.random(0, array.length);//Math.floor((Math.random() * array.length));
      const r2 = this.random(0, array.length);//Math.floor((Math.random() * array.length));
      const t = array[r1];
      array[r1] = array[r2];
      array[r2] = t;
    }
    return array;
  }

  generateKanjiListForSnappingExercise() {
    this.setTexts();
    this.snappingBlocksList = [];
    for (const char of this.answerText) {
      this.snappingBlocksList.push(char);
    }

    let rawList = [...this.rawData];
    rawList = this.removeObjectFromList(this.listToDisplay[0], rawList);
    const r = this.random(0, rawList.length);
    for (const char2 of rawList[r].character) {
      this.snappingBlocksList.push(char2);
    }
    rawList = this.removeObjectFromList(rawList[r], rawList);
    for (const char2 of rawList[this.random(0, rawList.length)].character) {
      this.snappingBlocksList.push(char2);
    }

    this.snappingBlocksList = this.shuffleArray(this.snappingBlocksList);
  }

  generateListFromChosenSet(chosenSet) {
    this.listToDisplay = [...this.rawData]; //clone a nie referencja!!
  }

  randomizeTypeOfExercise() {

    const r = Math.floor(Math.random() * 3);
    switch (r) {

      case 0:
        this.randomTextSetting();
        this.exerciseType = 'abcd';
        break;
      case 1:
        this.textDirection = 'plToJp';
        this.exerciseType = 'writing';

        break;
      case 2:
        this.textDirection = 'plToJp';
        this.exerciseType = 'snapping';
        this.generateKanjiListForSnappingExercise();
        break;
    }
    this.setTexts();
    if (this.exerciseType === 'abcd') {
      this.generateAbcdValues();
    }
  }

  removeObjectFromList(object, list) {
    let index = list.indexOf(object);
    let temp = list[index];
    list[index] = list[0];
    list[0] = temp;
    list.shift();
    return list;
  }

  generateAbcdValues(): void {
    let poolOfPossibleAnswer = [...this.rawData];
    console.log(poolOfPossibleAnswer);

    if (this.textDirection === 'plToJp') {
      this.answerA = this.listToDisplay[0].character;
      poolOfPossibleAnswer = this.removeObjectFromList(this.answerA, poolOfPossibleAnswer);
      this.answerB = poolOfPossibleAnswer[this.random(0, poolOfPossibleAnswer.length)].character;
      poolOfPossibleAnswer = this.removeObjectFromList(this.answerB, poolOfPossibleAnswer);
      this.answerC = poolOfPossibleAnswer[this.random(0, poolOfPossibleAnswer.length)].character;
      poolOfPossibleAnswer = this.removeObjectFromList(this.answerC, poolOfPossibleAnswer);
      this.answerD = poolOfPossibleAnswer[this.random(0, poolOfPossibleAnswer.length)].character;
    } else {
      this.answerA = this.listToDisplay[0].meaningPL;
      poolOfPossibleAnswer = this.removeObjectFromList(this.answerA, poolOfPossibleAnswer);
      this.answerB = poolOfPossibleAnswer[this.random(0, poolOfPossibleAnswer.length)].meaningPL;
      poolOfPossibleAnswer = this.removeObjectFromList(this.answerB, poolOfPossibleAnswer);
      this.answerC = poolOfPossibleAnswer[this.random(0, poolOfPossibleAnswer.length)].meaningPL;
      poolOfPossibleAnswer = this.removeObjectFromList(this.answerC, poolOfPossibleAnswer);
      this.answerD = poolOfPossibleAnswer[this.random(0, poolOfPossibleAnswer.length)].meaningPL;
    }

    let answers = [this.answerA, this.answerB, this.answerC, this.answerD];
    answers = this.shuffleArray(answers);
    this.answerA = answers[0];
    this.answerB = answers[1];
    this.answerC = answers[2];
    this.answerD = answers[3];

    console.log(poolOfPossibleAnswer);
  }

  randomTextSetting() {
    const r = Math.random();
    console.log(r, r > 0.5);
    if (r > 0.5) {
      this.textDirection = 'jpToPl';
    } else {
      this.textDirection = 'plToJp';
    }

  }

  setTexts() {
    this.romaji = this.listToDisplay[0].sylabs;

    if (this.textDirection === 'jpToPl') {
      this.questionText = this.listToDisplay[0].character;
      this.answerText = this.listToDisplay[0].meaningPL;

    } else {
      if (this.textDirection === 'plToJp') {
        this.questionText = this.listToDisplay[0].meaningPL;
        this.answerText = this.listToDisplay[0].character;
      }
    }
  }

  showAnswerClick() {
    let concatedRomaji = [];
    for (let i in this.romaji) {
      concatedRomaji += this.romaji[i];
    }
    if (this.answerText === this.myAnswerText || concatedRomaji === this.myAnswerText) {
      this.correctOrNot = 'dobrze! :)';
      this.numberOfGoodAnswers++;
    } else {
      this.correctOrNot = 'źle :( ';
      this.numberOfBadAnswers++;
    }
    this.answerShown = true;
  }

  answerAbcdClick(letter) {
    switch (letter) {
      case 'a':
        this.myAnswerText = this.answerA;
        break;
      case 'b':
        this.myAnswerText = this.answerB;
        break;
      case 'c':
        this.myAnswerText = this.answerC;
        break;
      case 'd':
        this.myAnswerText = this.answerD;
        break;
    }
    this.showAnswerClick();
  }

  answerSnappingClick(event: Event): void {
    const chosenWords = (event.target as HTMLDivElement).parentElement.parentElement.children[1].children[1].children;

    this.myAnswerText = '';
    for (let i in chosenWords) {
      if (typeof (chosenWords[i]) === 'object') {
        this.myAnswerText += (chosenWords[i] as HTMLButtonElement).innerText;
      }
    }

    this.showAnswerClick();
  }

  answerWritingClick() {
    this.myAnswerText = this.answerInput.value;
    this.showAnswerClick();
  }

  nextClick() {
    this.answerInput.reset();
    this.answerShown = false;
    if (this.listToDisplay.length > 1) {
     
      
      this.listToDisplay.shift();
      this.shuffleArray(this.listToDisplay);
      this.randomizeTypeOfExercise();
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
