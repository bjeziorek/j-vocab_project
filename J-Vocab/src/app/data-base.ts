export class DataBase {
    resources = [
        {
            character: '日曜日',
            sylabs: ['nichi', 'you', 'bi'],
            meaningPL: 'niedziela',
            tags: ['daty']
        },
        {
            character: '月曜日',
            sylabs: ['getsu', 'you', 'bi'],
            meaningPL: 'poniedziałek',
            tags: ['daty']
        },
        {
            character: '火曜日',
            sylabs: ['ka', 'you', 'bi'],
            meaningPL: 'wtorek',
            tags: ['daty']
        },
        {
            character: '水曜日',
            sylabs: ['sui', 'you', 'bi'],
            meaningPL: 'środa',
            tags: ['daty']
        },
        {
            character: '木曜日',
            sylabs: ['moku', 'you', 'bi'],
            meaningPL: 'czwartek',
            tags: ['daty']
        },
        {
            character: '金曜日',
            sylabs: ['kin', 'you', 'bi'],
            meaningPL: 'piątek',
            tags: ['daty']
        },
        {
            character: '土曜日',
            sylabs: ['do', 'you', 'bi'],
            meaningPL: 'sobota',
            tags: ['daty']
        }];/*,
        {
            character: 'お見合い',
            sylabs: ['o', 'mi', 'a', 'i'],
            meaningPL: 'rozmowa przedmałżeńska',
            tags: ['nigashitaSakana']
        },
        {
            character: '考える',
            sylabs: ['kanga', 'e', 'ru'],
            meaningPL: 'myśleć; wierzyć, że',
            tags: ['nigashitaSakana']
        },
        {
            character: '結婚',
            sylabs: ['kex', 'kon'],
            meaningPL: 'ślub',
            tags: ['nigashitaSakana']
        },
        {
            character: '方',
            sylabs: ['hou'],
            meaningPL: 'sposób',
            tags: ['nigashitaSakana']
        },
        {
            character: '生活',
            sylabs: ['sei', 'katsu'],
            meaningPL: 'życie (np. studenckie)',
            tags: ['nigashitaSakana']
        },
        {
            character: '冷める',
            sylabs: ['sa', 'me', 'ru'],
            meaningPL: 'być zimne, ochłodzić się, wystygnąć',
            tags: ['nigashitaSakana']
        },
        {
            character: '思う',
            sylabs: ['omo', 'u'],
            meaningPL: 'myśleć, sądzić',
            tags: ['nigashitaSakana']
        },
        {
            character: '熱々',
            sylabs: ['atsu', 'atsu'],
            meaningPL: 'parzący, szaleńczo zakochany',
            tags: ['nigashitaSakana']
        },
        {
            character: '延々',
            sylabs: ['en\'', 'en'],
            meaningPL: 'na zawsze',
            tags: ['nigashitaSakana']
        },
        {
            character: '寒々',
            sylabs: ['samu', 'zamu'],
            meaningPL: 'lodowaty, zimowy',
            tags: ['nigashitaSakana']
        },
        {
            character: '会話',
            sylabs: ['kai', 'wa'],
            meaningPL: 'rozmowa, konwersacja',
            tags: ['nigashitaSakana']
        },
        {
            character: '結ぶ',
            sylabs: ['musu', 'bu'],
            meaningPL: 'wiązać, łączyć',
            tags: ['nigashitaSakana']
        },
        {
            character: '囲む',
            sylabs: ['kako', 'mu'],
            meaningPL: 'otaczać',
            tags: ['nigashitaSakana']
        },
        {
            character: '動物',
            sylabs: ['dou', 'butsu'],
            meaningPL: 'zwierzę',
            tags: ['nigashitaSakana']
        },
        {
            character: '無限',
            sylabs: ['mu', 'gen'],
            meaningPL: 'nieskończoność',
            tags: ['nigashitaSakana']
        },
        {
            character: '限度',
            sylabs: ['gen', 'do'],
            meaningPL: 'limit, granica',
            tags: ['nigashitaSakana']
        },
        {
            character: '相手',
            sylabs: ['ai', 'te'],
            meaningPL: 'partner',
            tags: ['nigashitaSakana']
        },
        {
            character: 'あえて',
            sylabs: ['a', 'e', 'te'],
            meaningPL: 'ostatecznie, od biedy, jeśli się uprzeć',
            tags: ['nigashitaSakana']
        },
        {
            character: '夫',
            sylabs: ['otto'],
            meaningPL: 'mąż',
            tags: ['nigashitaSakana']
        },
        {
            character: '機知',
            sylabs: ['ki', 'chi'],
            meaningPL: 'dowcip',
            tags: ['nigashitaSakana']
        },
        {
            character: '収入',
            sylabs: ['shuu', 'nyuu'],
            meaningPL: 'przychód',
            tags: ['nigashitaSakana']
        },
        {
            character: '背',
            sylabs: ['se'],
            meaningPL: 'wzrost, plecy, kręgosłup',
            tags: ['nigashitaSakana']
        },
        {
            character: '果てる',
            sylabs: ['ha', 'te', 'ru'],
            meaningPL: 'kończyć się',
            tags: ['nigashitaSakana']
        },
        {
            character: 'に関して',
            sylabs: ['ni', 'kan', 'shi', 'te'],
            meaningPL: 'w związku z, w relacji z',
            tags: ['nigashitaSakana']
        },
        {
            character: 'センチ',
            sylabs: ['se', 'n', 'chi'],
            meaningPL: 'cm',
            tags: ['nigashitaSakana']
        },
        {
            character: '必須条件',
            sylabs: ['hix', 'su', 'jou', 'ken'],
            meaningPL: 'warunek podstawowy',
            tags: ['nigashitaSakana']
        },
        {
            character: '抱く',
            sylabs: ['ida', 'ku'],
            meaningPL: 'trzymać, obejmować',
            tags: ['nigashitaSakana']
        },
        {
            character: '学歴',
            sylabs: ['gaku', 'reki'],
            meaningPL: 'wykształcenie akademickie',
            tags: ['nigashitaSakana']
        },
        {
            character: '即座',
            sylabs: ['soku', 'za'],
            meaningPL: 'natychmiast',
            tags: ['nigashitaSakana']
        },
        {
            character: '答える',
            sylabs: ['kota', 'e', 'ru'],
            meaningPL: 'odpowiadać',
            tags: ['nigashitaSakana']
        },
        {
            character: '手に入れる',
            sylabs: ['te', 'ni', 'i', 're', 'ru'],
            meaningPL: 'uzyskać, otrzymać',
            tags: ['nigashitaSakana']
        },
        {
            character: '顔色',
            sylabs: ['kao', 'iro'],
            meaningPL: 'wyraz twarzy',
            tags: ['nigashitaSakana']
        },
        {
            character: '自分',
            sylabs: ['ji', 'bun'],
            meaningPL: 'się, swój, siebie',
            tags: ['nigashitaSakana']
        },
        {
            character: '広々',
            sylabs: ['hiro', 'biro'],
            meaningPL: 'rozległy, przestrzenny',
            tags: ['nigashitaSakana']
        },
        {
            character: '牧草',
            sylabs: ['boku', 'so'],
            meaningPL: 'pastwisko',
            tags: ['nigashitaSakana']
        },
        {
            character: '絵',
            sylabs: ['e'],
            meaningPL: 'obraz',
            tags: ['nigashitaSakana']
        },
        {
            character: '意味',
            sylabs: ['i', 'mi'],
            meaningPL: 'znaczenie',
            tags: ['nigashitaSakana']
        },
        {
            character: '別れる',
            sylabs: ['waka', 're', 'ru'],
            meaningPL: 'rozdzielić',
            tags: ['nigashitaSakana']
        },
        {
            character: '面白',
            sylabs: ['omo', 'shiro'],
            meaningPL: 'interesujący, ciekawy',
            tags: ['nigashitaSakana']
        },
        {
            character: '良かったら',
            sylabs: ['yo', 'ka', 'x', 'ta', 'ra'],
            meaningPL: 'jeśli chcesz',
            tags: ['nigashitaSakana']
        },
        {
            character: '波風',
            sylabs: ['nami', 'kaze'],
            meaningPL: 'niezgoda',
            tags: ['nigashitaSakana']
        },
        {
            character: '出世',
            sylabs: ['shux', 'se'],
            meaningPL: 'sukces, awans',
            tags: ['nigashitaSakana']
        },
        {
            character: '遊ぶ',
            sylabs: ['aso', 'bu'],
            meaningPL: 'bawić się',
            tags: ['nigashitaSakana']
        },
        {
            character: '地方都市',
            sylabs: ['chi', 'hou', 'to', 'shi'],
            meaningPL: 'prowincjonalne miasteczko',
            tags: ['nigashitaSakana']
        },
        {
            character: '無くなる',
            sylabs: ['na', 'ku', 'na', 'ru'],
            meaningPL: 'zgubić',
            tags: ['nigashitaSakana']
        },
        {
            character: '流れ',
            sylabs: ['naga', 're'],
            meaningPL: 'przepływ, upływ',
            tags: ['nigashitaSakana']
        },
        {
            character: '残す',
            sylabs: ['noko', 'su'],
            meaningPL: 'zostawić po sobie',
            tags: ['nigashitaSakana']
        },
        {
            character: '一冊',
            sylabs: ['isx', 'satsu'],
            meaningPL: '1 egzemplarz (książki)',
            tags: ['nigashitaSakana']
        },
        {
            character: '一緒に',
            sylabs: ['isx', 'sho', 'ni'],
            meaningPL: 'razem',
            tags: ['nigashitaSakana']
        },
        {
            character: '亡くなる',
            sylabs: ['na', 'ku', 'na', 'ru'],
            meaningPL: 'umrzeć',
            tags: ['nigashitaSakana']
        },
        {
            character: 'コース ',
            sylabs: ['KO', '-', 'SU'],
            meaningPL: 'kurs, droga',
            tags: ['nigashitaSakana']
        },
        {
            character: '日々',
            sylabs: ['hi', 'bi'],
            meaningPL: 'każdego dnia, dzień po dniu, dni',
            tags: ['nigashitaSakana']
        },
        {
            character: '喋る',
            sylabs: ['shabe', 'ru'],
            meaningPL: 'gadać, plotkować',
            tags: ['nigashitaSakana']
        },
        {
            character: 'ユーモア ',
            sylabs: ['YU', '-', 'MO', 'A'],
            meaningPL: 'humor',
            tags: ['nigashitaSakana']
        },
        {
            character: '図体',
            sylabs: ['zu', 'utai'],
            meaningPL: 'ciało, rama',
            tags: ['nigashitaSakana']
        },
        {
            character: '最初',
            sylabs: ['sai', 'sho'],
            meaningPL: 'początek',
            tags: ['nigashitaSakana']
        },
        {
            character: '耐え難い',
            sylabs: ['ta', 'e', 'gata', 'i'],
            meaningPL: 'nieakceptowalny, nie do zniesienia',
            tags: ['nigashitaSakana']
        },
        {
            character: '通る',
            sylabs: ['too', 'ru'],
            meaningPL: 'mijać, przechodzić obok',
            tags: ['nigashitaSakana']
        },
        {
            character: '一生',
            sylabs: ['isx', 'shou'],
            meaningPL: 'całe życie',
            tags: ['nigashitaSakana']
        },
        {
            character: '全く',
            sylabs: ['matta', 'ku'],
            meaningPL: 'naprawdę, całkowicie',
            tags: ['nigashitaSakana']
        },
        {
            character: '移住',
            sylabs: ['i', 'juu'],
            meaningPL: 'emigrować',
            tags: ['nigashitaSakana']
        },
        {
            character: '求める',
            sylabs: ['moto', 'me', 'ru'],
            meaningPL: 'chcieć, życzyć sobie czegoś',
            tags: ['nigashitaSakana']
        },
        {
            character: '土地',
            sylabs: ['to', 'chi'],
            meaningPL: 'połać ziemi',
            tags: ['nigashitaSakana']
        },
        {
            character: '同義語',
            sylabs: ['dou', 'gi', 'go'],
            meaningPL: 'synonim',
            tags: ['nigashitaSakana']
        },
        {
            character: '生む',
            sylabs: ['u', 'mu'],
            meaningPL: 'urodzić (dziecko), złożyć (jajo)',
            tags: ['nigashitaSakana']
        },
        {
            character: '外れる',
            sylabs: ['hazu', 're', 'ru'],
            meaningPL: 'być odłączonym, odciętym',
            tags: ['nigashitaSakana']
        },
        {
            character: '姿',
            sylabs: ['sugata'],
            meaningPL: 'kształt, wygląd',
            tags: ['nigashitaSakana']
        },
        {
            character: '逃がす',
            sylabs: ['ni', 'ga', 'su'],
            meaningPL: 'uwolnić',
            tags: ['nigashitaSakana']
        },
        {
            character: '出す',
            sylabs: ['da', 'su'],
            meaningPL: 'wychodzić',
            tags: ['nigashitaSakana']
        },
        {
            character: '別',
            sylabs: ['betsu'],
            meaningPL: 'inny',
            tags: ['nigashitaSakana']
        },
        {
            character: '無謀',
            sylabs: ['mu', 'bou'],
            meaningPL: 'lekkomyślnie, bezmyślnie',
            tags: ['nigashitaSakana']
        },
        {
            character: '家',
            sylabs: ['ie'],
            meaningPL: 'dom',
            tags: ['nigashitaSakana']
        },
        {
            character: '末',
            sylabs: ['sue'],
            meaningPL: 'końcówka',
            tags: ['nigashitaSakana']
        },
        {
            character: '無趣味',
            sylabs: ['mu', 'shu', 'mi'],
            meaningPL: 'brak zainteresowań czy hobby',
            tags: ['nigashitaSakana']
        },
        {
            character: '将来',
            sylabs: ['shou', 'rai'],
            meaningPL: 'przyszłość',
            tags: ['nigashitaSakana']
        },
        {
            character: '結びつき',
            sylabs: ['musu', 'bi', 'tsu', 'ki'],
            meaningPL: 'połączenie, relacja',
            tags: ['nigashitaSakana']
        },
        {
            character: '秘める',
            sylabs: ['hi', 'me', 'ru'],
            meaningPL: 'ukrywać',
            tags: ['nigashitaSakana']
        },
        {
            character: '必要',
            sylabs: ['hitsu', 'you'],
            meaningPL: 'niezbędne',
            tags: ['nigashitaSakana']
        },
        {
            character: '世話をする',
            sylabs: ['se', 'wa', 'wo', 'su', 'ru'],
            meaningPL: 'doglądać, opiekować się',
            tags: ['nigashitaSakana']
        },
        {
            character: '人生',
            sylabs: ['jin', 'sei'],
            meaningPL: 'ludzkie życie',
            tags: ['nigashitaSakana']
        },
        {
            character: '元々',
            sylabs: ['moto', 'moto'],
            meaningPL: 'oryginalnie',
            tags: ['nigashitaSakana']
        },
        {
            character: '想像',
            sylabs: ['so', 'zo'],
            meaningPL: 'wyobraźnia',
            tags: ['nigashitaSakana']
        },
        {
            character: '可能性',
            sylabs: ['ka', 'nou', 'sei'],
            meaningPL: 'potencjalnie możliwe',
            tags: ['nigashitaSakana']
        },
        {
            character: '目に見える',
            sylabs: ['me', 'ni', 'mi', 'e', 'ru'],
            meaningPL: 'być widzialne',
            tags: ['nigashitaSakana']
        },
        {
            character: '育つ',
            sylabs: ['soda', 'tsu'],
            meaningPL: 'być wychowywanym',
            tags: ['nigashitaSakana']
        },
        {
            character: '伸び伸び',
            sylabs: ['no', 'bi', 'no', 'bi'],
            meaningPL: 'w spokoju',
            tags: ['nigashitaSakana']
        },
        {
            character: '自然',
            sylabs: ['shi', 'zen'],
            meaningPL: 'natura',
            tags: ['nigashitaSakana']
        },
        {
            character: '関係',
            sylabs: ['kan', 'kei'],
            meaningPL: 'relacja międzyludzka',
            tags: ['nigashitaSakana']
        },
        {
            character: '持続',
            sylabs: ['ji', 'zoku'],
            meaningPL: 'trwający',
            tags: ['nigashitaSakana']
        },
        {
            character: '加えて',
            sylabs: ['kuwa', 'e', 'te'],
            meaningPL: 'w dodatku, co więcej',
            tags: ['nigashitaSakana']
        },
        {
            character: '物質',
            sylabs: ['bux', 'shitsu'],
            meaningPL: 'materialność',
            tags: ['nigashitaSakana']
        },
        {
            character: '危惧',
            sylabs: ['ki', 'gu'],
            meaningPL: 'niepokój',
            tags: ['nigashitaSakana']
        },
        {
            character: '以上',
            sylabs: ['i', 'jou'],
            meaningPL: 'nie mniej niż x, x lub więcej',
            tags: ['nigashitaSakana']
        },
        {
            character: '恥ずかしい',
            sylabs: ['ha', 'zu', 'ka', 'shi', 'i'],
            meaningPL: 'zawstydzający',
            tags: ['nigashitaSakana']
        },
        {
            character: '先行する',
            sylabs: ['sen', 'kou', 'su', 'ru'],
            meaningPL: 'być priorytetem',
            tags: ['nigashitaSakana']
        },
        {
            character: 'いずれ',
            sylabs: ['i', 'zu', 're'],
            meaningPL: 'prędzej czy później',
            tags: ['nigashitaSakana']
        },
        {
            character: '的',
            sylabs: ['teki'],
            meaningPL: '-yczny, -owy itp, robi z rzeczownika przymiotnik',
            tags: ['nigashitaSakana']
        },
        {
            character: '人物',
            sylabs: ['jin', 'butsu'],
            meaningPL: 'osobowość, osoba',
            tags: ['nigashitaSakana']
        },
        {
            character: '稼ぐ',
            sylabs: ['kase', 'gu'],
            meaningPL: 'zarabiać',
            tags: ['nigashitaSakana']
        },
        {
            character: '給料',
            sylabs: ['kyuu', 'ryou'],
            meaningPL: 'wynagrodzenie, wypłata',
            tags: ['nigashitaSakana']
        },
        {
            character: '住む',
            sylabs: ['su', 'mu'],
            meaningPL: 'mieszkać',
            tags: ['nigashitaSakana']
        },
        {
            character: '済む',
            sylabs: ['su', 'mu'],
            meaningPL: 'zakończyć',
            tags: ['nigashitaSakana']
        },
        {
            character: '成立する',
            sylabs: ['sei', 'ritsu', 'su', 'ru'],
            meaningPL: 'istnieć',
            tags: ['nigashitaSakana']
        },
        {
            character: '何よりも',
            sylabs: ['nani', 'yo', 'ri', ',mo'],
            meaningPL: 'przede wzsystkim, ponad wszystko',
            tags: ['nigashitaSakana']
        },
        {
            character: '相続',
            sylabs: ['sou', 'zoku'],
            meaningPL: 'spadek, sukcesja',
            tags: ['nigashitaSakana']
        },
        {
            character: '慎ましい',
            sylabs: ['tsutsu', 'ma', 'shi', 'i'],
            meaningPL: 'skromny',
            tags: ['nigashitaSakana']
        },
        {
            character: '保障',
            sylabs: ['ho', 'shou'],
            meaningPL: 'gwarantować',
            tags: ['nigashitaSakana']
        },
        {
            character: 'やっぱり',
            sylabs: ['ya', 'x', 'pa', 'ri'],
            meaningPL: 'a więc, no i tak, i w końcu',
            tags: ['nigashitaSakana']
        },
        {
            character: '条件',
            sylabs: ['jou', 'ken'],
            meaningPL: 'warunek',
            tags: ['nigashitaSakana']
        },
        {
            character: '妊娠',
            sylabs: ['nin', 'shin'],
            meaningPL: 'ciąża',
            tags: ['nigashitaSakana']
        },
        {
            character: '安定',
            sylabs: ['an', 'tei'],
            meaningPL: 'stabilność',
            tags: ['nigashitaSakana']
        },
        {
            character: '世間',
            sylabs: ['se', 'ken'],
            meaningPL: 'społeczeństwo',
            tags: ['nigashitaSakana']
        },
        {
            character: '昔',
            sylabs: ['mukashi'],
            meaningPL: 'poprzedni, dawny',
            tags: ['nigashitaSakana']
        },
        {
            character: '対する',
            sylabs: ['tai', 'su', 'ru'],
            meaningPL: 'stawiać czoła',
            tags: ['nigashitaSakana']
        },
        {
            character: '反対する',
            sylabs: ['han', 'tai', 'su', 'ru'],
            meaningPL: 'stawiać opór',
            tags: ['nigashitaSakana']
        },
        {
            character: '最低',
            sylabs: ['sai', 'tei'],
            meaningPL: 'beznadzieja, minimalne, ograniczone',
            tags: ['nigashitaSakana']
        },
        {
            character: '変える',
            sylabs: ['ka', 'e', 'ru'],
            meaningPL: 'zmienić',
            tags: ['nigashitaSakana']
        },
        {
            character: '若者',
            sylabs: ['waka', 'mono'],
            meaningPL: 'młodzież',
            tags: ['nigashitaSakana']
        },
        {
            character: '描く',
            sylabs: ['ega', 'ku'],
            meaningPL: 'rysować, malować',
            tags: ['nigashitaSakana']
        },
        {
            character: '檻',
            sylabs: ['ori'],
            meaningPL: 'klatka, zagroda, kara fizyczna',
            tags: ['nigashitaSakana']
        },
        {
            character: 'いえば',
            sylabs: ['i', 'e', 'ba'],
            meaningPL: 'można by powiedzieć',
            tags: ['nigashitaSakana']
        },
        {
            character: '富む',
            sylabs: ['to', 'mu'],
            meaningPL: 'być bogaty w, być pełen czegoś',
            tags: ['nigashitaSakana']
        },
        {
            character: '付き合う',
            sylabs: ['tsu', 'ki', 'a', 'u'],
            meaningPL: 'kolegować się',
            tags: ['nigashitaSakana']
        },
        {
            character: '牧場',
            sylabs: ['boku', 'jou'],
            meaningPL: 'farma, ranczo',
            tags: ['nigashitaSakana']
        },
        {
            character: '男性',
            sylabs: ['dan', 'sei'],
            meaningPL: 'męski, mężczyzna',
            tags: ['nigashitaSakana']
        },
        {
            character: '目障り',
            sylabs: ['me', 'zawa', 'ri'],
            meaningPL: 'nieprzyjemne dla oczu, aż oczy bolą',
            tags: ['nigashitaSakana']
        },
        {
            character: '計画',
            sylabs: ['kei', 'gukaku'],
            meaningPL: 'plan',
            tags: ['nigashitaSakana']
        },
        {
            character: '観る',
            sylabs: ['mi', 'ru'],
            meaningPL: 'patrzeć (jak ktoś coś robi)',
            tags: ['nigashitaSakana']
        },
        {
            character: 'ゴロゴロ',
            sylabs: ['GO', 'RO', 'GO', 'RO'],
            meaningPL: '(onomatopeja) grzmot, duże toczące się coś, burczenie w brzuchu, nic nie robienie',
            tags: ['nigashitaSakana']
        },
        {
            character: '仕事',
            sylabs: ['shi', 'goto'],
            meaningPL: 'praca',
            tags: ['nigashitaSakana']
        },
        {
            character: '海外',
            sylabs: ['kai', 'gai'],
            meaningPL: 'zagranica',
            tags: ['nigashitaSakana']
        },
        {
            character: '風',
            sylabs: ['kaze'],
            meaningPL: 'wiatr, przeziębienie',
            tags: ['nigashitaSakana']
        },
        {
            character: '足かせ',
            sylabs: ['ashi', 'ka', 'se'],
            meaningPL: 'kuleć, kajdany, ciężar',
            tags: ['nigashitaSakana']
        },
        {
            character: '二重',
            sylabs: ['ni', 'juu'],
            meaningPL: 'podwójny, 2-warstwowy, 2-stronny itp.',
            tags: ['nigashitaSakana']
        },
        {
            character: '暮らす',
            sylabs: ['ku', 'ra', 'su'],
            meaningPL: 'radzić sobie, żyć',
            tags: ['nigashitaSakana']
        },
        {
            character: '関知',
            sylabs: ['kan', 'chi'],
            meaningPL: 'martwić',
            tags: ['nigashitaSakana']
        },
        {
            character: '理想',
            sylabs: ['ri', 'sou'],
            meaningPL: 'ideał',
            tags: ['nigashitaSakana']
        },
        {
            character: '退屈',
            sylabs: ['tai', 'kutsu'],
            meaningPL: 'nuda',
            tags: ['nigashitaSakana']
        },
        {
            character: '即座',
            sylabs: ['soku', 'za'],
            meaningPL: 'kuleć, kajdany, ciężar',
            tags: ['nigashitaSakana']
        },
        {
            character: '育児',
            sylabs: ['iku', 'ji'],
            meaningPL: 'opieka nad dzieckiem',
            tags: ['nigashitaSakana']
        },
        {
            character: 'アバタもエクボ',
            sylabs: ['A', 'BA', 'TA', 'mo', 'E', 'KU', 'BO'],
            meaningPL: '(idiom) miłość jest ślepa (gdy się jest zakochanym nawet blizny po ospie wyglądają jak dołeczki)',
            tags: ['nigashitaSakana']
        },
        {
            character: '困る',
            sylabs: ['koma', 'ru'],
            meaningPL: 'mieć problem',
            tags: ['nigashitaSakana']
        },
        {
            character: '話題',
            sylabs: ['wa', 'dai'],
            meaningPL: 'temat',
            tags: ['nigashitaSakana']
        },
        {
            character: '家庭',
            sylabs: ['ka', 'tei'],
            meaningPL: 'domostwo, dom',
            tags: ['nigashitaSakana']
        },
        {
            character: '便り',
            sylabs: ['tayo', 'ri'],
            meaningPL: 'wieści, informacje, wiadomości',
            tags: ['nigashitaSakana']
        },
        {
            character: '乏しい',
            sylabs: ['tobo', 'shi', 'i'],
            meaningPL: 'ograniczony',
            tags: ['nigashitaSakana']
        },
        {
            character: 'なければ',
            sylabs: ['na', 'ke', 're', 'ba'],
            meaningPL: 'jeśli nie...to..., bez...nie...',
            tags: ['nigashitaSakana']
        },
        {
            character: 'ウツウツ',
            sylabs: ['U', 'TSU', 'U', 'TSU'],
            meaningPL: 'całą drogę, do samego końca',
            tags: ['nigashitaSakana']
        }
    ];*/
    getResources(){
        return this.resources;
    }
}
