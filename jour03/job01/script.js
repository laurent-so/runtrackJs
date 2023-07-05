document.addEventListener("DOMContentLoaded", function() {
    var afficherBtn = document.getElementById("afficherBtn");
    var cacherBtn = document.getElementById("cacherBtn");
    var texte = document.getElementById("texte");

    afficherBtn.addEventListener("click", function() {
        texte.style.display = "block";
    });

    cacherBtn.addEventListener("click", function() {
        texte.style.display = "none";
    });
});
