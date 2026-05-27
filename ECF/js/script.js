// On sélectionne le bouton et tous les avis cachés
const bouton = document.getElementById('button-voir-plus');
const avisCaches = document.querySelectorAll('.avis-cache');

// On écoute le clic sur le bouton
bouton.addEventListener('click', function() {
    
    // Pour chaque avis caché, on retire la classe qui le masquait
    avisCaches.forEach(function(avis) {
        avis.style.display = 'block'; 
    });
});