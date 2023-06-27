var compteur = 0;
var bouton = document.getElementById("button");
var compteurElement = document.getElementById("compteur");

function addone() {
    compteur++;
    compteurElement.textContent = compteur;
}

bouton.addEventListener("click", addone);
