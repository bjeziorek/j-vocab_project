import { ThemesService } from './../themes.service';
import { DataService } from './../data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from './../raw-data.model';
import { SettingsService } from './../settings.service';
import { Converter } from './../converter';
import { KanjiObj } from './../kanji-obj.model';
import { Kana } from './kana';

@Component({
  selector: 'app-furigana',
  templateUrl: './furigana.component.html',
  styleUrls: ['./furigana.component.scss']
})

export class FuriganaComponent implements OnInit {

  @Input() mode = 'romaji'; // kanji, hiragana, katakana
  @Input() character = 'none';  // nrKanji, sylaba, sylaba, litera

  @Input() romaji = ''; // porownaj do uppercase jesli equal to katakane, else hiragana
  @Input() kanji = ''; // tu bedzie znak, spr czy nie jest to kana

  theme = 'amethystTheme';

  kanaOn = true; // flaga, ze
  romajiOn = true;
  characterOn = true;
  meaningOn = true;

  hiraganaString = 'hiragana';
  katakanaString = 'katakana';

  kanjiArray: string[];
  romajiArray: string[];
  kanaArray: string[];
  iteratingArray: number[];


  @Input() txtObjVocab: KanjiObj;


  @Input() txtObj: Data; //KanjiObj;
  word: any;

  emptyString = '.';
  testValue = 99;
  resetValue = 0;
  iterator = -1;

furiObj:Data;
  kanaDbHandler = new Kana();

  currentUrl;

  constructor(
    private route: Router,
    private readonly dataService: DataService,
    private readonly settingsService: SettingsService,
    private readonly themeService:ThemesService
    ) {

      this.theme=themeService.currentTheme;
    // console.log('txtobj', this.txtObj);

    this.kanaOn = settingsService.kanaOnStatic;
    this.romajiOn = settingsService.romajiOnStatic;
    this.characterOn = settingsService.characterOnStatic;
    this.meaningOn = settingsService.meaningOnStatic;
    this.furiObj=dataService.forFuriganaStatic;
  }

  ngOnInit(): void {

    this.route.events.subscribe((urlObj: any) => {
      this.currentUrl = urlObj.url ?? this.currentUrl;
      if (this.currentUrl === '/kanji' || this.currentUrl === '/kana') {
        this.settingsService.kanaOn.next(false);
        this.settingsService.kanaOnStatic = false;
        this.settingsService.romajiOn.next(false);
        this.settingsService.romajiOnStatic = false;
      }
    });

    this.dataService.forFurigana.subscribe((data: Data) => {
      this.x90deg(data);
    });

    this.themeService.theme.subscribe((data: string) => {
      this.theme = data;
      console.log('theme',data);
    });

    this.settingsService.characterOn.subscribe((data: boolean) => {
      this.characterOn = data;
    });
    this.settingsService.kanaOn.subscribe((data: boolean) => {
      this.kanaOn = data;
    });
    this.settingsService.romajiOn.subscribe((data: boolean) => {
      this.romajiOn = data;
    });
    this.settingsService.meaningOn.subscribe((data: boolean) => {
      this.meaningOn = data;
    });
    this.settingsService.updateData.subscribe((data: Data) => {
      this.txtObj = data;
      this.x90deg(this.txtObj);
    });
    this.x90deg(this.txtObj);
  }



  iterate() {
    this.iterator++;
    return this.iterator;
  }

  romajiToKana(romaji: string): string {
    const kana = new Converter().toKana(romaji);
    return kana;
  }

  toKana2(romajiSounds: string): string {
    let output: string;
    output = '';
    const kana = this.kanaDbHandler.hiragana; // any;

    output = kana[romajiSounds];
    return output;

  }

  x90deg(txtObj): void {
console.log('txtObj',txtObj);
    let arrayOfRomajiKanjiKanaStrapsArrays: string[][];


    this.kanjiArray = [];
    this.romajiArray = [];
    this.kanaArray = [];
    arrayOfRomajiKanjiKanaStrapsArrays = [];

    //console.log(txtObj, txtObj.character);
    this.kanjiArray = this.stringToArray(txtObj.character);

    for (const el of txtObj.sylabs) {
      this.romajiArray.push(this.arrayToString(el));
    }

    this.iteratingArray = [];
    for (let i = 0; i < this.romajiArray.length; i++) {
      this.iteratingArray.push(i);
    }

    //console.log('iter', this.iteratingArray);

    for (const el of txtObj.sylabs) {
      let processed = this.arrayToString(el);
      processed = new Converter().toKana(processed);
      this.kanaArray.push(processed);
      if(this.kanaArray[this.kanaArray.length-1]===this.kanjiArray[this.kanaArray.length-1]){
        this.kanaArray[this.kanaArray.length-1]=''; //kropeczka!
      }
      
    }
    this.word = { kana: this.kanaArray, kanji: this.kanjiArray, romaji: this.romajiArray };
    // console.log('90', this.kanjiArray, this.romajiArray, this.kanaArray);

  }// x90deg

  toKana(romajiSounds: string[]): string {
    console.log('romajiSounds', romajiSounds, 'abc', romajiSounds[0], romajiSounds[0][0][0]);
    let output: string;
    output = '';
    let kana: any;


    // if kapitalikami - katakana
    for (let k = 0; k < romajiSounds.length; k++) {
      for (let j = 0; j < romajiSounds[k].length; j++) {
        for (let i = 0; i < romajiSounds[k][j].length; i++) {
          if (romajiSounds[k][j][i] === (romajiSounds[k][j][i] as string).toUpperCase()) {
            kana = this.kanaDbHandler.katakana;
          } else {
            kana = this.kanaDbHandler.hiragana;
          }
          console.log(romajiSounds[k][j][i], kana['NI'.toLowerCase()]);
          console.log(kana[(romajiSounds[k][j][i] as string).toLowerCase()], output);
          output += kana[(romajiSounds[k][j][i] as string).toLowerCase()];
        }
      }
      output += ', ';
    }
    output = output.substr(0, output.length - 2);
    return output;

  }

  isKatakana(maybeKanji: string): boolean {
    let is = false;
    for (const k in this.kanaDbHandler.hiragana) {
      if (this.kanaDbHandler.katakana[k] === maybeKanji) {
        is = true;
      }
    }
    console.log(maybeKanji, 'is katakana?', is);
    return is;
  }

  isHiragana(maybeKanji): boolean {
    let is = false;
    for (const k in this.kanaDbHandler.hiragana) {
      if (this.kanaDbHandler.hiragana[k] === maybeKanji) {
        is = true;
      }
    }
    console.log(maybeKanji, 'is hiragana?', is);
    return is;
  }

  romanize(array: string[]): string {
    let str = '';
    for (let i = 0; i < array.length; i++) {
      str += array[i];
    }
    return str;
  }

  kananize(txtToKananize: string, character: string): string {
    let out = '';
    if (!this.isHiragana(character)) {
      out = this.kanaDbHandler.hiragana[txtToKananize];
    } else {
      if (!this.isKatakana(character)) {
        out = this.kanaDbHandler.katakana[txtToKananize];
      } else {
        // out = kanji;
        out = this.emptyString;
      }
    }


    if (this.isHiragana(character)) {
      out = this.emptyString;
    } else {
      if (this.isKatakana(character)) {
        out = this.emptyString;
      } else {
        out = this.kanaDbHandler.hiragana[txtToKananize];
      }
    }

    return out;
  }

  stringToArray(str: string): string[] {
    
    console.log('stringToArray input',str);
    const array = str.split('');
    // console.log('array:', array);
    return array;
  }

  arrayToString(array: string): string {
    let str = '';
    for (const a of array) {
      str += a;
    }

    return str;
  }


  displayFurigana(kanji: string): string {

    return kanji;
  }
}
