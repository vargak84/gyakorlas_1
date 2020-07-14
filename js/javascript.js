let price1 = 5;
const price2 = 6;
const totalPrice = price1 + price2;
console.log("Eredmény =", totalPrice);

const name = "Varga Kornél";
let active = true;
console.log(typeof name);
console.log(typeof active);

let userAge = 33;
userAge = String(userAge);

let userName = "Kiss Priska";
console.log(userName);
console.log(typeof userName);

function gomb() {
    
    let szam1 = document.querySelector("input[id='szam1']");
    let szam2 = document.querySelector("input[id='szam2']");
    let eredmeny = parseInt(szam1.value) + parseInt(szam2.value);
    alert("Az eredmény: " + eredmeny);

};