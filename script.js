// Модальді ашу
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden"; // Скроллды өшіру
}

// Модальді жабу
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto"; // Скроллды қайта қосу
}

// Терезе сыртын басқанда жабылуы
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}
function toggleInstructions() {
    var gallery = document.getElementById("instructions-gallery");
    if (gallery.style.display === "none") {
        gallery.style.display = "block";
    } else {
        gallery.style.display = "none";
    }
}