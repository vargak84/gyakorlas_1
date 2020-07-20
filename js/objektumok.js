let user = {name: "Kiss Ramóna",
        age: 220,
        city: "Bp"
    };
for (let entry of Object.entries(user)) {
    console.log(entry);
}

for (let valami of Object.entries(user)) {
        console.log(valami[0] + ": " + valami[1]);
}
let admin = {};

let titkosUgynok = {
    name: "John Doe",
    age: 22,
    sayHi: function() {
        console.log(`A nevem ${this.name}!`);
    }
}
titkosUgynok.sayHi();
titkosUgynok.name = "Kiss Pista";
titkosUgynok.sayHi();

let felhasznalo = {
    id: "avdrt4whtrs6545",
    name: "Kiss Eleonóra",
    index: 0,
    aktív: true,
    egyenleg: 1230000,
    picture: "https://twitter.com/"
}

osszeg = 15;

function levonas() {
    felhasznalo.egyenleg -= `${this.osszeg}`;
}
levonas();
console.log(felhasznalo.name + " új egyenlege " + felhasznalo.egyenleg);