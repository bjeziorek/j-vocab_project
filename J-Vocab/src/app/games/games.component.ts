import { DataBase } from './../data-base';
import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  theme = 'amethystTheme';
  memoElements = [];
  /*[ //first bool is for kanji/meaning
    {
      character: '日曜日',
      sylabs: ['nichi', 'you', 'bi'],
      meaningPL: 'niedziela',
      tags: ['daty', 'n5'],
      collected: false,
      kanji: true
    },
    {
      character: '月曜日',
      sylabs: ['getsu', 'you', 'bi'],
      meaningPL: 'poniedziałek',
      tags: ['daty', 'n5'],
      collected: false,
      kanji: true
    },
    {
      character: '火曜日',
      sylabs: ['ka', 'you', 'bi'],
      meaningPL: 'wtorek',
      tags: ['daty', 'n5'],
      collected: false,
      kanji: true
    },
    {
      character: '水曜日',
      sylabs: ['sui', 'you', 'bi'],
      meaningPL: 'środa',
      tags: ['daty', 'n5'],
      collected: false,
      kanji: true
    },
    {
      character: '木曜日',
      sylabs: ['moku', 'you', 'bi'],
      meaningPL: 'czwartek',
      tags: ['daty', 'n5'],
      collected: false,
      kanji: true
    },
    {
      character: '金曜日',
      sylabs: ['kin', 'you', 'bi'],
      meaningPL: 'piątek',
      tags: ['daty', 'n5'],
      collected: false,
      kanji: true
    },
    {
      character: '土曜日',
      sylabs: ['do', 'you', 'bi'],
      meaningPL: 'sobota',
      tags: ['daty', 'n5'],
      collected: false,
      kanji: true
    },
    {
      character: 'お見合い',
      sylabs: ['o', 'mi', 'a', 'i'],
      meaningPL: 'rozmowa przedmałżeńska',
      tags: ['nigashitaSakana', 'n?'],
      collected: false,
      kanji: true
    },
    //// and again the same
    {
      character: '日曜日',
      sylabs: ['nichi', 'you', 'bi'],
      meaningPL: 'niedziela',
      tags: ['daty', 'n5'],
      collected: false,
      kanji: false
    },
    {
      character: '月曜日',
      sylabs: ['getsu', 'you', 'bi'],
      meaningPL: 'poniedziałek',
      tags: ['daty', 'n5'],
      collected: false,
      kanji: false
    },
    {
      character: '火曜日',
      sylabs: ['ka', 'you', 'bi'],
      meaningPL: 'wtorek',
      tags: ['daty', 'n5'],
      collected: false,
      kanji: false
    },
    {
      character: '水曜日',
      sylabs: ['sui', 'you', 'bi'],
      meaningPL: 'środa',
      tags: ['daty', 'n5'],
      collected: false,
      kanji: false
    },
    {
      character: '木曜日',
      sylabs: ['moku', 'you', 'bi'],
      meaningPL: 'czwartek',
      tags: ['daty', 'n5'],
      collected: false,
      kanji: false
    },
    {
      character: '金曜日',
      sylabs: ['kin', 'you', 'bi'],
      meaningPL: 'piątek',
      tags: ['daty', 'n5'],
      collected: false,
      kanji: false
    },
    {
      character: '土曜日',
      sylabs: ['do', 'you', 'bi'],
      meaningPL: 'sobota',
      tags: ['daty', 'n5'],
      collected: false,
      kanji: false
    },
    {
      character: 'お見合い',
      sylabs: ['o', 'mi', 'a', 'i'],
      meaningPL: 'rozmowa przedmałżeńska',
      tags: ['nigashitaSakana', 'n?'],
      collected: false,
      kanji: false
    }
  ];*/

  totalRevealed = 0;
  revealedBlocks = 0;
  newBlock = '';
  previousBlock = '';
  indexOfComparedBlock1 = -1;
  indexOfComparedBlock2 = -1;

  constructor(private readonly themeService: ThemesService) {
    this.initMemo('random');
  }

  ngOnInit(): void {
    this.theme = this.themeService.currentTheme;
    this.themeService.theme.subscribe((receivedTheme: string) => {
      this.theme = receivedTheme;
    });
  }


  initMemo(setToLoad) {
    this.prepareArray(setToLoad);
    this.shuffle();
  }

  prepareArray(setToLoad) {
    let array = [];
    if (setToLoad === 'random') {
      let data = new DataBase().resources;
      for (let i = 0; i < 8; i++) {
        let r = Math.floor((Math.random() * data.length - i));
        array.push(data[r]);
        data[r] = data[data.length - 1 - i];
      }
    }
    this.memoElements = [];
    for (let i = 0; i < array.length; i++) {
      this.memoElements.push(
        {
          character: array[i].character,
          meaningPL: array[i].meaningPL,
          collected: false,
          kanji:true
         }
      );
    }
    for (let i = 0; i < array.length; i++) {
      this.memoElements.push(
        {
          character: array[i].character,
          meaningPL: array[i].meaningPL,
          collected: false,
          kanji:false
         }
      );
    }
  }

  shuffle() {
    for (let i = 1; i < this.memoElements.length; i++) {
      let t = this.memoElements[i];
      let r = Math.floor((Math.random() * 16));
      this.memoElements[i] = this.memoElements[r];
      this.memoElements[r] = t;
    }
  }

  startAgain() {
    for (let i = 0; i < this.memoElements.length; i++) {
      this.memoElements[i].collected = false;
    }
    this.totalRevealed = 0;
    this.revealedBlocks = 0;
    this.newBlock = '';
    this.previousBlock = '';
    this.indexOfComparedBlock1 = -1;
    this.indexOfComparedBlock2 = -2;
    this.initMemo('random');
  }

  lookForElemAndEdit(id, isKanji, newCollectedValue) {

    if (newCollectedValue) {
      this.totalRevealed++;
    } else {
      this.totalRevealed--;
    }

    let index = -1;
    for (let i = 0; i < this.memoElements.length; i++) {
      if ((this.memoElements[i].character === id || this.memoElements[i].meaningPL === id) && this.memoElements[i].kanji === isKanji) {
        this.memoElements[i].collected = newCollectedValue;
      }
    }
    return index;
  }

  isCharacter(str) {
    for (let i = 0; i < this.memoElements.length; i++) {
      if (this.memoElements[i].character === str) {
        return true;
      }
    }
    return false;
  }

  compare(a, b) {
    for (let i = 0; i < this.memoElements.length; i++) {
      if ((this.memoElements[i].character === a || this.memoElements[i].meaningPL === a) && (
        this.memoElements[i].character === b || this.memoElements[i].meaningPL === b)) {
        return true;
      }
    }
    return false;
  }

  memoClick(evt: Event) {

    let el = (evt.target as HTMLDivElement);
    let id = el.id;
    switch (this.revealedBlocks) {
      case 0:
        this.revealedBlocks++;
        this.previousBlock = id;
        this.indexOfComparedBlock1 = this.lookForElemAndEdit(id, this.isCharacter(id), true);
        break;
      case 1:
        this.revealedBlocks++;
        this.indexOfComparedBlock2 = this.lookForElemAndEdit(id, this.isCharacter(id), true);
        this.newBlock = id;
        break;
      case 2:
        if (this.compare(this.previousBlock, this.newBlock)) {
          console.log('equal');

        } else {
          console.log('not equal');
          this.lookForElemAndEdit(this.newBlock, this.isCharacter(this.newBlock), false);
          this.lookForElemAndEdit(this.previousBlock, this.isCharacter(this.previousBlock), false);
        }
        this.revealedBlocks = 0;
        this.revealedBlocks++;
        this.previousBlock = id;
        this.indexOfComparedBlock1 = this.lookForElemAndEdit(id, this.isCharacter(id), true);
        break;
    }
  }

}
