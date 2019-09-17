let valeurRang = document.querySelector("#valeurRang");
let valeurColone = document.querySelector("#valeurColone");
let tableau = document.querySelector("#affichage");
let formulaire = document.querySelector("form");

let zone;
let espace;
let nbrRang;
let nbrCol;
let reservation = 0;
let cache;
let checked;
let informationPlace;
let informationReservation;

function activationCreation() {
    nbrRang = formulaire.valeurRang.value;
    nbrCol = formulaire.valeurColone.value;

    creation_table()
};

function creation_table() {
    let sectionAffichage = document.querySelectorAll("section");

    espace = document.createElement("div");
    espace.className = "espace";

    let table = document.createElement("table");
    let tblBody = document.createElement("tbody");

    let blockInfo = document.createElement("p")
    informationPlace = document.createElement("p");
    informationReservation = document.createElement("p");

    for (let i = 1; i <= nbrRang; i++) {
        let ligne = document.createElement("tr");
        ligne.id = "ligne_" + i;

        for (let j = 1; j <= nbrCol; j++) {
            let cell = document.createElement("td");
            cell.id = "cellule_" + i + '-' + j;

            for (let l = 1; l <= 1; l++) {
                let checkbox = document.createElement('input');
                checkbox.type = "checkbox";
                checkbox.className = "check";

                checkbox.id = "check_" + i + '_' + j + '_' + l;
                checkbox.setAttribute("onclick", "cache = this.id, testCheck()");

                cell.appendChild(checkbox);
            }
            ligne.appendChild(cell);
        }

        tblBody.appendChild(ligne);
    }

    table.appendChild(tblBody);

    blockInfo.appendChild(informationPlace);
    blockInfo.appendChild(informationReservation);

    espace.appendChild(blockInfo);
    espace.appendChild(table);

    table.setAttribute("border", "2");

    sectionAffichage[1].appendChild(espace);

    informationPlace.innerHTML = "Place disponible : " + (nbrCol * nbrRang);
    informationReservation.innerHTML = "Place disponible : " + (reservation);
}

function testCheck() {
    checked = $("input:checked");
    reservation = checked.length;
    informationPlace.innerHTML = "Place disponible : " + ((nbrCol * nbrRang) - reservation);
    informationReservation.innerHTML = "Place reservé : " + (reservation);
}