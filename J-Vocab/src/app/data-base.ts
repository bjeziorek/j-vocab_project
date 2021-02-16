export class DataBase {
    resources = [
        {
            character: '日曜日',
            sylabs: ['nichi', 'you', 'bi'],
            meaningPL: 'niedziela',
            tags: ['daty', 'n5']
        },
        {
            character: '月曜日',
            sylabs: ['getsu', 'you', 'bi'],
            meaningPL: 'poniedziałek',
            tags: ['daty', 'n5']
        },
        {
            character: '火曜日',
            sylabs: ['ka', 'you', 'bi'],
            meaningPL: 'wtorek',
            tags: ['daty', 'n5']
        },
        {
            character: '水曜日',
            sylabs: ['sui', 'you', 'bi'],
            meaningPL: 'środa',
            tags: ['daty', 'n5']
        },
        {
            character: '木曜日',
            sylabs: ['moku', 'you', 'bi'],
            meaningPL: 'czwartek',
            tags: ['daty', 'n5']
        },
        {
            character: '金曜日',
            sylabs: ['kin', 'you', 'bi'],
            meaningPL: 'piątek',
            tags: ['daty', 'n5']
        },
        {
            character: '土曜日',
            sylabs: ['do', 'you', 'bi'],
            meaningPL: 'sobota',
            tags: ['daty', 'n5']
        },//];/*,
        {
            character: 'お見合い',
            sylabs: ['o', 'mi', 'a', 'i'],
            meaningPL: 'rozmowa przedmałżeńska',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '考える',
            sylabs: ['kanga', 'e', 'ru'],
            meaningPL: 'myśleć; wierzyć, że',
            tags: ['nigashitaSakana', 'n4']
        },
        {
            character: '結婚',
            sylabs: ['kex', 'kon'],
            meaningPL: 'ślub',
            tags: ['nigashitaSakana', 'n5']
        },
        {
            character: '方',
            sylabs: ['hou'],
            meaningPL: 'sposób',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '生活',
            sylabs: ['sei', 'katsu'],
            meaningPL: 'życie (np. studenckie)',
            tags: ['nigashitaSakana', 'n4'],
        },
        {
            character: '冷める',
            sylabs: ['sa', 'me', 'ru'],
            meaningPL: 'być zimne, ochłodzić się, wystygnąć',
            tags: ['nigashitaSakana', 'n2']
        },
        {
            character: '思う',
            sylabs: ['omo', 'u'],
            meaningPL: 'myśleć, sądzić',
            tags: ['nigashitaSakana', 'n4']
        },
        {
            character: '熱々',
            sylabs: ['atsu', 'atsu'],
            meaningPL: 'parzący, szaleńczo zakochany',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '延々',
            sylabs: ['en\'', 'en'],
            meaningPL: 'na zawsze',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '寒々',
            sylabs: ['samu', 'zamu'],
            meaningPL: 'lodowaty, zimowy',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '会話',
            sylabs: ['kai', 'wa'],
            meaningPL: 'rozmowa, konwersacja',
            tags: ['nigashitaSakana', 'n4']
        },
        {
            character: '結ぶ',
            sylabs: ['musu', 'bu'],
            meaningPL: 'wiązać, łączyć',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '囲む',
            sylabs: ['kako', 'mu'],
            meaningPL: 'otaczać',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '動物',
            sylabs: ['dou', 'butsu'],
            meaningPL: 'zwierzę',
            tags: ['nigashitaSakana', 'n5']
        },
        {
            character: '無限',
            sylabs: ['mu', 'gen'],
            meaningPL: 'nieskończoność',
            tags: ['nigashitaSakana', 'n2']
        },
        {
            character: '限度',
            sylabs: ['gen', 'do'],
            meaningPL: 'limit, granica',
            tags: ['nigashitaSakana', 'n2']
        },
        {
            character: '相手',
            sylabs: ['ai', 'te'],
            meaningPL: 'partner',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '敢えて',
            sylabs: ['a', 'e', 'te'],
            meaningPL: 'celowo; ostatecznie, od biedy, jeśli się uprzeć',
            tags: ['nigashitaSakana', 'n1']
        },
        {
            character: '夫',
            sylabs: ['otto'],
            meaningPL: 'mąż',
            tags: ['nigashitaSakana', 'n4']
        },
        {
            character: '機知',
            sylabs: ['ki', 'chi'],
            meaningPL: 'dowcip',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '機知に富む',
            sylabs: ['ki', 'chi', 'ni', 'to', 'mu'],
            meaningPL: 'mieć cięty język',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '収入',
            sylabs: ['shuu', 'nyuu'],
            meaningPL: 'przychód',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '背',
            sylabs: ['se'],
            meaningPL: 'wzrost, plecy, kręgosłup',
            tags: ['nigashitaSakana', 'n5']
        },
        {
            character: '果てる',
            sylabs: ['ha', 'te', 'ru'],
            meaningPL: 'kończyć się',
            tags: ['nigashitaSakana', 'n1']
        },
        {
            character: 'に関して',
            sylabs: ['ni', 'kan', 'shi', 'te'],
            meaningPL: 'w związku z, w relacji z',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: 'センチ',
            sylabs: ['se', 'n', 'chi'],
            meaningPL: 'cm',
            tags: ['nigashitaSakana', 'n2']
        },
        {
            character: '必須条件',
            sylabs: ['hix', 'su', 'jou', 'ken'],
            meaningPL: 'warunek podstawowy',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '抱く',
            sylabs: ['ida', 'ku'],
            meaningPL: 'trzymać, obejmować',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '学歴',
            sylabs: ['gaku', 'reki'],
            meaningPL: 'wykształcenie akademickie',
            tags: ['nigashitaSakana', 'n1']
        },
        {
            character: '答える',
            sylabs: ['kota', 'e', 'ru'],
            meaningPL: 'odpowiadać',
            tags: ['nigashitaSakana', 'n5']
        },
        {
            character: '手に入れる',
            sylabs: ['te', 'ni', 'i', 're', 'ru'],
            meaningPL: 'uzyskać, otrzymać',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '顔色',
            sylabs: ['kao', 'iro'],
            meaningPL: 'wyraz twarzy',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '自分',
            sylabs: ['ji', 'bun'],
            meaningPL: 'się, swój, siebie',
            tags: ['nigashitaSakana', 'n5']
        },
        {
            character: '広々',
            sylabs: ['hiro', 'biro'],
            meaningPL: 'rozległy, przestrzenny',
            tags: ['nigashitaSakana', 'n2']
        },
        {
            character: '牧草',
            sylabs: ['boku', 'so'],
            meaningPL: 'pastwisko',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '絵',
            sylabs: ['e'],
            meaningPL: 'obraz',
            tags: ['nigashitaSakana', 'n5']
        },
        {
            character: '意味',
            sylabs: ['i', 'mi'],
            meaningPL: 'znaczenie',
            tags: ['nigashitaSakana', 'n5']
        },
        {
            character: '別れる',
            sylabs: ['waka', 're', 'ru'],
            meaningPL: 'rozdzielić',
            tags: ['nigashitaSakana', 'n4']
        },
        {
            character: '面白い',
            sylabs: ['omo', 'shiro', 'i'],
            meaningPL: 'interesujący, ciekawy',
            tags: ['nigashitaSakana', 'n5']
        },
        {
            character: '良い',
            sylabs: ['yo', 'i'],
            meaningPL: 'dobry',
            tags: ['nigashitaSakana', 'n5']
        },
        {
            character: '良かったら',
            sylabs: ['yo', 'ka', 'x', 'ta', 'ra'],
            meaningPL: 'jeśli chcesz',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '波風',
            sylabs: ['nami', 'kaze'],
            meaningPL: 'niezgoda',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '出世',
            sylabs: ['shux', 'se'],
            meaningPL: 'sukces, awans',
            tags: ['nigashitaSakana', 'n1']
        },
        {
            character: '遊ぶ',
            sylabs: ['aso', 'bu'],
            meaningPL: 'bawić się',
            tags: ['nigashitaSakana', 'n5']
        },
        {
            character: '地方都市',
            sylabs: ['chi', 'hou', 'to', 'shi'],
            meaningPL: 'prowincjonalne miasteczko',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '無くなる',
            sylabs: ['na', 'ku', 'na', 'ru'],
            meaningPL: 'zgubić',
            tags: ['nigashitaSakana', 'n4']
        },
        {
            character: '流れ',
            sylabs: ['naga', 're'],
            meaningPL: 'przepływ, upływ',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '残す',
            sylabs: ['noko', 'su'],
            meaningPL: 'zostawić po sobie',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '一冊',
            sylabs: ['ix', 'satsu'],
            meaningPL: '1 egzemplarz (książki)',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '一緒に',
            sylabs: ['ix', 'sho', 'ni'],
            meaningPL: 'razem',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '亡くなる',
            sylabs: ['na', 'ku', 'na', 'ru'],
            meaningPL: 'umrzeć',
            tags: ['nigashitaSakana', 'NHK', 'n4']
        },
        {
            character: 'コース',
            sylabs: ['KO', '-', 'SU'],
            meaningPL: 'kurs, droga',
            tags: ['nigashitaSakana', 'n2']
        },
        {
            character: '日々',
            sylabs: ['hi', 'bi'],
            meaningPL: 'każdego dnia, dzień po dniu, dni',
            tags: ['nigashitaSakana', 'n1']
        },
        {
            character: '喋る',
            sylabs: ['shabe', 'ru'],
            meaningPL: 'gadać, plotkować',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: 'ユーモア',
            sylabs: ['YU', '-', 'MO', 'A'],
            meaningPL: 'humor',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '図体',
            sylabs: ['zu', 'utai'],
            meaningPL: 'ciało, rama',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '最初',
            sylabs: ['sai', 'sho'],
            meaningPL: 'początek',
            tags: ['nigashitaSakana', 'n4']
        },
        {
            character: '耐え難い',
            sylabs: ['ta', 'e', 'gata', 'i'],
            meaningPL: 'nieakceptowalny, nie do zniesienia',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '通る',
            sylabs: ['too', 'ru'],
            meaningPL: 'mijać, przechodzić obok',
            tags: ['nigashitaSakana', 'n4']
        },
        {
            character: '一生',
            sylabs: ['ix', 'shou'],
            meaningPL: 'całe życie',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '全く',
            sylabs: ['matta', 'ku'],
            meaningPL: 'naprawdę, całkowicie',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '移住',
            sylabs: ['i', 'juu'],
            meaningPL: 'emigrować',
            tags: ['nigashitaSakana', 'n1']
        },
        {
            character: '求める',
            sylabs: ['moto', 'me', 'ru'],
            meaningPL: 'chcieć, życzyć sobie czegoś',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '土地',
            sylabs: ['to', 'chi'],
            meaningPL: 'połać ziemi',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '同義語',
            sylabs: ['dou', 'gi', 'go'],
            meaningPL: 'synonim',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '生む',
            sylabs: ['u', 'mu'],
            meaningPL: 'urodzić (dziecko), złożyć (jajo)',
            tags: ['nigashitaSakana', 'n1']
        },
        {
            character: '外れる',
            sylabs: ['hazu', 're', 'ru'],
            meaningPL: 'być odłączonym, odciętym',
            tags: ['nigashitaSakana', 'n2']
        },
        {
            character: '姿',
            sylabs: ['sugata'],
            meaningPL: 'kształt, wygląd',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '逃がす',
            sylabs: ['ni', 'ga', 'su'],
            meaningPL: 'uwolnić',
            tags: ['nigashitaSakana', 'n2']
        },
        {
            character: '出す',
            sylabs: ['da', 'su'],
            meaningPL: 'wychodzić',
            tags: ['nigashitaSakana', 'n5']
        },
        {
            character: '別',
            sylabs: ['betsu'],
            meaningPL: 'inny',
            tags: ['nigashitaSakana', 'n4']
        },
        {
            character: '無謀',
            sylabs: ['mu', 'bou'],
            meaningPL: 'lekkomyślnie, bezmyślnie',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '家',
            sylabs: ['ie'],
            meaningPL: 'dom',
            tags: ['nigashitaSakana', 'n5']
        },
        {
            character: '末',
            sylabs: ['sue'],
            meaningPL: 'końcówka',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '無趣味',
            sylabs: ['mu', 'shu', 'mi'],
            meaningPL: 'brak zainteresowań czy hobby',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '趣味',
            sylabs: ['shu', 'mi'],
            meaningPL: 'zainteresowania, hobby',
            tags: ['n4']
        },
        {
            character: '将来',
            sylabs: ['shou', 'rai'],
            meaningPL: 'przyszłość',
            tags: ['nigashitaSakana', 'n4']
        },
        {
            character: '結びつき',
            sylabs: ['musu', 'bi', 'tsu', 'ki'],
            meaningPL: 'połączenie, relacja',
            tags: ['nigashitaSakana', 'n1']
        },
        {
            character: '秘める',
            sylabs: ['hi', 'me', 'ru'],
            meaningPL: 'ukrywać',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '必要',
            sylabs: ['hitsu', 'you'],
            meaningPL: 'niezbędne',
            tags: ['nigashitaSakana', 'NHK', 'n4']
        },
        {
            character: '世話をする',
            sylabs: ['se', 'wa', 'wo', 'su', 'ru'],
            meaningPL: 'doglądać, opiekować się',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '人生',
            sylabs: ['jin', 'sei'],
            meaningPL: 'ludzkie życie',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '元々',
            sylabs: ['moto', 'moto'],
            meaningPL: 'oryginalnie',
            tags: ['nigashitaSakana', 'n2']
        },
        {
            character: '想像',
            sylabs: ['so', 'zo'],
            meaningPL: 'wyobraźnia',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '可能性',
            sylabs: ['ka', 'nou', 'sei'],
            meaningPL: 'potencjalnie możliwe',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '目に見える',
            sylabs: ['me', 'ni', 'mi', 'e', 'ru'],
            meaningPL: 'być widzialne',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '育つ',
            sylabs: ['soda', 'tsu'],
            meaningPL: 'być wychowywanym',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '伸び伸び',
            sylabs: ['no', 'bi', 'no', 'bi'],
            meaningPL: 'w spokoju',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '自然',
            sylabs: ['shi', 'zen'],
            meaningPL: 'natura',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '関係',
            sylabs: ['kan', 'kei'],
            meaningPL: 'relacja międzyludzka',
            tags: ['nigashitaSakana', 'n4']
        },
        {
            character: '持続',
            sylabs: ['ji', 'zoku'],
            meaningPL: 'trwający',
            tags: ['nigashitaSakana', 'n1']
        },
        {
            character: '加えて',
            sylabs: ['kuwa', 'e', 'te'],
            meaningPL: 'w dodatku, co więcej',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '物質',
            sylabs: ['bux', 'shitsu'],
            meaningPL: 'materialność',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '危惧',
            sylabs: ['ki', 'gu'],
            meaningPL: 'niepokój',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '以上',
            sylabs: ['i', 'jou'],
            meaningPL: 'nie mniej niż x, x lub więcej',
            tags: ['nigashitaSakana', 'n4']
        },
        {
            character: '恥ずかしい',
            sylabs: ['ha', 'zu', 'ka', 'shi', 'i'],
            meaningPL: 'zawstydzający',
            tags: ['nigashitaSakana', 'n4']
        },
        {
            character: '先行する',
            sylabs: ['sen', 'kou', 'su', 'ru'],
            meaningPL: 'być priorytetem',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: 'いずれ',
            sylabs: ['i', 'zu', 're'],
            meaningPL: 'prędzej czy później',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '的',
            sylabs: ['teki'],
            meaningPL: '-yczny, -owy itp, robi z rz. przym.',
            tags: ['nigashitaSakana', 'n1']
        },
        {
            character: '人物',
            sylabs: ['jin', 'butsu'],
            meaningPL: 'osobowość, osoba',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '稼ぐ',
            sylabs: ['kase', 'gu'],
            meaningPL: 'zarabiać',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '給料',
            sylabs: ['kyuu', 'ryou'],
            meaningPL: 'wynagrodzenie, wypłata',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '住む',
            sylabs: ['su', 'mu'],
            meaningPL: 'mieszkać',
            tags: ['nigashitaSakana', 'n5']
        },
        {
            character: '済む',
            sylabs: ['su', 'mu'],
            meaningPL: 'zakończyć',
            tags: ['nigashitaSakana', 'n4']
        },
        {
            character: '成立する',
            sylabs: ['sei', 'ritsu', 'su', 'ru'],
            meaningPL: 'istnieć',
            tags: ['nigashitaSakana', 'n2']
        },
        {
            character: '何よりも',
            sylabs: ['nani', 'yo', 'ri', 'mo'],
            meaningPL: 'przede wszystkim, ponad wszystko',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '相続',
            sylabs: ['sou', 'zoku'],
            meaningPL: 'spadek, sukcesja',
            tags: ['Yona', 'n3']
        },
        {
            character: '慎ましい',
            sylabs: ['tsutsu', 'ma', 'shi', 'i'],
            meaningPL: 'skromny',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '保障',
            sylabs: ['ho', 'shou'],
            meaningPL: 'gwarantować',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: 'やっぱり',
            sylabs: ['ya', 'x', 'pa', 'ri'],
            meaningPL: 'a więc, no i tak, i w końcu',
            tags: ['nigashitaSakana', 'n2']
        },
        {
            character: '条件',
            sylabs: ['jou', 'ken'],
            meaningPL: 'warunek',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '妊娠',
            sylabs: ['nin', 'shin'],
            meaningPL: 'ciąża',
            tags: ['nigashitaSakana', 'n1']
        },
        {
            character: '安定',
            sylabs: ['an', 'tei'],
            meaningPL: 'stabilność',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '世間',
            sylabs: ['se', 'ken'],
            meaningPL: 'społeczeństwo',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '昔',
            sylabs: ['mukashi'],
            meaningPL: 'poprzedni, dawny',
            tags: ['nigashitaSakana', 'n4']
        },
        {
            character: '対する',
            sylabs: ['tai', 'su', 'ru'],
            meaningPL: 'stawiać czoła',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '反対する',
            sylabs: ['han', 'tai', 'su', 'ru'],
            meaningPL: 'stawiać opór',
            tags: ['nigashitaSakana', 'n4']
        },
        {
            character: '最低',
            sylabs: ['sai', 'tei'],
            meaningPL: 'beznadzieja, minimalne, ograniczone',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '変える',
            sylabs: ['ka', 'e', 'ru'],
            meaningPL: 'zmienić',
            tags: ['nigashitaSakana', 'n4']
        },
        {
            character: '若者',
            sylabs: ['waka', 'mono'],
            meaningPL: 'młodzież',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '描く',
            sylabs: ['ega', 'ku'],
            meaningPL: 'rysować, malować',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '檻',
            sylabs: ['ori'],
            meaningPL: 'klatka, zagroda, kara fizyczna',
            tags: ['nigashitaSakana', 'n1']
        },
        {
            character: '言えば',
            sylabs: ['i', 'e', 'ba'],
            meaningPL: 'można by powiedzieć, mówiąc o',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '富む',
            sylabs: ['to', 'mu'],
            meaningPL: 'być bogaty w, być pełen czegoś',
            tags: ['nigashitaSakana', 'n1']
        },
        {
            character: '付き合う',
            sylabs: ['tsu', 'ki', 'a', 'u'],
            meaningPL: 'kolegować się',
            tags: ['nigashitaSakana', 'n2']
        },
        {
            character: '牧場',
            sylabs: ['boku', 'jou'],
            meaningPL: 'farma, ranczo',
            tags: ['nigashitaSakana', 'n2']
        },
        {
            character: '男性',
            sylabs: ['dan', 'sei'],
            meaningPL: 'męski, mężczyzna',
            tags: ['nigashitaSakana', 'n4']
        },
        {
            character: '目障り',
            sylabs: ['me', 'zawa', 'ri'],
            meaningPL: 'nieprzyjemne dla oczu, aż oczy bolą',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '計画',
            sylabs: ['kei', 'kaku'],
            meaningPL: 'plan',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '観る',
            sylabs: ['mi', 'ru'],
            meaningPL: 'patrzeć (jak ktoś coś robi)',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: 'ゴロゴロ',
            sylabs: ['GO', 'RO', 'GO', 'RO'],
            meaningPL: '(onomatopeja) grzmot, nic nie robienie', //duże toczące się coś, burczenie w brzuchu, nic nie robienie',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '仕事',
            sylabs: ['shi', 'goto'],
            meaningPL: 'praca',
            tags: ['nigashitaSakana', 'n5']
        },
        {
            character: '海外',
            sylabs: ['kai', 'gai'],
            meaningPL: 'zagranica',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '風',
            sylabs: ['kaze'],
            meaningPL: 'wiatr, przeziębienie',
            tags: ['nigashitaSakana', 'n5']
        },
        {
            character: '足かせ',
            sylabs: ['ashi', 'ka', 'se'],
            meaningPL: 'kuleć, kajdany, ciężar',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '二重',
            sylabs: ['ni', 'juu'],
            meaningPL: 'podwójny, 2-warstwowy, 2-stronny itp.',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '暮らす',
            sylabs: ['ku', 'ra', 'su'],
            meaningPL: 'radzić sobie, żyć',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '関知',
            sylabs: ['kan', 'chi'],
            meaningPL: 'sprawa, bisnes',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '理想',
            sylabs: ['ri', 'sou'],
            meaningPL: 'ideał',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '退屈',
            sylabs: ['tai', 'kutsu'],
            meaningPL: 'nuda',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '即座に',
            sylabs: ['soku', 'za', 'ni'],
            meaningPL: 'natychmiast',
            tags: ['nigashitaSakana', 'n1']
        },
        {
            character: '育児',
            sylabs: ['iku', 'ji'],
            meaningPL: 'opieka nad dzieckiem',
            tags: ['nigashitaSakana', 'n2']
        },
        {
            character: 'アバタもエクボ',
            sylabs: ['A', 'BA', 'TA', 'mo', 'E', 'KU', 'BO'],
            meaningPL: '(idiom) miłość jest ślepa',// (gdy się jest zakochanym nawet blizny po ospie wyglądają jak dołeczki)',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: '困る',
            sylabs: ['koma', 'ru'],
            meaningPL: 'mieć problem',
            tags: ['nigashitaSakana', 'n5']
        },
        {
            character: '話題',
            sylabs: ['wa', 'dai'],
            meaningPL: 'temat',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '家庭',
            sylabs: ['ka', 'tei'],
            meaningPL: 'domostwo, dom',
            tags: ['nigashitaSakana', 'n5']
        },
        {
            character: '便り',
            sylabs: ['tayo', 'ri'],
            meaningPL: 'wieści, informacje, wiadomości',
            tags: ['nigashitaSakana', 'n3']
        },
        {
            character: '乏しい',
            sylabs: ['tobo', 'shi', 'i'],
            meaningPL: 'ograniczony',
            tags: ['nigashitaSakana', 'n1']
        },
        {
            character: 'なければ',
            sylabs: ['na', 'ke', 're', 'ba'],
            meaningPL: 'jeśli nie...to..., bez...nie...',
            tags: ['nigashitaSakana', 'n?']
        },
        {
            character: 'ウツウツ',
            sylabs: ['U', 'TSU', 'U', 'TSU'],
            meaningPL: 'całą drogę, do samego końca',
            tags: ['nigashitaSakana', 'n?']
        },
        ////nowe - zdania i slowka
        {
            character: '石油',
            sylabs: ['seki', 'yu'],
            meaningPL: 'benzyna',
            tags: ['notatki', 'n3']
        },
        {
            character: '目次',
            sylabs: ['moku', 'ji'],
            meaningPL: 'spis treści',
            tags: ['notatki', 'n2']
        },
        {
            character: '化石',
            sylabs: ['ka', 'seki'],
            meaningPL: 'skamielina',
            tags: ['notatki', 'n1']
        },
        {
            character: '毛糸',
            sylabs: ['ke', 'ito'],
            meaningPL: 'przędza wełniana',
            tags: ['notatki', 'n2']
        },
        {
            character: '足りる',
            sylabs: ['re', 'ri', 'ru'],
            meaningPL: 'być wystarczające',
            tags: ['notatki', 'n4']
        },
        {
            character: '目上',
            sylabs: ['me', 'ue'],
            meaningPL: 'przełożony',
            tags: ['notatki', 'n2']
        },
        {
            character: '午後',
            sylabs: ['go', 'go'],
            meaningPL: 'po południu',
            tags: ['notatki', 'n5']
        },
        {
            character: '午前',
            sylabs: ['go', 'zen'],
            meaningPL: 'przed południem',
            tags: ['notatki', 'n5']
        },
        {
            character: '問題',
            sylabs: ['mon', 'dai'],
            meaningPL: 'pytanie, problem',
            tags: ['notatki', 'n5']
        },
        {
            character: 'お陰様で',
            sylabs: ['o', 'kage', 'sama', 'de'],
            meaningPL: 'na szczęście, dzięki Bogu',
            tags: ['notatki', 'n2']
        },
        {
            character: 'ご免ください',
            sylabs: ['go', 'men', 'ku', 'da', 'sa', 'i'],
            meaningPL: 'czy mogę wejść?',
            tags: ['notatki', 'n2']
        },
        {
            character: 'こちらこそ',
            sylabs: ['ko', 'chi', 'ra', 'ko', 'so'],
            meaningPL: 'to ja, a nie ty powinienem to powiedzieć',
            tags: ['notatki', 'n2']
        },
        {
            character: 'おねがいします',
            sylabs: ['o', 'ne', 'ga', 'i', 'shi', 'ma', 'su'],
            meaningPL: 'uprzejmie proszę',
            tags: ['notatki', 'n2']
        },
        {
            character: '煩い',
            sylabs: ['urusa', 'i'],
            meaningPL: 'głośny',
            tags: ['notatki', 'n2']
        },
        {
            character: '集中',
            sylabs: ['shuu', 'chuu'],
            meaningPL: 'koncentracja',
            tags: ['notatki', 'n3']
        },
        {
            character: '集中する',
            sylabs: ['shuu', 'chuu', 'su', 'ru'],
            meaningPL: 'skupić się',
            tags: ['notatki', 'n?']
        },
        {
            character: '季節',
            sylabs: ['ki', 'setsu'],
            meaningPL: 'pora roku',
            tags: ['notatki', 'n4']
        },
        {
            character: '風邪を引く',
            sylabs: ['ka', 'ze', 'wo', 'hi', 'ku'],
            meaningPL: 'przeziębić się',
            tags: ['notatki', 'n?']
        },
        {
            character: '邪道',
            sylabs: ['ka', 'ze'],
            meaningPL: 'niewłaściwa droga, herezja',
            tags: ['notatki', 'n?']
        },
        {
            character: '住み心地',
            sylabs: ['su', 'mi', 'goko', 'chi'],
            meaningPL: 'wygodnie mieszkać',
            tags: ['notatki', 'n?']
        },
        {
            character: '座る',
            sylabs: ['suwa', 'ru'],
            meaningPL: 'siedzieć',
            tags: ['notatki', 'n5']
        },
        {
            character: '女性',
            sylabs: ['jo', 'sei'],
            meaningPL: 'żeński',
            tags: ['notatki', 'n4']
        },
        {
            character: '交差点',
            sylabs: ['kou', 'sa', 'ten'],
            meaningPL: 'skrzyżowanie',
            tags: ['notatki', 'n5']
        },
        {
            character: '何',
            sylabs: ['nani'],
            meaningPL: 'co',
            tags: ['notatki', 'n5']
        },
        {
            character: '何か',
            sylabs: ['nani', 'ka'],
            meaningPL: 'coś',
            tags: ['notatki', 'n3']
        },
        {
            character: '何も',
            sylabs: ['nani', 'mo'],
            meaningPL: 'wszystko / nic',
            tags: ['notatki', 'n3']
        },
        {
            character: '何でも',
            sylabs: ['nani', 'de', 'mo'],
            meaningPL: 'cokolwiek',
            tags: ['notatki', 'n3']
        },
        {
            character: '誰',
            sylabs: ['dare'],
            meaningPL: 'kto',
            tags: ['notatki', 'n5']
        },
        {
            character: '誰か',
            sylabs: ['dare', 'ka'],
            meaningPL: 'ktoś',
            tags: ['notatki', 'n3']
        },
        {
            character: '誰も',
            sylabs: ['dare', 'mo'],
            meaningPL: 'wszyscy / nikt',
            tags: ['notatki', 'n3']
        },
        {
            character: '誰でも',
            sylabs: ['dare', 'de', 'mo'],
            meaningPL: 'ktokolwiek',
            tags: ['notatki', 'n3']
        },
        {
            character: 'どこ',
            sylabs: ['do', 'ko'],
            meaningPL: 'gdzie',
            tags: ['notatki', 'n5']
        },
        {
            character: 'どこか',
            sylabs: ['do', 'ko', 'ka'],
            meaningPL: 'gdzieś',
            tags: ['notatki', 'n3']
        },
        {
            character: 'どこも',
            sylabs: ['do', 'ko', 'mo'],
            meaningPL: 'wszędzie / nigdzie',
            tags: ['notatki', 'n3']
        },
        {
            character: 'どこでも',
            sylabs: ['do', 'ko', 'de', 'mo'],
            meaningPL: 'gdziekolwiek',
            tags: ['notatki', 'n3']
        },
        {
            character: 'いつ',
            sylabs: ['i', 'tsu'],
            meaningPL: 'kiedy',
            tags: ['notatki', 'n5']
        },
        {
            character: 'いつか',
            sylabs: ['i', 'tsu', 'ka'],
            meaningPL: 'kiedyś',
            tags: ['notatki', 'n3']
        },
        {
            character: 'いつも',
            sylabs: ['i', 'tsu', 'mo'],
            meaningPL: 'zawsze / nigdy',
            tags: ['notatki', 'n3']
        },
        {
            character: 'いつでも',
            sylabs: ['i', 'tsu', 'de', 'mo'],
            meaningPL: 'kiedykolwiek',
            tags: ['notatki', 'n3']
        },
        {
            character: '感情',
            sylabs: ['kan', 'jou'],
            meaningPL: 'emocje',
            tags: ['j-pop', 'n3']
        },
        {
            character: '理性',
            sylabs: ['ri', 'sei'],
            meaningPL: 'rozumowanie, logiczne myślenie',
            tags: ['j-pop', 'n1']
        },
        {
            character: 'まま',
            sylabs: ['ma', 'ma'],
            meaningPL: 'pozostawić bez zmian',
            tags: ['j-pop', 'n1']
        },
        {
            character: '曇らす',
            sylabs: ['kumo', 'ra', 'su'],
            meaningPL: 'zaciemniać',
            tags: ['j-pop', 'n1']
        },
        {
            character: '我々',
            sylabs: ['ware', 'ware'],
            meaningPL: 'my (ogół)',
            tags: ['j-pop', 'n3']
        },
        {
            character: '常に',
            sylabs: ['tsune', 'ni'],
            meaningPL: 'zawsze, stale',
            tags: ['j-pop', 'n3']
        },
        {
            character: '見当',
            sylabs: ['ken', 'tou'],
            meaningPL: 'przewidywania, w przybliżeniu',
            tags: ['j-pop', 'n3']
        },
        {
            character: '見当違い',
            sylabs: ['ken', 'tou', 'chiga', 'i'],
            meaningPL: 'niewłaściwy, błednie wyestymowany',
            tags: ['j-pop', 'n?']
        },
        {
            character: '奴',
            sylabs: ['yatsu'],
            meaningPL: 'facet',
            tags: ['j-pop', 'n?']
        },
        {
            character: '溶ける',
            sylabs: ['to', 'ke', 'ru'],
            meaningPL: 'roztapiać się, rozpuszczać się',
            tags: ['j-pop', 'n2']
        },
        {
            character: '中毒',
            sylabs: ['chuu', 'doku'],
            meaningPL: 'trujący, uzależniający',
            tags: ['j-pop', 'n2']
        },
        {
            character: '気持ち',
            sylabs: ['ki', 'mo', 'chi'],
            meaningPL: 'uczucie',
            tags: ['j-pop', 'n2']
        },
        {
            character: '後悔する',
            sylabs: ['kou', 'kai', 'su', 'ru'],
            meaningPL: 'żałować',
            tags: ['j-pop', 'n?']
        },
        {
            character: '上げる',
            sylabs: ['a', 'ge', 'ru'],
            meaningPL: 'podnosić',
            tags: ['j-pop', 'n5']
        },
        {
            character: '様',
            sylabs: ['you'],
            meaningPL: 'wyglądać jakby',
            tags: ['j-pop', 'n3']
        },
        {
            character: 'そっと',
            sylabs: ['so', 'x', 'to'],
            meaningPL: 'delikatnie, po cichu',
            tags: ['j-pop', 'n2']
        },
        {
            character: '一つ',
            sylabs: ['hito', 'tsu'],
            meaningPL: 'jedna rzecz',
            tags: ['j-pop', 'n5']
        },
        {
            character: '一人',
            sylabs: ['hito', 'ri'],
            meaningPL: 'jedna osoba',
            tags: ['j-pop', 'n5']
        },
        {
            character: 'だろう',
            sylabs: ['da', 'ro', 'u'],
            meaningPL: 'przypuszczać, wyglądać na to że',
            tags: ['j-pop', 'n?']
        },
        {
            character: 'だろうか',
            sylabs: ['da', 'ro', 'u', 'ka'],
            meaningPL: 'nie sądzisz?',
            tags: ['j-pop', 'n?']
        },
        {
            character: '明日',
            sylabs: ['a', 'shita'],
            meaningPL: 'jutro',
            tags: ['j-pop', 'n5']
        },
        {
            character: '耳元で',
            sylabs: ['mimi', 'moto', 'de'],
            meaningPL: 'do ucha',
            tags: ['j-pop', 'n?']
        },
        {
            character: '罠',
            sylabs: ['wana'],
            meaningPL: 'pułapka',
            tags: ['j-pop', 'n?']
        },
        {
            character: '鼠',
            sylabs: ['nezumi'],
            meaningPL: 'mysz',
            tags: ['j-pop', 'n3']
        },
        {
            character: '屡々',
            sylabs: ['shiba', 'shiba'],
            meaningPL: 'często',
            tags: ['j-pop', 'n3']
        },
        {
            character: '誘き寄せる',
            sylabs: ['obi', 'ki', 'yo', 'se', 'ru'],
            meaningPL: 'zwabiać',
            tags: ['j-pop', 'n3']
        },
        {
            character: '仕掛ける',
            sylabs: ['shi', 'ka', 'ke', 'ru'],
            meaningPL: 'zaczynać; ustawiać',
            tags: ['j-pop', 'n1']
        },
        {
            character: '居なくなる',
            sylabs: ['i', 'na', 'ku', 'na', 'ru'],
            meaningPL: 'zniknąć',
            tags: ['j-pop', 'n?']
        },
        {
            character: '桁',
            sylabs: ['keta'],
            meaningPL: 'cyfra',
            tags: ['j-pop', 'n2']
        },
        {
            character: '珍しい',
            sylabs: ['mezura', 'shi', 'i'],
            meaningPL: 'rzadki',
            tags: ['j-pop', 'n4']
        },
        {
            character: '俺',
            sylabs: ['ore'],
            meaningPL: 'ja (aroganckie, mężczyzna)',
            tags: ['j-pop', 'n4']
        },
        {
            character: '陥れる',
            sylabs: ['otoshii', 're', 'ru'],
            meaningPL: 'zwabić',
            tags: ['j-pop', 'n?']
        },
        {
            character: '今夜',
            sylabs: ['kon', 'ya'],
            meaningPL: 'dziś w nocy',
            tags: ['j-pop', 'n4']
        },
        {
            character: '落ちる',
            sylabs: ['o', 'chi', 'ru'],
            meaningPL: 'spadać',
            tags: ['j-pop', 'n4']
        },
        {
            character: '誘う',
            sylabs: ['sa', 'so', 'u'],
            meaningPL: 'zapraszać',
            tags: ['j-pop', 'n3']
        },
        {
            character: '揺れる',
            sylabs: ['yu', 're', 'ru'],
            meaningPL: 'huśtać',
            tags: ['j-pop', 'n4']
        },
        {
            character: '恋愛',
            sylabs: ['ren', 'ai'],
            meaningPL: 'prawdziwa miłość',
            tags: ['j-pop', 'n1']
        },
        {
            character: '愛',
            sylabs: ['ai'],
            meaningPL: 'miłość',
            tags: ['j-pop', 'n3']
        },
        {
            character: '嵌める',
            sylabs: ['ha', 'me', 'ru'],
            meaningPL: 'wkładać, łapać',
            tags: ['j-pop', 'n2']
        },
        {
            character: 'なら',
            sylabs: ['na', 'ra'],
            meaningPL: 'w przypadku (kogoś / czegoś)',
            tags: ['j-pop', 'n?']
        },
        {
            character: 'かな',
            sylabs: ['ka', 'na'],
            meaningPL: 'mam nadzieję na',
            tags: ['j-pop', 'n?']
        },
        {
            character: '止まる',
            sylabs: ['to', 'ma', 'ru'],
            meaningPL: 'zatrzymać',
            tags: ['j-pop', 'n?']
        },
        {
            character: 'みたい',
            sylabs: ['mi', 'ta', 'i'],
            meaningPL: 'podobne do',
            tags: ['j-pop', 'n?']
        },
        {
            character: '夢',
            sylabs: ['yume'],
            meaningPL: 'marzenie',
            tags: ['j-pop', 'n4']
        },
        {
            character: '挑戦',
            sylabs: ['chou', 'sen'],
            meaningPL: 'wyzwanie',
            tags: ['j-pop', 'n1']
        },
        {
            character: '携帯',
            sylabs: ['kei', 'tai'],
            meaningPL: 'wyzwanie',
            tags: ['j-pop', 'n1']
        },
        {
            character: '形態',
            sylabs: ['kei', 'tai'],
            meaningPL: 'forma, kształt',
            tags: ['j-pop', 'n1']
        },
        {
            character: '質問',
            sylabs: ['shitsu', 'mon'],
            meaningPL: 'pytanie',
            tags: ['j-pop', 'n5']
        },
        {
            character: '教科書',
            sylabs: ['kyou', 'ka', 'sho'],
            meaningPL: 'podręcznik',
            tags: ['j-pop', 'n3']
        },
        {
            character: '上司',
            sylabs: ['jou', 'shi'],
            meaningPL: 'szef',
            tags: ['j-pop', 'n1']
        },
        {
            character: '文法',
            sylabs: ['bun', 'pou'],
            meaningPL: 'gramatyka',
            tags: ['j-pop', 'n4']
        },
        {
            character: '覚える',
            sylabs: ['obo', 'e', 'ru'],
            meaningPL: 'zapamiętać',
            tags: ['j-pop', 'n5']
        },
        {
            character: '発問する',
            sylabs: ['hatsu', 'mon', 'su', 'ru'],
            meaningPL: 'wymówić',
            tags: ['j-pop', 'n?']
        },
        {
            character: '固体',
            sylabs: ['ko', 'tai'],
            meaningPL: 'stały, solidny, twardy',
            tags: ['j-pop', 'n1']
        },
        {
            character: '指輪',
            sylabs: ['yubi', 'wa'],
            meaningPL: 'pierścionek',
            tags: ['NHK', 'n4']
        },
        {
            character: '個',
            sylabs: ['ko'],
            meaningPL: 'licznik artykułów, jednostek wojskowych, diamentów',
            tags: ['NHK', 'n2']
        },
        {
            character: 'ダイヤモンド',
            sylabs: ['DA', 'I', 'YA', 'MO', 'N', 'DO'],
            meaningPL: 'diament',
            tags: ['NHK', 'n?']
        },
        {
            character: '最も',
            sylabs: ['motto', 'mo'],
            meaningPL: 'większość',
            tags: ['NHK', 'n2']
        },
        {
            character: '若しくは',
            sylabs: ['mo', 'shi', 'ku', 'wha'],
            meaningPL: 'lub',
            tags: ['NHK', 'n1']
        },
        {
            character: 'デザインする',
            sylabs: ['DE', 'ZA', 'I', 'N', 'su', 'ru'],
            meaningPL: 'zaprojektować',
            tags: ['NHK', 'n1']
        },
        {
            character: '天然',
            sylabs: ['ten', 'nen'],
            meaningPL: 'naturalny, spontaniczny',
            tags: ['NHK', 'n3']
        },
        {
            character: '重さ',
            sylabs: ['omo', 'sa'],
            meaningPL: 'waga, ciężar',
            tags: ['NHK', 'n?']
        },
        {
            character: '宝石商',
            sylabs: ['hou', 'seki', 'shou'],
            meaningPL: 'jubiler',
            tags: ['NHK', 'n?']
        },
        {
            character: 'に依る',
            sylabs: ['ni', 'yo', 'ru'],
            meaningPL: 'według, zgodnie z',
            tags: ['NHK', 'n?']
        },
        {
            character: '破る',
            sylabs: ['yabu', 'ru'],
            meaningPL: 'przerwać',
            tags: ['NHK', 'n3']
        },
        {
            character: '増える',
            sylabs: ['fu', 'e', 'ru'],
            meaningPL: 'wzrastać',
            tags: ['NHK', 'n4']
        },
        {
            character: 'や',
            sylabs: ['ya'],
            meaningPL: 'lub',
            tags: ['NHK', 'n?']
        },
        {
            character: '入院',
            sylabs: ['nyuu', 'in'],
            meaningPL: 'hospitalizacja',
            tags: ['NHK', 'n4']
        },
        {
            character: '警察',
            sylabs: ['kei', 'satsu'],
            meaningPL: 'policja',
            tags: ['NHK', 'n4']
        },
        {
            character: 'に依ると',
            sylabs: ['ni', 'yo', 'ru', 'to'],
            meaningPL: 'według',
            tags: ['NHK', 'n?']
        },
        {
            character: '具合',
            sylabs: ['gu', 'ai'],
            meaningPL: 'stan, kondycja',
            tags: ['NHK', 'n4']
        },
        {
            character: '急に',
            sylabs: ['kyuu', 'ni'],
            meaningPL: 'nagły',
            tags: ['NHK', 'n3']
        },
        {
            character: '悪くなる',
            sylabs: ['waru', 'ku', 'na', 'ru'],
            meaningPL: 'pogarszać się',
            tags: ['NHK', 'n?']
        },
        {
            character: '特に',
            sylabs: ['toku', 'ni'],
            meaningPL: 'w szczególności',
            tags: ['NHK', 'n4']
        },
        {
            character: 'この内',
            sylabs: ['ko', 'no', 'uchi'],
            meaningPL: 'spośród nich',
            tags: ['NHK', 'n?']
        },
        {
            character: 'など',
            sylabs: ['na', 'do'],
            meaningPL: 'taki, i tym podobny',
            tags: ['NHK', 'n5']
        },
        {
            character: '体',
            sylabs: ['karada'],
            meaningPL: 'ciało',
            tags: ['NHK', 'n5']
        },
        {
            character: 'すぐ',
            sylabs: ['su', 'gu'],
            meaningPL: 'wkrótce, natychmiast',
            tags: ['NHK', 'n1']
        },
        {
            character: '専門家',
            sylabs: ['sen', 'mon', 'ka'],
            meaningPL: 'specjalista',
            tags: ['NHK', 'n?']
        },
        {
            character: '軽い',
            sylabs: ['karu', 'i'],
            meaningPL: 'lekki',
            tags: ['NHK', 'n5']
        },
        {
            character: '場合',
            sylabs: ['ba', 'ai'],
            meaningPL: 'gdyby',
            tags: ['NHK', 'n4']
        },
        {
            character: '治療',
            sylabs: ['chi', 'ryou'],
            meaningPL: 'leczenie',
            tags: ['NHK', 'n1']
        },
        {
            character: '受ける',
            sylabs: ['u', 'ke', 'ru'],
            meaningPL: 'otrzymać',
            tags: ['NHK', 'n4']
        },
        {
            character: 'アカウント',
            sylabs: ['A', 'KA', 'U', 'N', 'TO'],
            meaningPL: 'konto',
            tags: ['NHK', 'n4']
        },
        {
            character: '一時凍結',
            sylabs: ['ichi', 'ji', 'tou', 'ketsu'],
            meaningPL: 'tymczasowe zamrożenie',
            tags: ['NHK', 'n?']
        },
        {
            character: 'ツイッター',
            sylabs: ['TSU', 'I', 'X', 'TA', '-'],
            meaningPL: 'Twitter',
            tags: ['NHK', 'n?']
        },
        {
            character: '大統領選挙',
            sylabs: ['dai', 'tou', 'ryou', 'sen', 'kou'],
            meaningPL: 'wybory prezydenckie',
            tags: ['NHK', 'n?']
        },
        {
            character: '大統領',
            sylabs: ['dai', 'tou', 'ryou'],
            meaningPL: 'prezydent',
            tags: ['NHK', 'n3']
        },
        {
            character: '不正',
            sylabs: ['fu', 'sei'],
            meaningPL: 'nielegalny, niesprawiedliwy',
            tags: ['NHK', 'n3']
        },
        {
            character: '氏',
            sylabs: ['shi'],
            meaningPL: 'pan, pani',
            tags: ['NHK', 'n?']
        },
        {
            character: '共に',
            sylabs: ['tomo', 'ni'],
            meaningPL: 'razem, wspólnie',
            tags: ['NHK', 'n3']
        },
        {
            character: '乱入',
            sylabs: ['ran', 'nyuu'],
            meaningPL: 'wtargnięcie',
            tags: ['NHK', 'n3']
        },
        {
            character: '支持者',
            sylabs: ['shi', 'ji', 'sha'],
            meaningPL: 'zwolennik',
            tags: ['NHK', 'n3']
        },
        {
            character: '決める',
            sylabs: ['ki', 'me', 'ru'],
            meaningPL: 'decydować',
            tags: ['NHK', 'n4']
        },
        {
            character: '決めさせる',
            sylabs: ['ki', 'me', 'sa', 'se', 'ru'],
            meaningPL: 'zmusić do decyzji',
            tags: ['NHK', 'n?']
        },
        {
            character: 'させる',
            sylabs: ['sa', 'se', 'ru'],
            meaningPL: 'zmusić do zrobienia czegoś',
            tags: ['NHK', 'n?']
        },
        {
            character: 'に対して',
            sylabs: ['ni', 'tai', 'shi', 'te'],
            meaningPL: 'w kierunku, w przeciwieństwie',
            tags: ['NHK', 'n?']
        },
        {
            character: '容認する',
            sylabs: ['you', 'nin', 'su', 'ru'],
            meaningPL: 'tolerować',
            tags: ['NHK', 'n?']
        },
        {
            character: '訴える',
            sylabs: ['utta', 'e', 'ru'],
            meaningPL: 'wnieść sprawę',
            tags: ['NHK', 'n3']
        }




        //,



        ///zdania
        /*  {
              character: 'その猫の一方は黒で、もう一方は茶だ。',
              sylabs: ['so', 'no', 'neko', 'no', 'ix', 'pou', 'ha', 'kuro', 'de',',', 'mo', 'u', 'ix', 'pou', 'ha', 'cha', 'da', '.'],
              meaningPL: 'Ten kot jest czarny, ale ten drugi jest brązowy.',
              tags: ['jisho']
          },*/
    ];//*/
    getResources() {
        return this.resources;
    }
}
