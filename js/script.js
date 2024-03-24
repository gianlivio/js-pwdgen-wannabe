// nome-cognome-colore

const userName = prompt("Nome:"); // string
console.log(userName, typeof userName); 

const userSur = prompt("Cognome:");  // string
console.log(userSur, typeof userSur); 

const userCol = prompt("Colore Preferito:");//string
console.log(userCol, typeof userCol); 

// variabile21

let num = 21; //number
console.log(num, typeof num);

// trasformazione num in string

num = num.toString();
console.log(num, typeof num);

// concatenazione

const concatenazione = userName + userSur + userCol + num;
document.getElementById('result'). innerHTML = concatenazione;

// bonus

const numRandom = Math.floor(Math.random() * 100);


const concatenazione2 = userName + userSur + userCol + numRandom;
document.getElementById('result2'). innerHTML = concatenazione2;