const costanteUno = 1;
let variabileLetUno;
var variabileVarUno;

// Primo debug
console.log('costanteUno');
console.log(costanteUno);
console.log('variabileLetUno');
console.log(variabileLetUno);
console.log('variabileVarUno');
console.log(variabileVarUno);

// variabileLetUno = 2;
variabileVarUno = '3';

// Secondo debug
console.log('costanteUno');
console.log(costanteUno);
console.log('variabileLetUno');
console.log(variabileLetUno);
console.log('variabileVarUno');
console.log(variabileVarUno);

// Terzo debug
// Keyword typeof: serve a capire di che tipo è una variabile
console.log('costanteUno: ', costanteUno, typeof costanteUno);
console.log('variabileLetUno: ', variabileLetUno, typeof variabileLetUno);
console.log('variabileVarUno: ', variabileVarUno, typeof variabileVarUno);

variabileLetUno = 2;
variabileVarUno = '4';

let chiSaCosaNeViene = variabileLetUno + variabileVarUno;
console.log('chiSaCosaNeViene: ', chiSaCosaNeViene, typeof chiSaCosaNeViene);

let parolaUno = 'Ciao';
let parolaDue = 'Mondo';
let parolaCompleta = parolaUno + ' ' + parolaDue;
console.log('parolaCompleta: ', parolaCompleta, typeof parolaCompleta);

let parolaSpecialeUno = "L'altra volta";
let parolaSpecialeDue = 'Citazione di qualcuno: "Ma quanto è buona la pizza"';
let parolaSpecialeTre = "Citazione di qualcuno: \"Ma quanto è buona la pizza\"";

let string = 'Qui';
let stringTwo = 'Qua';
let fullStringNormale = string + ' Quo ' + stringTwo + "\nAndarono al mercato";
console.log(fullStringNormale);
let fullString = `
    ${string} Quo ${stringTwo}
    Andarono al mercato
`;
console.log(fullString);


	
// addizione, con il segno +
let somma = 4 + 4; 
console.log(somma); // 8
 
// sottrazione, con il segno -
let sottr = somma - 3; 
console.log(sottr); // 5
 
// divisione, con il segno /
// let divisione = somma / 2; 
let divisione = (4 + 4 + 5 + 6 + 7) / 5; 
console.log(divisione); // 4
 
// moltiplicazione, con il segno*
let molt = sottr * somma; // 40
console.log(molt);