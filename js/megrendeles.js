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