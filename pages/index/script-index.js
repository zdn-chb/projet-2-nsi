// Récupération des éléments HTML nécessaires
const audio = document.getElementById("audioElement");           // Balise audio
const playPauseButton = document.getElementById("playPause");    // Bouton lecture/pause
const progressBar = document.getElementById("progressBar");      // Barre de progression
const currentTimeDisplay = document.getElementById("currentTime"); // Affichage du temps actuel
const totalTimeDisplay = document.getElementById("totalTime");     // Affichage de la durée totale

// Ajoute un événement au clic sur le bouton lecture/pause
playPauseButton.addEventListener("click", () => {
    if (audio.paused) {                    // Si l'audio est en pause
        audio.play();                      // On joue l'audio
        playPauseButton.textContent = "⏸"; // On change l’icône du bouton
    } else {
        audio.pause();                     // Sinon, on met l'audio en pause
        playPauseButton.textContent = "▶"; // Et on change l’icône à ▶
    }
});

// Met à jour la barre de progression et le temps actuel pendant la lecture
audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100; // Pourcentage de lecture
    progressBar.value = progress;                                // Mise à jour de la barre
    currentTimeDisplay.textContent = formatTime(audio.currentTime); // Affiche le temps actuel
});

// Permet de naviguer dans la piste audio via la barre de progression
progressBar.addEventListener("input", () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration; // Repositionne la lecture
});

// Quand les métadonnées sont chargées (durée totale connue)
audio.addEventListener("loadedmetadata", () => {
    totalTimeDisplay.textContent = formatTime(audio.duration); // Affiche la durée totale
});

// Fonction utilitaire pour formater le temps en mm:ss
function formatTime(time) {
    const minutes = Math.floor(time / 60);                     // Minutes
    const seconds = Math.floor(time % 60);                     // Secondes
    return `${minutes}:${seconds.toString().padStart(2, "0")}`; // Format "m:ss"
}
