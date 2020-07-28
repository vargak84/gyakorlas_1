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

let createButtonGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn-group";

    let btnInfo = document.createElement("button")
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = "Frissít";
    let btnDanger = document.createElement("button")
    btnDanger.className = "btn-danger btn"
    btnDanger.innerHTML = "Töröl";

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
};

for (i = 0; i < users.length; i++) {
    let tr = document.createElement("tr");
    createTd(parseInt(i) + 1, tr)
    for (let value of Object.values(users[i])) {
        createTd(value, tr);
    }
    tableBody.appendChild(tr);
    createButtonGroup(tr);
};