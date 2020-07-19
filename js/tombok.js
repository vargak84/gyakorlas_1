//Tömb létrehozása
let cars = ["Audi", "Trabant", "Suzuki"];
console.log(cars);
//Mixed tömb
let user = [1, "Jane", true, null];
console.log(user);
//Kiírja a tömb 2. elemét
console.log(user[2]);
//Tömb tömbön belül - több soros tömb
let users = [
    [1, "Jim", false],
    [2, "Erika", true],
    [3, "Béla", false]
];
console.log(users);
//Új elemet ad a tömbhöz a végére
cars.push("Volvo");
console.log(cars);
//Elveszi a tömb utolsó elemét
cars.pop();
console.log(cars);
//Hozzáad egy elemet a tömb elejéhez
cars.unshift("Saab");
console.log(cars);
//Eltávolítja a tömb első elemét
cars.shift();
console.log(cars);
//Tömb vágása (Nem módosítja az eredeti tömböt, egy újat ad vissza)
console.log(cars.slice(0, 1));
//Tömb vágása (Módosíthatja a tömböt és hozzá is adhat)
//Jelen példánál az 1-es indexű elemnél kezdi a manipulációt, 0 elemet vesz ki és hozzáadja a Lada elemet
cars.splice(1, 0, "Lada");
console.log(cars);
//Tömböt stingesíteni
console.log(cars.join(", "));
//For ciklus - elöl tesztelős
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//Példa
let fruits = ["körte", "alma", "banán"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//Ciklus megszakítása - continue és break
//Continue - Végigfuttatja a ciklust,de nem írja ki
let fruits2 = ["körte", "alma", "banán"];
for (let i = 0; i < fruits2.length; i++) {
    if (i > 1) {
        continue;
    }
    console.log(fruits[i]);
}
//Break - Megszakítja a ciklust
let fruits3 = ["körte", "alma", "banán"];
for (let i = 0; i < fruits3.length; i++) {
    if (i > 1) {
        break;
    }
    console.log(fruits[i]);
}
//Összevont operátorok - mindig az egyenlőség jel az utolsó
let age = 55;
age += 10;
console.log(age);
age /= 5;
console.log(age);
//Tenary operátor
let age2 = 21;
let szavazhat;
let city = "NY";
szavazhat = (age2 >= 18 && city == "NY") ? "Szavazhat" : "Nem szavazhat";
console.log(szavazhat);