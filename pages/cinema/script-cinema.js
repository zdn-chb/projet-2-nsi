// Attendre que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', function() {
    const texte = "Bonjour, monde !";
    const texteEncode = btoa(texte);
    
    // Récupérer les éléments
    const champSaisie = document.getElementById("passwordInput");
    const bouton = document.getElementById("submitButton");
    const contenu = document.getElementById("contenu");
    
    // Définir le mot de passe correct (insensible à la maj/min)
    const motDePasseCorrect = "ada-lovelace";
    
    // Fonction pour basculer la visibilité
    function basculerVisibilite() {
        // Définir explicitement la visibilité en fonction de l'état actuel
        if (getComputedStyle(contenu).visibility === "hidden") {
            contenu.style.visibility = "visible";
        } else {
            contenu.style.visibility = "hidden";
        }
    }
    
    // Vérifier le mot de passe lorsque l'utilisateur tape
    champSaisie.addEventListener("input", function() {
        const saisieUtilisateur = champSaisie.value.trim().toLowerCase();
        const estCorrect = (saisieUtilisateur === motDePasseCorrect.toLowerCase());
        bouton.disabled = !estCorrect; // Activer le bouton uniquement si le mot de passe correspond
    });
    
    // Gérer le clic sur le bouton
    bouton.addEventListener("click", function() {
        const saisieUtilisateur = champSaisie.value.trim().toLowerCase();
        if (saisieUtilisateur === motDePasseCorrect.toLowerCase()) {
            basculerVisibilite();
        }
    });
    
    // Fonction pour le bouton d'indice
    window.revealPassword = function() {
        alert("Le mot de passe est : 'ada-lovelace'");
    };
});

function chargerImage() {
    const image = document.getElementById('truc');
    image.src = '';
}

// Rendre basculerVisibilite accessible globalement pour le bouton
window.basculerVisibilite = function() {
    const contenu = document.getElementById("contenu");
    if (getComputedStyle(contenu).visibility === "hidden") {
        contenu.style.visibility = "visible";
    } else {
        contenu.style.visibility = "hidden";
    }
};