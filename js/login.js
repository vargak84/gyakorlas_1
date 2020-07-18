function kattint() {
    let pwr = document.querySelector("input[id='password']");
    let pwrL = pwr.value.length;
    if (pwrL <8) {
        alert("Túl rövid a jelszó!");
    }
    console.log(pwr.value);
}    