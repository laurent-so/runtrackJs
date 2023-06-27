function showhide() {
    var contentElement = document.getElementById("content");
    var articleElement = document.getElementById("article");

    if (articleElement) {
        // L'article existe déjà, donc on le supprime
        contentElement.removeChild(articleElement);
    } else {
        // L'article n'existe pas, donc on l'ajoute
        var article = document.createElement("article");
        article.id = "article";
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";

        contentElement.appendChild(article);
    }
}
