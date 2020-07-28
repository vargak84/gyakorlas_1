function megrendeles() {
    let mennyiseg = document.querySelector("input[id='mennyiseg']");
    let parsMennyiseg = parseInt (mennyiseg.value);
    ifFuggveny(parsMennyiseg);
}

function ifFuggveny(parsMennyiseg) {

    if (isNaN(parsMennyiseg)) {
        alert("Írjon be egy értéket a mezőbe 1 és 10 között!")
        return;
    }
    if (parsMennyiseg >10) {
        alert("Maximum 10 rendelhető!");
        return;
    }
    if (parsMennyiseg <1) {
        alert("Minimum 1 darab rendelhető!");
        return;
    }
    vegosszeg(parsMennyiseg);
}

function vegosszeg(parsMennyiseg) {
    let egysegar = 1200;
    let fizetendoOsszeg = parsMennyiseg * egysegar
    let fizetendoOsszegMezo = document.querySelector("small[id='osszeg']");
    fizetendoOsszegMezo.innerHTML = fizetendoOsszeg
}

document.getElementById("feltet");

//let input = document.querySelectorAll("input")

//for (let i = 0; i < input.length; i++) {
//    input[i].value = 5;
//}

let bezargomb = document.querySelector(".close");
function bezar() {
    bezargomb.parentElement.style.display = "none";
}

//Select elem kitöltése
let feltetek = [
    "Szalonna",
    "Extra hagyma",
    "Tükörtojás",
    "Libamáj",
    "Extra sonka"
];
let feltetmezo = document.querySelector("#feltet");

for (let index = 0; index < feltetek.length; index++) {
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = feltetek[index];
    feltetmezo.appendChild(option);
};