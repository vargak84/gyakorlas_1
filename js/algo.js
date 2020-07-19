// Összegzés tétele
let tomb = [1, 5, 32, 54, 2, 8, 24];
let sum = 0;
for (let i = 0; i < tomb.length; i++) {
    sum = sum + tomb[i];
}
console.log("Összegzés tétele szerint: " + sum);

//Számlálás tétele
let paros = 0;
for (let i = 0; i < tomb.length; i++) {
    if (tomb[i] % 2 == 0) {
        paros += 1;
    }
}
console.log("Páros számok: "+ paros + "db");

//Szélsőérték keresése
let legnagyobbSzam = tomb[0];
for (let i = 0; i < tomb.length; i++) {
    if (tomb[i] > legnagyobbSzam) {
        legnagyobbSzam = tomb[i];
    }
}
console.log("A legnagyobb szám: " + legnagyobbSzam);

let five = "Nem";
for (let i = 0; i < tomb.length; i++) {
    if (tomb[i] == 5) {
        five = "Igen"
    }
}
console.log("Az 5 szerepel a tömbben: " + five);

//Tömb elemeinek a száma
let darab = 0;
for (let i = 0; i < tomb.length; i++) {
    darab = darab + 1;
}
console.log("A tömb " + darab + " elemet tartalmaz");