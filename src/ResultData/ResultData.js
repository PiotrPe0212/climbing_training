import question from '../formDatas/formDatas'
const initialQ = [
    new question("Ile masz lat?", "range", ['']),
    new question("Jakie jest Twoje BMI?", "range", ['']),
    new question("Jak długo się wspinasz?", "radio", ['dopiero zaczynam', 'kilka miesięcy', '1-3 lat', '3-6 lat', 'dłużej niż 6 lat']),
    new question("Jak trudne drogi / buldery robisz?", "radio", ['do 5c', 'do 6b', 'do 7a', 'do 7c', 'trudniejsze niż 7c']),
    new question("Czy masz/ miałeś/aś jakieś kontuzje?", "checkbox", [
        'palców',
        'barków',
        'łokci',
        'kolana',
        'kręgosłup',
        'inne'
    ], [])
]
const mediumQ = [
    new question("Na jakim rodzaju wspinaczki najbardziej Ci zależy?", "radio", ['sportowa', 'buldering', 'czasówki', 'olimpiada']),
    new question("Gdzie będziesz się wspinać?", "checkbox", [
        'panel', 'Polska', 'West'
    ], []),
    new question("Czy uprawiasz jakieś inne sporty?", "checkbox", [
        'nie',
        'bieganie',
        'kolarstwo',
        'pływanie',
        'sporty walki',
        'gimnastyka',
        'slackline',
        'inne'
    ], []),
    new question("Jak często możesz trenować?", "radio", ['raz w tygodniu', '2-3 razy w tygodniu', '5 razy w tygodniu', 'ile trzeba']),
    new question("Wolisz trenować sam czy w grupie?", "radio", ['sam', 'z kolegą/ koleżanką', 'w malej grupie', 'obojętne'])
]

const endQ = [
    new question("W czym czujesz, że jesteś najsłabszy (max 2)?", "checkbox", [
        'balans',
        'rozciągnięcie',
        'dynamika',
        'siła',
        'wytrzymałość',
        'technika',
        'jestem dzikiem'
    ], []),
    new question("Czy masz warunki do treningu w domu?", "radio", ['nie chcę ćwiczyć w domu', 'coś się wymyśli', 'mam w domu pakernie']),
    new question("Czy lubisz chodzić na siłownię?", "radio", ['tak', 'nie', 'jak muszę']),
    new question("Jakie wyposażenie ma ściana na którą chodzisz?", "checkbox", [
        'bulderownia',
        'drogi sportowe',
        'campus',
        'ciężary',
        'chwytotablice',
        'moonboard'
    ], []),
    new question("Czy masz konkretny cel wspinaczkowy?", "radio", ['konkretna droga / boulder', 'zawody', 'olimpiada', 'nie'])
]

let qestionArray = []
qestionArray = qestionArray.concat(initialQ, mediumQ, endQ)
export default qestionArray