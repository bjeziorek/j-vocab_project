export class Converter {
    napisArray1 = [];
    napisArray2 = [];
    napisArray3 = [];

    calyNapis = '';

    kanji = [
        ["言", "i"],//0
        ["問", "mon"],//1
        ["題", "dai"],//2
        ["罠", "wana"],//3
        ["仕", "shi"],//4
        ["掛", "ka"],//5
        ["陥", "otoshii"],//6
        ["嵌", "ha"],//7
        ["俺", "ore"],//8
        ["奴", "yatsu"],//9
        ["左", "hidari"],//10
        ["薬", "kusuri"],//11
        ["指", "yubi"],//12
        ["手", "te"],//13
        ["輪", "wa"],//14
        ["女", "jo"],//15
        ["彼", "kano"],//16
        ["感", "kan"],//17
        ["情", "jo"]//18
    ];

    kana = [
        ['a', 'あ', 'ア', 'a'], ['i', 'い', 'イ', 'i'], ['u', 'う', 'ウ', 'u'], ['e', 'え', 'エ', 'e'], ['o', 'お', 'オ', 'o'],
        ['ka', 'か', 'カ', 'ka'], ['ki', 'き', 'キ', 'ki'], ['ku', 'く', 'ク', 'ku'], ['ke', 'け', 'ケ', 'ke'], ['ko', 'こ', 'コ', 'ko'], ['kya', 'きゃ', 'キャ', 'kya'], ['kyu', 'きゅ', 'キュ', 'kyu'], ['kyo', 'きょ', 'キョ', 'kyo'],
        ['sa', 'さ', 'サ', 'sa'], ['shi', 'し', 'シ', 'shi'], ['su', 'す', 'ス', 'su'], ['se', 'せ', 'セ', 'se'], ['so', 'そ', 'ソ', 'so'], ['sha', 'しゃ', 'シャ', 'sha'], ['shu', 'しゅ', 'シュ', 'shu'], ['sho', 'しょ', 'ショ', 'sho'],
        ['ta', 'た', 'タ', 'ta'], ['chi', 'ち', 'チ', 'chi'], ['tsu', 'つ', 'ツ', 'tsu'], ['te', 'て', 'テ', 'te'], ['to', 'と', 'ト', 'to'], ['cha', 'ちゃ', 'チャ', 'cha'], ['chu', 'ちゅ', 'チュ', 'chu'], ['cho', 'ちょ', 'チョ', 'cho'],
        ['na', 'な', 'ナ', 'na'], ['ni', 'に', 'ニ', 'ni'], ['nu', 'ぬ', 'ヌ', 'nu'], ['ne', 'ね', 'ネ', 'ne'], ['no', 'の', 'ノ', 'no'], ['nya', 'にゃ', 'ニャ', 'nya'], ['nyu', 'にゅ', 'ニュ', 'nyu'], ['nyo', 'にょ', 'ニョ', 'nyo'],
        ['ha', 'は', 'ハ', 'ha'], ['hi', 'ひ', 'ヒ', 'hi'], ['fu', 'ふ', 'フ', 'fu'], ['he', 'へ', 'ヘ', 'he'], ['ho', 'ほ', 'ホ', 'ho'], ['hya', 'ひゃ', 'ヒャ', 'hya'], ['hyu', 'ひゅ', 'ヒュ', 'hyu'], ['hyo', 'ひょ', 'ヒョ', 'hyo'],
        ['ma', 'ま', 'マ', 'ma'], ['mi', 'み', 'ミ', 'mi'], ['mu', 'む', 'ム', 'mu'], ['me', 'め', 'メ', 'me'], ['mo', 'も', 'モ', 'mo'], ['mya', 'みゃ', 'ミャ', 'mya'], ['myu', 'みゅ', 'ミュ', 'myu'], ['myo', 'みょ', 'ミョ', 'myo'],
        ['ya', 'や', 'ヤ', 'ya'], ['yu', 'ゆ', 'ユ', 'yu'], ['yo', 'よ', 'ヨ', 'yo'],
        ['ra', 'ら', 'ラ', 'ra'], ['ri', 'り', 'リ', 'ri'], ['ru', 'る', 'ル', 'ru'], ['re', 'れ', 'レ', 're'], ['ro', 'ろ', 'ロ', 'ro'], ['rya', 'りゃ', 'リャ', 'rya'], ['ryu', 'りゅ', 'リュ', 'ryu'], ['ryo', 'りょ', 'リョ', 'ryo'],
        ['wa', 'わ', 'ワ', 'wa'], ['wo', 'を', 'ヲ', 'wo'],
        ['n', 'ん', 'ン', 'n'],
        ['ga', 'が', 'ガ', 'ga'], ['gi', 'ぎ', 'ギ', 'gi'], ['gu', 'ぐ', 'グ', 'gu'], ['ge', 'げ', 'ゲ', 'ge'], ['go', 'ご', 'ゴ', 'go'], ['gya', 'ぎゃ', 'ギャ', 'gya'], ['gyu', 'ぎゅ', 'ギュ', 'gyu'], ['gyo', 'ぎょ', 'ギョ', 'gyo'],
        ['za', 'ざ', 'ザ', 'za'], ['ji', 'じ', 'ジ', 'ji'], ['zu', 'ず', 'ズ', 'zu'], ['ze', 'ぜ', 'ゼ', 'ze'], ['zo', 'ぞ', 'ゾ', 'zo'], ['ja', 'じゃ', 'ジャ', 'ja'], ['ju', 'じゅ', 'ジュ', 'ju'], ['jo', 'じょ', 'ジョ', 'jo'],
        ['da', 'だ', 'ダ', 'da'], ['dji', 'ぢ', 'ヂ', 'ji'], ['dzu', 'づ', 'ヅ', 'dzu'], ['de', 'で', 'デ', 'de'], ['do', 'ど', 'ド', 'do'], ['dja', 'ぢゃ', 'ヂャ', 'dja'], ['dju', 'ぢゅ', 'ヂュ', 'dju'], ['djo', 'ぢょ', 'ヂョ', 'djo'],
        ['ba', 'ば', 'バ', 'ba'], ['bi', 'び', 'ビ', 'bi'], ['bu', 'ぶ', 'ブ', 'bu'], ['be', 'べ', 'ベ', 'be'], ['bo', 'ぼ', 'ボ', 'bo'], ['bya', 'びゃ', 'ビャ', 'bya'], ['byu', 'びゅ', 'ビュ', 'byu'], ['byo', 'びょ', 'ビョ', 'byo'],
        ['pa', 'ぱ', 'パ', 'pa'], ['pi', 'ぴ', 'ピ', 'pi'], ['pu', 'ぷ', 'プ', 'pu'], ['pe', 'ぺ', 'ペ', 'pe'], ['po', 'ぽ', 'ポ', 'po'], ['pya', 'ぴゃ', 'ピャ', 'pya'], ['pyu', 'ぴゅ', 'ピュ', 'pyu'], ['pyo', 'ぴょ', 'ピョ', 'pyo'],
        ['ts', 'っ', 'ッ', '$'],
        ['.', '。', '。', '.'],
        [',', '、', '、', ','],
        ['-', 'ー', 'ー'],
        ['x', 'っ', 'ッ', 'x']
    ];

    convert(v: string): void {
       // console.log(v);
        this.napisArray1 = [];
        this.napisArray2 = [];
        this.napisArray3 = [];
        this.parserHelper(v, 'rez');

    }

    parserHelper(param, gdzie) {  // ok - ale to bym chciala zmienic, zeby robil obiekt dla furigany
        const t1 = this.wyodrebSylaby(param);
        // t1=wyodrebSylaby("mondai");
     //   console.log(t1);
        this.wyodrebKanjiIZnSpec(t1);



        for (let x = 0; x < this.napisArray1.length; x++) {
            let tempArray = this.wyodrebSylaby(this.napisArray1[x]);
            let finalowy = '';
            for (let xx = 0; xx < tempArray.length; xx++) {
                finalowy += tempArray[xx];
            }

            this.napisArray1[x] = finalowy;
         //   console.log('test ' + t1);

        }
        this.parsujNaRomaji();
        // parseText(testTExtCoded);
        this.wyswietl(gdzie);
    }



    wyswietl(gdzie) {  // ook

        document.getElementById(gdzie).innerHTML = '<table><tr id=\'kana\'></tr><tr id=\'kanji\'></tr><tr id=\'romaji\'></tr></table>';

        for (let z = 0; z < this.napisArray2.length; z++) {
            document.getElementById('kana').innerHTML += '<td style=\'font-size:18px;text-align:center;\'>' + this.napisArray1[z] + '</td>';
            document.getElementById('kanji').innerHTML += '<td style=\'font-size:30px;text-align:center;\'>' + this.napisArray2[z] + '</td>';
            document.getElementById('romaji').innerHTML += '<td style=\'font-size:20px;text-align:center;\'>' + this.napisArray3[z] + '</td>';

        }

    }// wyswietl

    parsujNaRomaji() { // ok
        for (let c = 0; c < this.napisArray1.length; c++) {
            let znaleziono = false;
            for (let cc = 0; cc < this.kana.length; cc++) {
                if (this.kana[cc][1] == this.napisArray1[c] || this.kana[cc][2] == this.napisArray1[c] || this.kana[cc][1] == this.napisArray2[c] || this.kana[cc][2] == this.napisArray2[c]) {
                    this.napisArray3[c] = this.kana[cc][0];
                    znaleziono = true;
                }
            }
            if (!znaleziono) {
                this.napisArray3[c] = '';
               // console.log('c ' + this.napisArray1[c][0]);
                for (let ccc = 0; ccc < this.napisArray1.length; ccc++) {
                    for (let cc = 0; cc < this.kana.length; cc++) {
                        if (this.kana[cc][2] == this.napisArray1[c][ccc]) {
                            this.napisArray3[c] += this.kana[cc][0];
                            znaleziono = true;
                        }
                    }
                }
            }
        }// for
    }

    szukajWKanie(znaczekWRomaji, format): string {// format==hiragana,katakana,romaji

        let znak = '?';

        // sprawdz czy male czy duze j odszukaj w kanie
        if (znaczekWRomaji[0] == znaczekWRomaji[0].toUpperCase() || format == 'katakana') {
            for (let j = 0; j < this.kana.length; j++) {
                if (znaczekWRomaji.toLowerCase() == this.kana[j][0]) {
                    // 		console.log(this.kana[j][1]);
                    this.calyNapis += this.kana[j][2];

                    znak = this.kana[j][2];

                    // napisArray1.push("");
                    // napisArray2.push(this.kana[j][1]);

                }
            }// for
        } else {
            if (znaczekWRomaji[0] == znaczekWRomaji[0].toLowerCase() || format == 'hiragana') {
                for (let j = 0; j < this.kana.length; j++) {
                    if (znaczekWRomaji == this.kana[j][0]) {
                        // 		console.log(this.kana[j][2]);
                        this.calyNapis += this.kana[j][1];

                        znak = this.kana[j][1];

                        // 	napisArray1.push("");
                        // 	napisArray2.push(this.kana[j][2]);
                    }
                }// for
            }
        }
        return znak;
    }


    czyCyfra(c) {
        if (!isNaN(c * 1)) {
            return true;
        } else {
            return false;
        }

    }


    wyodrebSylaby(txt) {  // to jest stare tu sa bledy, zamiast tego jest toKana
        const sylabyArray = [];
        let sylaba = '';
        for (let i = 0; i < txt.length; i++) {
            sylaba = '';

         //   console.log('test: ' + txt[i]);


            let next = 0;
            let next2 = 0;

            switch (txt[i]) {

                case '.': // a
                // console.log("a");
                sylaba = this.szukajWKanie(txt[i], 'hiragana');
                break;
                case '-': // a
                // console.log("a");
                sylaba = this.szukajWKanie(txt[i], 'hiragana');
                break;
                case ',': // a
                // console.log("a");
                sylaba = this.szukajWKanie(txt[i], 'hiragana');
                break;
                //////////////// HIRAGANA

                case 'a': // a
                    // console.log("a");
                    sylaba = this.szukajWKanie(txt[i], 'hiragana');
                    break;
                case 'i': // i
                    /// console.log("i");
                    sylaba = this.szukajWKanie(txt[i], 'hiragana');
                    break;
                case 'u': // u
                    // console.log("u");
                    sylaba = this.szukajWKanie(txt[i], 'hiragana');
                    break;
                case 'e': // e lub he!!!
                    // console.log("e");
                    sylaba = this.szukajWKanie(txt[i], 'hiragana');
                    break;
                case 'o': // o
                    // console.log("o");
                    console.log('oooooooooo: ' + txt[i] + ' ' + txt[next] + ' ' + txt[next2]);

                    sylaba = this.szukajWKanie(txt[i], 'hiragana');
                    break;
                case 'k': // ka ki ku ke ko kya kyu kyo -----OK
                    next = i + 1; next2 = i + 2;
                    // 	console.log("kkkkkkkkk: "+txt[i]+" "+txt[next]+" "+txt[next2])
                    switch (txt[next]) {
                        case 'k':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'y':
                            if (txt[next2] == 'a' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('kya', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'u' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('kyu', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'o' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('kyo', 'hiragana');
                                i++;
                            }
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('ka', 'hiragana');
                            break;
                        case 'i':
                            sylaba = this.szukajWKanie('ki', 'hiragana');
                            break;
                        case 'u':
                            sylaba = this.szukajWKanie('ku', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('ke', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('ko', 'hiragana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 's': // sa shi su se so sha shu sho -----OK
                    next = i + 1; next2 = i + 2;
                 //   console.log('ssssss: ' + txt[i] + ' ' + txt[next] + ' ' + txt[next2]);

                    switch (txt[next]) {

                        case 'h':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'h':
                            if (txt[next2] == 'a' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('sha', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'u' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('shu', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'o' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('sho', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'i' || txt[next2] == 'I') {
                                sylaba = this.szukajWKanie('shi', 'hiragana');
                                i++;
                            }
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('sa', 'hiragana');
                            break;
                        case 'u':
                            sylaba = this.szukajWKanie('su', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('se', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('so', 'hiragana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 't': // ta tsu te to -----OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 't':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'c':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 's':
                            if (txt[next2] == 'u' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('tsu', 'hiragana');
                                i++;
                            }
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('ta', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('te', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('to', 'hiragana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'c': // chi cha cho chu -----OK
                    next = i + 1; next2 = i + 2;
                 //   console.log('ccccccccccccc: ' + txt[i] + ' ' + txt[next] + ' ' + txt[next2]);

                    switch (txt[next]) {
                        case 'h':
                            if (txt[next2] == 'a' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('cha', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'u' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('chu', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'o' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('cho', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'i' || txt[next2] == 'I') {
                                sylaba = this.szukajWKanie('chi', 'hiragana');
                                i++;
                            }
                            break;
                    }// inner switch
                    i++;
                    break;
                case 'j': // ja ji ju jo ----OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'j':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'a':
                            // console.log("in, i-1: "+txt[i-1]);
                            if (txt[i - 1] == 'd') {
                                sylaba = this.szukajWKanie('dja', 'hiragana');
                            } else {
                                sylaba = this.szukajWKanie('ja', 'hiragana');
                            }
                            break;
                        case 'i':
                            if (txt[i - 1] == 'd') {
                                sylaba = this.szukajWKanie('dji', 'hiragana');
                            } else {
                                sylaba = this.szukajWKanie('ji', 'hiragana');
                            }
                            break;
                        case 'u':
                            if (txt[i - 1] == 'd') {
                                sylaba = this.szukajWKanie('dju', 'hiragana');
                            } else {
                                sylaba = this.szukajWKanie('ju', 'hiragana');
                            }
                            break;
                        case 'o':
                            if (txt[i - 1] == 'd') {
                                sylaba = this.szukajWKanie('djo', 'hiragana');
                            } else {
                                sylaba = this.szukajWKanie('jo', 'hiragana');
                            }
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'p': // pa pi pu pe po pya pyu pyo --OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'y':
                            if (txt[next2] == 'a' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('pya', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'u' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('pyu', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'o' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('pyo', 'hiragana');
                                i++;
                            }
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('pa', 'hiragana');
                            break;
                        case 'i':
                            sylaba = this.szukajWKanie('pi', 'hiragana');
                            break;
                        case 'u':
                            sylaba = this.szukajWKanie('pu', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('pe', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('po', 'hiragana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'h': // ha hi hu he ho hya hyu hyo --OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'h':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'y':
                            if (txt[next2] == 'a' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('hya', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'u' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('hyu', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'o' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('hyo', 'hiragana');
                                i++;
                            }
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('ha', 'hiragana');
                            break;
                        case 'i':
                            sylaba = this.szukajWKanie('hi', 'hiragana');
                            break;
                        case 'u':
                            sylaba = this.szukajWKanie('hu', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('he', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('ho', 'hiragana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'b': // ba bi bu be bo bya byu byo --OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'b':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'y':
                            if (txt[next2] == 'a' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('bya', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'u' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('byu', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'o' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('byo', 'hiragana');
                                i++;
                            }
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('ba', 'hiragana');
                            break;
                        case 'i':
                            sylaba = this.szukajWKanie('bi', 'hiragana');
                            break;
                        case 'u':
                            sylaba = this.szukajWKanie('bu', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('be', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('bo', 'hiragana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'g': // ga gi gu ge go gya gyu gyo --ok
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'g':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'y':
                            if (txt[next2] == 'a' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('gya', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'u' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('gyu', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'o' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('gyo', 'hiragana');
                                i++;
                            }
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('ga', 'hiragana');
                            break;
                        case 'i':
                            sylaba = this.szukajWKanie('gi', 'hiragana');
                            break;
                        case 'u':
                            sylaba = this.szukajWKanie('gu', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('ge', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('go', 'hiragana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'n': // n na ni nu ne no nya nyu nyo --ok
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'y':
                            if (txt[next2] == 'a' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('nya', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'u' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('nyu', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'o' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('nyo', 'hiragana');
                                i++;
                            }
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('na', 'hiragana');
                            break;
                        case 'i':
                            sylaba = this.szukajWKanie('ni', 'hiragana');
                            break;
                        case 'u':
                            sylaba = this.szukajWKanie('nu', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('ne', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('no', 'hiragana');
                            break;
                        default:
                            sylaba = this.szukajWKanie('n', 'hiragana');
                            i--; // zeby sie zgodzilo z pozniejszym i++ na koncu
                            break;
                    }// inner switch
                    i++;
                    break;
                case 'm': // ma mi mu me mo mya myu myo  --Ok
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'm':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'y':
                            if (txt[next2] == 'a' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('mya', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'u' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('myu', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'o' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('myo', 'hiragana');
                                i++;
                            }
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('ma', 'hiragana');
                            break;
                        case 'i':
                            sylaba = this.szukajWKanie('mi', 'hiragana');
                            break;
                        case 'u':
                            sylaba = this.szukajWKanie('mu', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('me', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('mo', 'hiragana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'y': // ya yu yo
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'a':
                            sylaba = this.szukajWKanie('ya', 'hiragana');
                            break;
                        case 'u':
                            sylaba = this.szukajWKanie('yu', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('yo', 'hiragana');
                            break;
                    }// inner switch
                    i++;
                    break;
                case 'r': // ra ri ru re ro rya ryu ryo --ok
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'r':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'y':
                            if (txt[next2] == 'a' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('rya', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'u' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('ryu', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'o' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('ryo', 'hiragana');
                                i++;
                            }
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('ra', 'hiragana');
                            break;
                        case 'i':
                            sylaba = this.szukajWKanie('ri', 'hiragana');
                            break;
                        case 'u':
                            sylaba = this.szukajWKanie('ru', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('re', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('ro', 'hiragana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'w': // wa --ok
                //    console.log('w');
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'w':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('wa', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('wo', 'hiragana');
                            break;
                    }// inner switch
                    i++;
                    break;
                case 'z': // za zu ze zo --ok
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'z':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'j':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('za', 'hiragana');
                            break;
                        case 'u':
                            sylaba = this.szukajWKanie('zu', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('ze', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('zo', 'hiragana');
                            break;
                    }// inner switch
                    i++;
                    break;
                case 'd': // da de do
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'd':
                            if (txt[next2] != 'j') {
                       //(txt[i] + ' ' + txt[next] + ' ' + txt[next2] + ' <-------------------');
                                sylaba = this.szukajWKanie('ts', 'hiragana');
                                i--;
                            }
                            break;
                        case 'j':
                            if (txt[i] != 'd') {
                      //          console.log(txt[i] + ' ' + txt[next] + ' ' + txt[next2] + ' <-------------------');
                                sylaba = this.szukajWKanie('ts', 'hiragana');

                            }
                            i--;
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('da', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('de', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('do', 'hiragana');
                            break;
                    }// inner switch
                    i++;
                    break;

                //////////////////// KATAKANA

                case 'A': // a
                    // console.log("A");
                    sylaba = this.szukajWKanie(txt[i], 'katakana');
                    break;
                case 'I': // i
                    // console.log("I");
                    sylaba = this.szukajWKanie(txt[i], 'katakana');
                    break;
                case 'U': // u
                    // console.log("U");
                    sylaba = this.szukajWKanie(txt[i], 'katakana');
                    break;
                case 'E': // e lub he!!!
                    // console.log("E");
                    sylaba = this.szukajWKanie(txt[i], 'katakana');
                    break;
                case 'O': // o
                    // console.log("O");
                    sylaba = this.szukajWKanie(txt[i], 'katakana');
                    break;
                case 'K': // ka ki ku ke ko kya kyu kyo -----OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'Y':
                            if (txt[next2] == 'A' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('kya', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'U' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('kyu', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'O' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('kyo', 'katakana');
                                i++;
                            }
                            break;
                        case 'A':
                            sylaba = this.szukajWKanie('ka', 'katakana');
                            break;
                        case 'I':
                            sylaba = this.szukajWKanie('ki', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('ku', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('ke', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('ko', 'katakana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'S': // sa shi su se so sha shu sho -----OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'h':
                            if (txt[next2] == 'A' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('sha', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'U' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('shu', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'O' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('sho', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'I' || txt[next2] == 'I') {
                                sylaba = this.szukajWKanie('shi', 'katakana');
                                i++;
                            }
                            break;
                        case 'A':
                            sylaba = this.szukajWKanie('sa', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('su', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('se', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('so', 'katakana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'T': // ta tsu te to -----OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'S':
                            if (txt[next2] == 'U' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('tsu', 'katakana');
                                i++;
                            }
                            break;
                        case 'A':
                            sylaba = this.szukajWKanie('ta', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('te', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('to', 'katakana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'C': // chi cha cho chu -----OK
                    next = i + 1; next2 = i + 2;
                //    console.log('CCCCCCCCCCC: ' + txt[i] + ' ' + txt[next] + ' ' + txt[next2]);

                    switch (txt[next]) {
                        case 'H':
                            if (txt[next2] == 'A' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('cha', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'U' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('chu', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'O' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('cho', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'I' || txt[next2] == 'I') {
                                sylaba = this.szukajWKanie('chi', 'katakana');
                                i++;
                            }
                        //    console.log('sylaba: ' + sylaba);
                            break;
                    }// inner switch
                    i++;
                    break;
                case 'J': // ja ji ju jo ----OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'A':
                            sylaba = this.szukajWKanie('ja', 'katakana');
                            break;
                        case 'I':
                            sylaba = this.szukajWKanie('ji', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('ju', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('jo', 'katakana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'P': // pa pi pu pe po pya pyu pyo --OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'Y':
                            if (txt[next2] == 'A' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('pya', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'U' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('pyu', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'O' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('pyo', 'katakana');
                                i++;
                            }
                            break;
                        case 'A':
                            sylaba = this.szukajWKanie('pa', 'katakana');
                            break;
                        case 'I':
                            sylaba = this.szukajWKanie('pi', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('pu', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('pe', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('po', 'katakana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'H': // ha hi hu he ho hya hyu hyo --OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'Y':
                            if (txt[next2] == 'A' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('hya', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'U' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('hyu', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'O' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('hyo', 'katakana');
                                i++;
                            }
                            break;
                        case 'A':
                            sylaba = this.szukajWKanie('ha', 'katakana');
                            break;
                        case 'I':
                            sylaba = this.szukajWKanie('hi', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('hu', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('he', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('ho', 'katakana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'B': // ba bi bu be bo bya byu byo --OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'Y':
                            if (txt[next2] == 'A' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('bya', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'U' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('byu', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'O' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('byo', 'katakana');
                                i++;
                            }
                            break;
                        case 'A':
                            sylaba = this.szukajWKanie('ba', 'katakana');
                            break;
                        case 'I':
                            sylaba = this.szukajWKanie('bi', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('bu', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('be', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('bo', 'katakana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'G': // ga gi gu ge go gya gyu gyo --ok
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'Y':
                            if (txt[next2] == 'A' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('gya', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'U' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('gyu', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'O' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('gyo', 'katakana');
                                i++;
                            }
                            break;
                        case 'A':
                            sylaba = this.szukajWKanie('ga', 'katakana');
                            break;
                        case 'I':
                            sylaba = this.szukajWKanie('gi', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('gu', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('ge', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('go', 'katakana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'N': // n na ni nu ne no nya nyu nyo --ok
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'Y':
                            if (txt[next2] == 'A' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('nya', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'U' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('nyu', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'O' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('nyo', 'katakana');
                                i++;
                            }
                            break;
                        case 'A':
                            sylaba = this.szukajWKanie('na', 'katakana');
                            break;
                        case 'I':
                            sylaba = this.szukajWKanie('ni', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('nu', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('ne', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('no', 'katakana');
                            break;
                        default:
                            sylaba = this.szukajWKanie('n', 'katakana');
                            i--; // zeby sie zgodzilo z pozniejszym i++ na koncu
                            break;
                    }// inner switch
                    i++;
                    break;
                case 'M': // ma mi mu me mo mya myu myo  --Ok
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'Y':
                            if (txt[next2] == 'A' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('mya', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'U' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('myu', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'O' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('myo', 'katakana');
                                i++;
                            }
                            break;
                        case 'A':
                            sylaba = this.szukajWKanie('ma', 'katakana');
                            break;
                        case 'I':
                            sylaba = this.szukajWKanie('mi', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('mu', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('me', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('mo', 'katakana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'Y': // ya yu yo
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'A':
                            sylaba = this.szukajWKanie('ya', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('yu', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('yo', 'katakana');
                            break;
                    }// inner switch
                    i++;
                    break;
                case 'R': // ra ri ru re ro rya ryu ryo --ok
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'Y':
                            if (txt[next2] == 'A' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('rya', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'U' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('ryu', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'O' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('ryo', 'katakana');
                                i++;
                            }
                            break;
                        case 'A':
                            sylaba = this.szukajWKanie('ra', 'katakana');
                            break;
                        case 'I':
                            sylaba = this.szukajWKanie('ri', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('ru', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('re', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('ro', 'katakana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'W': // wa --ok
                //    console.log('w');
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'A':
                            sylaba = this.szukajWKanie('wa', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('wo', 'katakana');
                            break;
                    }// inner switch
                    i++;
                    break;
                case 'Z': // za zu ze zo --ok
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'A':
                            sylaba = this.szukajWKanie('za', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('zu', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('ze', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('zo', 'katakana');
                            break;
                    }// inner switch
                    i++;
                    break;
                case 'D': // da de do
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'A':
                            sylaba = this.szukajWKanie('da', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('de', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('do', 'katakana');
                            break;
                    }// inner switch
                    i++;
                    break;

                default:
                    // console.log("[wyodrebSylaby]inne niz kana i zignorowane: "+txt[i]);
                    sylaba = txt[i];
                    break;
            }// switch

            sylabyArray.push(sylaba);
        }//for

    //    console.log('sylabyArray', sylabyArray);
        return sylabyArray;
    }

    toKana(txt) {  // ok
        const sylabyArray = [];
        let sylaba = '';
        for (let i = 0; i < txt.length; i++) {
            sylaba = '';

        //    console.log('test: ' + txt[i]);


            let next = 0;
            let next2 = 0;

            switch (txt[i]) {


                //////////////// HIRAGANA

                case 'x': // a
                    // console.log("a");
                    sylaba = this.szukajWKanie(txt[i], 'hiragana');
                    break;
                case 'a': // a
                    // console.log("a");
                    sylaba = this.szukajWKanie(txt[i], 'hiragana');
                    break;
                case 'i': // i
                    /// console.log("i");
                    sylaba = this.szukajWKanie(txt[i], 'hiragana');
                    break;
                case 'u': // u
                    // console.log("u");
                    sylaba = this.szukajWKanie(txt[i], 'hiragana');
                    break;
                case 'e': // e lub he!!!
                    // console.log("e");
                    sylaba = this.szukajWKanie(txt[i], 'hiragana');
                    break;
                case 'o': // o
                    // console.log("o");
                //    console.log('oooooooooo: ' + txt[i] + ' ' + txt[next] + ' ' + txt[next2]);

                    sylaba = this.szukajWKanie(txt[i], 'hiragana');
                    break;
                case 'k': // ka ki ku ke ko kya kyu kyo -----OK
                    next = i + 1; next2 = i + 2;
                    // 	console.log("kkkkkkkkk: "+txt[i]+" "+txt[next]+" "+txt[next2])
                    switch (txt[next]) {
                        case 'k':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'y':
                            if (txt[next2] == 'a' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('kya', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'u' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('kyu', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'o' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('kyo', 'hiragana');
                                i++;
                            }
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('ka', 'hiragana');
                            break;
                        case 'i':
                            sylaba = this.szukajWKanie('ki', 'hiragana');
                            break;
                        case 'u':
                            sylaba = this.szukajWKanie('ku', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('ke', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('ko', 'hiragana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 's': // sa shi su se so sha shu sho -----OK
                    next = i + 1; next2 = i + 2;
              //      console.log('ssssss: ' + txt[i] + ' ' + txt[next] + ' ' + txt[next2]);

                    switch (txt[next]) {

                        case 's':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'h':
                     //       console.log('in h: ' + txt[i] + ' ' + txt[next] + ' ' + txt[next2]);
                            if (txt[next2] == 'a' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('sha', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'u' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('shu', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'o' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('sho', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'i' || txt[next2] == 'I') {
                                sylaba = this.szukajWKanie('shi', 'hiragana');
                                i++;
                            }
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('sa', 'hiragana');
                            break;
                        case 'u':
                            sylaba = this.szukajWKanie('su', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('se', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('so', 'hiragana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 't': // ta tsu te to -----OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 't':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'c':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 's':
                            if (txt[next2] == 'u' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('tsu', 'hiragana');
                                i++;
                            }
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('ta', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('te', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('to', 'hiragana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'c': // chi cha cho chu -----OK
                    next = i + 1; next2 = i + 2;
               //     console.log('ccccccccccccc: ' + txt[i] + ' ' + txt[next] + ' ' + txt[next2]);

                    switch (txt[next]) {
                        case 'h':
                            if (txt[next2] == 'a' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('cha', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'u' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('chu', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'o' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('cho', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'i' || txt[next2] == 'I') {
                                sylaba = this.szukajWKanie('chi', 'hiragana');
                                i++;
                            }
                            break;
                    }// inner switch
                    i++;
                    break;
                case 'j': // ja ji ju jo ----OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'j':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'a':
                            // console.log("in, i-1: "+txt[i-1]);
                            if (txt[i - 1] == 'd') {
                                sylaba = this.szukajWKanie('dja', 'hiragana');
                            } else {
                                sylaba = this.szukajWKanie('ja', 'hiragana');
                            }
                            break;
                        case 'i':
                            if (txt[i - 1] == 'd') {
                                sylaba = this.szukajWKanie('dji', 'hiragana');
                            } else {
                                sylaba = this.szukajWKanie('ji', 'hiragana');
                            }
                            break;
                        case 'u':
                            if (txt[i - 1] == 'd') {
                                sylaba = this.szukajWKanie('dju', 'hiragana');
                            } else {
                                sylaba = this.szukajWKanie('jo', 'hiragana');
                            }
                            break;
                        case 'o':
                            if (txt[i - 1] == 'd') {
                                sylaba = this.szukajWKanie('djo', 'hiragana');
                            } else {
                                sylaba = this.szukajWKanie('jo', 'hiragana');
                            }
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'p': // pa pi pu pe po pya pyu pyo --OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'y':
                            if (txt[next2] == 'a' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('pya', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'u' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('pyu', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'o' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('pyo', 'hiragana');
                                i++;
                            }
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('pa', 'hiragana');
                            break;
                        case 'i':
                            sylaba = this.szukajWKanie('pi', 'hiragana');
                            break;
                        case 'u':
                            sylaba = this.szukajWKanie('pu', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('pe', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('po', 'hiragana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'h': // ha hi hu he ho hya hyu hyo --OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'h':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'y':
                            if (txt[next2] == 'a' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('hya', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'u' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('hyu', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'o' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('hyo', 'hiragana');
                                i++;
                            }
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('ha', 'hiragana');
                            break;
                        case 'i':
                            sylaba = this.szukajWKanie('hi', 'hiragana');
                            break;
                        case 'u':
                            sylaba = this.szukajWKanie('hu', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('he', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('ho', 'hiragana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'b': // ba bi bu be bo bya byu byo --OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'b':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'y':
                            if (txt[next2] == 'a' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('bya', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'u' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('byu', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'o' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('byo', 'hiragana');
                                i++;
                            }
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('ba', 'hiragana');
                            break;
                        case 'i':
                            sylaba = this.szukajWKanie('bi', 'hiragana');
                            break;
                        case 'u':
                            sylaba = this.szukajWKanie('bu', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('be', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('bo', 'hiragana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'g': // ga gi gu ge go gya gyu gyo --ok
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'g':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'y':
                            if (txt[next2] == 'a' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('gya', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'u' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('gyu', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'o' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('gyo', 'hiragana');
                                i++;
                            }
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('ga', 'hiragana');
                            break;
                        case 'i':
                            sylaba = this.szukajWKanie('gi', 'hiragana');
                            break;
                        case 'u':
                            sylaba = this.szukajWKanie('gu', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('ge', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('go', 'hiragana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'n': // n na ni nu ne no nya nyu nyo --ok
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'y':
                            if (txt[next2] == 'a' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('nya', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'u' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('nyu', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'o' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('nyo', 'hiragana');
                                i++;
                            }
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('na', 'hiragana');
                            break;
                        case 'i':
                            sylaba = this.szukajWKanie('ni', 'hiragana');
                            break;
                        case 'u':
                            sylaba = this.szukajWKanie('nu', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('ne', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('no', 'hiragana');
                            break;
                        default:
                            sylaba = this.szukajWKanie('n', 'hiragana');
                            i--; // zeby sie zgodzilo z pozniejszym i++ na koncu
                            break;
                    }// inner switch
                    i++;
                    break;
                case 'm': // ma mi mu me mo mya myu myo  --Ok
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'm':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'y':
                            if (txt[next2] == 'a' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('mya', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'u' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('myu', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'o' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('myo', 'hiragana');
                                i++;
                            }
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('ma', 'hiragana');
                            break;
                        case 'i':
                            sylaba = this.szukajWKanie('mi', 'hiragana');
                            break;
                        case 'u':
                            sylaba = this.szukajWKanie('mu', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('me', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('mo', 'hiragana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'y': // ya yu yo
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'a':
                            sylaba = this.szukajWKanie('ya', 'hiragana');
                            break;
                        case 'u':
                            sylaba = this.szukajWKanie('yu', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('yo', 'hiragana');
                            break;
                    }// inner switch
                    i++;
                    break;
                case 'r': // ra ri ru re ro rya ryu ryo --ok
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'r':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'y':
                            if (txt[next2] == 'a' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('rya', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'u' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('ryu', 'hiragana');
                                i++;
                            }
                            if (txt[next2] == 'o' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('ryo', 'hiragana');
                                i++;
                            }
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('ra', 'hiragana');
                            break;
                        case 'i':
                            sylaba = this.szukajWKanie('ri', 'hiragana');
                            break;
                        case 'u':
                            sylaba = this.szukajWKanie('ru', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('re', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('ro', 'hiragana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'w': // wa --ok
          //          console.log('w');
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'w':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('wa', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('wo', 'hiragana');
                            break;
                    }// inner switch
                    i++;
                    break;
                case 'z': // za zu ze zo --ok
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'z':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'j':
                            sylaba = this.szukajWKanie('ts', 'hiragana');
                            i--;
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('za', 'hiragana');
                            break;
                        case 'u':
                            sylaba = this.szukajWKanie('zu', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('ze', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('zo', 'hiragana');
                            break;
                    }// inner switch
                    i++;
                    break;
                case 'd': // da de do
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'd':
                            if (txt[next2] != 'j') {
              //                  console.log(txt[i] + ' ' + txt[next] + ' ' + txt[next2] + ' <-------------------');
                                sylaba = this.szukajWKanie('ts', 'hiragana');
                                i--;
                            }
                            break;
                        case 'j':
                            if (txt[i] != 'd') {
                 //               console.log(txt[i] + ' ' + txt[next] + ' ' + txt[next2] + ' <-------------------');
                                sylaba = this.szukajWKanie('ts', 'hiragana');

                            }
                            i--;
                            break;
                        case 'a':
                            sylaba = this.szukajWKanie('da', 'hiragana');
                            break;
                        case 'e':
                            sylaba = this.szukajWKanie('de', 'hiragana');
                            break;
                        case 'o':
                            sylaba = this.szukajWKanie('do', 'hiragana');
                            break;
                    }// inner switch
                    i++;
                    break;

                //////////////////// KATAKANA

                case 'X': // a
                // console.log("a");
                sylaba = this.szukajWKanie(txt[i], 'hiragana');
                break;
                case 'A': // a
                    // console.log("A");
                    sylaba = this.szukajWKanie(txt[i], 'katakana');
                    break;
                case 'I': // i
                    // console.log("I");
                    sylaba = this.szukajWKanie(txt[i], 'katakana');
                    break;
                case 'U': // u
                    // console.log("U");
                    sylaba = this.szukajWKanie(txt[i], 'katakana');
                    break;
                case 'E': // e lub he!!!
                    // console.log("E");
                    sylaba = this.szukajWKanie(txt[i], 'katakana');
                    break;
                case 'O': // o
                    // console.log("O");
                    sylaba = this.szukajWKanie(txt[i], 'katakana');
                    break;
                case 'K': // ka ki ku ke ko kya kyu kyo -----OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'Y':
                            if (txt[next2] == 'A' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('kya', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'U' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('kyu', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'O' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('kyo', 'katakana');
                                i++;
                            }
                            break;
                        case 'A':
                            sylaba = this.szukajWKanie('ka', 'katakana');
                            break;
                        case 'I':
                            sylaba = this.szukajWKanie('ki', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('ku', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('ke', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('ko', 'katakana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'S': // sa shi su se so sha shu sho -----OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'S':
                            sylaba = this.szukajWKanie('ts', 'katakana');
                            i--;
                            break;
                        case 'H':
                            if (txt[next2] == 'A' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('sha', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'U' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('shu', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'O' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('sho', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'I' || txt[next2] == 'I') {
                                sylaba = this.szukajWKanie('shi', 'katakana');
                                i++;
                            }
                            break;
                        case 'A':
                            sylaba = this.szukajWKanie('sa', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('su', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('se', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('so', 'katakana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'T': // ta tsu te to -----OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'S':
                            if (txt[next2] == 'U' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('tsu', 'katakana');
                                i++;
                            }
                            break;
                        case 'A':
                            sylaba = this.szukajWKanie('ta', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('te', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('to', 'katakana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'C': // chi cha cho chu -----OK
                    next = i + 1; next2 = i + 2;
          //          console.log('CCCCCCCCCCC: ' + txt[i] + ' ' + txt[next] + ' ' + txt[next2]);

                    switch (txt[next]) {
                        case 'H':
                            if (txt[next2] == 'A' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('cha', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'U' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('chu', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'O' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('cho', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'I' || txt[next2] == 'I') {
                                sylaba = this.szukajWKanie('chi', 'katakana');
                                i++;
                            }
            //                console.log('sylaba: ' + sylaba);
                            break;
                    }// inner switch
                    i++;
                    break;
                case 'J': // ja ji ju jo ----OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'A':
                            sylaba = this.szukajWKanie('ja', 'katakana');
                            break;
                        case 'I':
                            sylaba = this.szukajWKanie('ji', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('ju', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('jo', 'katakana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'P': // pa pi pu pe po pya pyu pyo --OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'Y':
                            if (txt[next2] == 'A' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('pya', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'U' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('pyu', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'O' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('pyo', 'katakana');
                                i++;
                            }
                            break;
                        case 'A':
                            sylaba = this.szukajWKanie('pa', 'katakana');
                            break;
                        case 'I':
                            sylaba = this.szukajWKanie('pi', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('pu', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('pe', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('po', 'katakana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'H': // ha hi hu he ho hya hyu hyo --OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'Y':
                            if (txt[next2] == 'A' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('hya', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'U' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('hyu', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'O' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('hyo', 'katakana');
                                i++;
                            }
                            break;
                        case 'A':
                            sylaba = this.szukajWKanie('ha', 'katakana');
                            break;
                        case 'I':
                            sylaba = this.szukajWKanie('hi', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('hu', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('he', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('ho', 'katakana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'B': // ba bi bu be bo bya byu byo --OK
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'Y':
                            if (txt[next2] == 'A' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('bya', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'U' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('byu', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'O' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('byo', 'katakana');
                                i++;
                            }
                            break;
                        case 'A':
                            sylaba = this.szukajWKanie('ba', 'katakana');
                            break;
                        case 'I':
                            sylaba = this.szukajWKanie('bi', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('bu', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('be', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('bo', 'katakana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'G': // ga gi gu ge go gya gyu gyo --ok
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'Y':
                            if (txt[next2] == 'A' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('gya', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'U' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('gyu', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'O' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('gyo', 'katakana');
                                i++;
                            }
                            break;
                        case 'A':
                            sylaba = this.szukajWKanie('ga', 'katakana');
                            break;
                        case 'I':
                            sylaba = this.szukajWKanie('gi', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('gu', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('ge', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('go', 'katakana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'N': // n na ni nu ne no nya nyu nyo --ok
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'Y':
                            if (txt[next2] == 'A' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('nya', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'U' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('nyu', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'O' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('nyo', 'katakana');
                                i++;
                            }
                            break;
                        case 'A':
                            sylaba = this.szukajWKanie('na', 'katakana');
                            break;
                        case 'I':
                            sylaba = this.szukajWKanie('ni', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('nu', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('ne', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('no', 'katakana');
                            break;
                        default:
                            sylaba = this.szukajWKanie('n', 'katakana');
                            i--; // zeby sie zgodzilo z pozniejszym i++ na koncu
                            break;
                    }// inner switch
                    i++;
                    break;
                case 'M': // ma mi mu me mo mya myu myo  --Ok
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'Y':
                            if (txt[next2] == 'A' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('mya', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'U' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('myu', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'O' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('myo', 'katakana');
                                i++;
                            }
                            break;
                        case 'A':
                            sylaba = this.szukajWKanie('ma', 'katakana');
                            break;
                        case 'I':
                            sylaba = this.szukajWKanie('mi', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('mu', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('me', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('mo', 'katakana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'Y': // ya yu yo
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'A':
                            sylaba = this.szukajWKanie('ya', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('yu', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('yo', 'katakana');
                            break;
                    }// inner switch
                    i++;
                    break;
                case 'R': // ra ri ru re ro rya ryu ryo --ok
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'Y':
                            if (txt[next2] == 'A' || txt[next2] == 'A') {
                                sylaba = this.szukajWKanie('rya', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'U' || txt[next2] == 'U') {
                                sylaba = this.szukajWKanie('ryu', 'katakana');
                                i++;
                            }
                            if (txt[next2] == 'O' || txt[next2] == 'O') {
                                sylaba = this.szukajWKanie('ryo', 'katakana');
                                i++;
                            }
                            break;
                        case 'A':
                            sylaba = this.szukajWKanie('ra', 'katakana');
                            break;
                        case 'I':
                            sylaba = this.szukajWKanie('ri', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('ru', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('re', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('ro', 'katakana');
                            break;
                        default:

                            break;
                    }// inner switch
                    i++;
                    break;
                case 'W': // wa --ok
            //        console.log('w');
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'A':
                            sylaba = this.szukajWKanie('wa', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('wo', 'katakana');
                            break;
                    }// inner switch
                    i++;
                    break;
                case 'Z': // za zu ze zo --ok
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'A':
                            sylaba = this.szukajWKanie('za', 'katakana');
                            break;
                        case 'U':
                            sylaba = this.szukajWKanie('zu', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('ze', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('zo', 'katakana');
                            break;
                    }// inner switch
                    i++;
                    break;
                case 'D': // da de do
                    next = i + 1; next2 = i + 2;
                    switch (txt[next]) {
                        case 'A':
                            sylaba = this.szukajWKanie('da', 'katakana');
                            break;
                        case 'E':
                            sylaba = this.szukajWKanie('de', 'katakana');
                            break;
                        case 'O':
                            sylaba = this.szukajWKanie('do', 'katakana');
                            break;
                    }// inner switch
                    i++;
                    break;

                default:
                    // console.log("[wyodrebSylaby]inne niz kana i zignorowane: "+txt[i]);
                    sylaba = txt[i];
                    break;
            }// switch

            sylabyArray.push(sylaba);
        }//for

        let linkedSylaby = '';
        for (let kkk = 0; kkk < sylabyArray.length; kkk++) {
            linkedSylaby += sylabyArray[kkk];
        }

     //   console.log(txt,'linkedSylaby',linkedSylaby);

     //   console.log('sylabyArray', sylabyArray);
        return linkedSylaby;
    }


    wyodrebKanjiIZnSpec(txt) {  // ok

        for (let i = 0; i < txt.length; i++) {
            switch (txt[i]) {

                //////////////// KANJ

                case '#':
                    let nrKanji = 0;
                    let indexer = 1;
                    const isNumber = this.czyCyfra(txt[i + indexer]);

                    let bezp = 0;
                    while (this.czyCyfra(txt[i + indexer]) && bezp < 10) {
                        bezp++;
                        nrKanji += parseInt(txt[i + indexer], 10);
                        // console.log(txt[i+indexer]+" "+czyCyfra(txt[i+indexer]));
                        indexer++;
                    }

                //    console.log('nrKanji ' + nrKanji);

                    // s=wyodrebSylaby2(kanji[nrKanji][1]);

                    let f = this.kanji[nrKanji][1];
                    let k = this.kanji[nrKanji][0];

                    this.napisArray1.push(f);
                    this.napisArray2.push(k);
                    i += indexer - 1;

                    // furigana=wyodrebSylaby(kanji[nrKanji][1]);


                    // napisArray1.push(furigana);
                    // napisArray2.push(kanji[nrKanji][0]);
                    // calyNapis+=kanji[nrKanji][0];

                    break;

                    //////////////////////// ZNAKI SPACJALNE
                    let rez: string;
                case '.':
                    rez = this.szukajWKanie('.', 'hiragana');
                    this.napisArray1.push('');
                    this.napisArray2.push(rez);
                    break;

                case '-':
                    rez = this.szukajWKanie('-', 'hiragana');
                    this.napisArray1.push('');
                    this.napisArray2.push(rez);
                    break;


                default:
                    this.napisArray1.push('');
                    this.napisArray2.push(txt[i]);

         //           console.log('def: ' + txt[i]);
                    // szukajWKanie(txt[i]);
                    break;
            }// switch

        }

    }// parseText
}
