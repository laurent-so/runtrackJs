document.addEventListener('DOMContentLoaded', function() {
    // Tableau pour stocker l'ordre initial des images
    const initialOrder = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6'];
  
    // Récupérer le bouton de mélange et l'ajouter à un gestionnaire d'événements
    const shuffleButton = document.getElementById('shuffleButton');
    shuffleButton.addEventListener('click', shuffleImages);
  
    // Récupérer les images et leur ajouter les gestionnaires d'événements de glisser-déposer
    const images = document.querySelectorAll('.container img');
    images.forEach(image => {
      image.addEventListener('dragstart', drag);
    });
  
    // Fonction pour mélanger les images
    function shuffleImages() {
      const container = document.getElementById('imageContainer');
      for (let i = container.children.length; i >= 0; i--) {
        container.appendChild(container.children[Math.random() * i | 0]);
      }
      checkOrder();
    }
  
    // Fonction pour gérer le glisser-déposer des images
    function allowDrop(event) {
      event.preventDefault();
    }
  
    function drag(event) {
      event.dataTransfer.setData('text', event.target.id);
    }
  
    function drop(event) {
      event.preventDefault();
      const data = event.dataTransfer.getData('text');
      event.target.appendChild(document.getElementById(data));
      checkOrder();
    }
  
    // Fonction pour vérifier si les images sont dans le bon ordre
    function checkOrder() {
      const container = document.getElementById('imageContainer');
      const currentOrder = Array.from(container.children).map(img => img.id);
      const messageElement = document.getElementById('message');
      if (arraysEqual(currentOrder, initialOrder)) {
        messageElement.textContent = 'Vous avez gagné';
        messageElement.className = 'green';
      } else {
        messageElement.textContent = 'Vous avez perdu';
        messageElement.className = 'red';
      }
    }
  
    // Fonction utilitaire pour comparer deux tableaux
    function arraysEqual(arr1, arr2) {
      if (arr1.length !== arr2.length) {
        return false;
      }
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    }
  });
  