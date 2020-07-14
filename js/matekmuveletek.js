function osszeadas() {
    let plszam1 = document.querySelector("input[id='plszam1']");
    let plszam2 = document.querySelector("input[id='plszam2']");
    let pleredmeny = parseInt(plszam1.value) + parseInt(plszam2.value);
    alert("Az összeadás eredménye: " + pleredmeny);
}

function kivonas() {
    let minszam1 = document.querySelector("input[id='minszam1']");
    let minszam2 = document.querySelector("input[id='minszam2']");
    let mineredmeny = parseInt(minszam1.value) - parseInt(minszam2.value);
    alert("Az összeadás eredménye: " + mineredmeny);
}

function szorzas() {
    let szorszam1 = document.querySelector("input[id='szorszam1']");
    let szorszam2 = document.querySelector("input[id='szorszam2']");
    let szoreredmeny = parseInt(szorszam1.value) * parseInt(szorszam2.value);
    alert("Az összeadás eredménye: " + szoreredmeny);
}

function osztas() {
    let osztszam1 = document.querySelector("input[id='osztszam1']");
    let osztszam2 = document.querySelector("input[id='osztszam2']");
    let oszteredmeny = parseInt(osztszam1.value) / parseInt(osztszam2.value);
    alert("Az összeadás eredménye: " + oszteredmeny);
}