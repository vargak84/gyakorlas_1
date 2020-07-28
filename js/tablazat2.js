let users = [
    {vezeteknev: "Nagy", keresztnev: "Mariska", kor: 22},
    {vezeteknev: "Varga", keresztnev: "Maja", kor: 1},
    {vezeteknev: "Varga", keresztnev: "Lili", kor: 1},
];

let tableBody = document.querySelector("#userTable tbody");
let createTd = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};

for (i = 0; i < users.length; i++) {
    let tr = document.createElement("tr");
    createTd(parseInt(i) + 1, tr)
    for (let value of Object.values(users[i])) {
        createTd(value, tr);
    }
    tableBody.appendChild(tr);
};