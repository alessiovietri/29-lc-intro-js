// Chiedo l'età all'utente
const age = prompt('In che anno sei nato?');
console.log("L'utente è nato nell'anno: ", age);

let ageModificabile = age;
console.log('ageModificabile', typeof ageModificabile);
ageModificabile = parseInt(ageModificabile);
console.log('ageModificabile', typeof ageModificabile);

const annoCorrente = 2022;

const etaCalcolata = annoCorrente - age;

console.log("L'utente ha ", etaCalcolata, " anni");



const testStrano = parseInt('Test strano');
console.log('testStrano', testStrano, typeof testStrano);


















































/**
 * 
 * Why is the result of ('b'+'a'+ + 'a' + 'a').toLowerCase() 'banana'?
 * 
 */

const banana = ('b'+'a'+ + 'a' + 'a').toLowerCase();
console.log(banana);