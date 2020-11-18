import { logging } from 'protractor';
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

  answerA: Data;// = 'odpA';
  answerB: Data;// = 'odpB';
  answerC: Data;// = 'odpC';
  answerD: Data;// = 'odpD';

  numberOfGoodAnswers = 0;
  numberOfBadAnswers = 0;

  romaji = [];
  romajiString='';

  snappingBlocksList = [];
  snappingBlocksList2 = [];

  textDirection = 'jpToPl'; //

  chosenSet;
  rawData: Data[];
  listToDisplay: Data[];
  save;

  saveState = '';

  forFuri;
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
    this.generateListFromChosenSet(this.chosenSet);
    this.shuffleArray(this.listToDisplay);
    this.dataService.forFurigana.next(this.listToDisplay[0]);
    this.dataService.forFuriganaStatic = this.listToDisplay[0];

    this.setTexts();
    this.randomizeTypeOfExercise();


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
    this.snappingBlocksList2 = [];

    for (const char of this.answerText) {
      this.snappingBlocksList.push(char);
    }

    for (let i=0;i<this.listToDisplay[0].character.length;i++) {
      this.snappingBlocksList.push(this.listToDisplay[0].character[i]);
      this.snappingBlocksList2.push({
        character: this.listToDisplay[0].character[i],
        sylabs:[this.listToDisplay[0].sylabs[i]]
      });
    }

    let rawList = [...this.rawData];
    rawList = this.removeObjectFromList(this.listToDisplay[0], rawList);
    const r = this.random(0, rawList.length);
   /*for (const char2 of rawList[r].character) {
      this.snappingBlocksList.push(char2);
    }*/
    for (let i=0;i<rawList[r].character.length;i++) {
      this.snappingBlocksList.push(rawList[r].character[i]);
      this.snappingBlocksList2.push({
        character: rawList[r].character[i],
        sylabs: [rawList[r].sylabs[i]]
      });
    }
    rawList = this.removeObjectFromList(rawList[r], rawList);
    /*for (const char2 of rawList[this.random(0, rawList.length)].character) {
      this.snappingBlocksList.push(char2);
    }*/
    const temp=rawList[this.random(0, rawList.length)];
    for (let i=0;i<temp.character.length;i++) {
      this.snappingBlocksList.push(temp.character[i]);
      this.snappingBlocksList2.push({
        character: temp.character[i],
        sylabs: [temp.sylabs[i]]
      });
    }
    this.snappingBlocksList = this.shuffleArray(this.snappingBlocksList);
    this.snappingBlocksList2 = this.shuffleArray(this.snappingBlocksList2);
   
  /*this.snappingBlocksList2=[];
    for(let i=0;i<this.snappingBlocksList.length;i++){
      this.snappingBlocksList2.push({
        character: this.snappingBlocksList[i],
        sylabs: ['KO', '-', 'SU'],
            
      });
    }
*/
  }


  generateListFromChosenSet(chosenSet) {
    if (chosenSet.length > 0) {
      this.listToDisplay = [...chosenSet];
    } else {
      this.listToDisplay = [...this.rawData]; //clone a nie referencja!!
    }
    this.chosenSetLength=this.listToDisplay.length;
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
      this.answerA = this.listToDisplay[0];//.character;
      poolOfPossibleAnswer = this.removeObjectFromList(this.answerA, poolOfPossibleAnswer);
      this.answerB = poolOfPossibleAnswer[this.random(0, poolOfPossibleAnswer.length)];//.character;
      poolOfPossibleAnswer = this.removeObjectFromList(this.answerB, poolOfPossibleAnswer);
      this.answerC = poolOfPossibleAnswer[this.random(0, poolOfPossibleAnswer.length)]//..character;
      poolOfPossibleAnswer = this.removeObjectFromList(this.answerC, poolOfPossibleAnswer);
      this.answerD = poolOfPossibleAnswer[this.random(0, poolOfPossibleAnswer.length)]//..character;
    } else {
      this.answerA = this.listToDisplay[0];//.meaningPL;
      poolOfPossibleAnswer = this.removeObjectFromList(this.answerA, poolOfPossibleAnswer);
      this.answerB = poolOfPossibleAnswer[this.random(0, poolOfPossibleAnswer.length)];//.meaningPL;
      poolOfPossibleAnswer = this.removeObjectFromList(this.answerB, poolOfPossibleAnswer);
      this.answerC = poolOfPossibleAnswer[this.random(0, poolOfPossibleAnswer.length)];//.meaningPL;
      poolOfPossibleAnswer = this.removeObjectFromList(this.answerC, poolOfPossibleAnswer);
      this.answerD = poolOfPossibleAnswer[this.random(0, poolOfPossibleAnswer.length)];//.meaningPL;
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
    this.romajiString='';
    this.romaji = this.listToDisplay[0].sylabs;
    for(let i=0;i<this.listToDisplay[0].length;i++){
      this.romajiString+=this.listToDisplay[0].sylabs[i];
    }

    if (this.textDirection === 'jpToPl') {
      this.questionText = this.listToDisplay[0].character;
      this.answerText = this.listToDisplay[0].meaningPL;
    } else {
      if (this.textDirection === 'plToJp') {
        this.questionText = this.listToDisplay[0].meaningPL;
        this.answerText = this.listToDisplay[0].character;
      }
    }
    this.forFuri = this.listToDisplay[0];
    this.dataService.forFurigana.next(this.listToDisplay[0]);

    this.dataService.forFuriganaStatic = this.listToDisplay[0];
  }

  showAnswerClick() {
    let concatedRomaji = [];
    for (let i in this.romaji) {
      concatedRomaji += this.romaji[i];
    }
    console.log(this.answerText ,this.myAnswerText.meaningPL,this.answerText===this.myAnswerText.meaningPL);
    if (this.answerText === this.myAnswerText ||
       concatedRomaji === this.myAnswerText ||
        this.answerText==this.myAnswerText.meaningPL ||
         this.answerText==this.myAnswerText.character) {
      this.correctOrNot = 'dobrze! :)';
      this.numberOfGoodAnswers++;
    } else {
      this.correctOrNot = 'źle :( ';
      this.numberOfBadAnswers++;
    }
    this.answerShown = true;
  }

  answerAbcdClick(letter, event) {
    console.log('e', event);
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
   
    //const chosenWords = (event.target as HTMLDivElement).parentElement.parentElement.children[1].children[1].children;
    let chosenWords = (event.target as HTMLDivElement).parentElement.parentElement.children[1].children[1].children;


    const a = (event.target as HTMLDivElement).parentElement.children[0].children[1].children;
    console.log(a);
 
    chosenWords=a;
    this.myAnswerText = '';
    for (let i in chosenWords) {
      if (typeof (chosenWords[i]) === 'object') {
        console.log((chosenWords[i] as HTMLButtonElement).children[0].className);
        //this.myAnswerText += (chosenWords[i] as HTMLButtonElement).innerText;
        this.myAnswerText +=(chosenWords[i] as HTMLButtonElement).children[0].className;
      }
    }

    this.showAnswerClick();
  }

  answerWritingClick() {
    this.myAnswerText = this.answerInput.value;
    if(!this.myAnswerText){
      this.myAnswerText='<<brak odpowiedzi>>';
    }
    this.showAnswerClick();
  }

  nextClick() {
    this.answerInput.reset();
    this.myAnswerText=null;
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


    let btn = (event.target as Element);
    console.log(btn);
    while (btn.nodeName !== "BUTTON") {
      btn = btn.parentElement;
    }
    console.log(btn);
    if ((btn as HTMLButtonElement).parentElement.id === 'resourceBox') {
      (btn as HTMLButtonElement).parentElement.parentElement.children[3].appendChild(btn as HTMLButtonElement);
    } else {
      if ((btn as HTMLButtonElement).parentElement.id === 'setBox') {
        (btn as HTMLButtonElement).parentElement.parentElement.children[1].appendChild(btn as HTMLButtonElement);
      }
    }
    this.saveState = '';
  }


}
