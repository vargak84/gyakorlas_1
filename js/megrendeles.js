function megrendeles() {
    let mennyiseg = document.querySelector("input[id='mennyiseg']");
    let egysegar = 1200;
    let parsMennyiseg = parseInt (mennyiseg.value);

    if (mennyiseg.value >10) {
        alert("Maximum 10 rendelhető!");
        return;
    }

    if (mennyiseg.value <1) {
        alert("Minimum 1 darab rendelhető!");
        return;
    }
    let fizetendoOsszeg = parsMennyiseg * egysegar
    let fizetendoOsszegMezo = document.querySelector("small[id='osszeg']");
    fizetendoOsszegMezo.innerHTML = fizetendoOsszeg
}