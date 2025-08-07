// Fichier JS rattaché à l'ajout d'utilisateurs
//--------------------------------------
// Ajouter un utilisateur (affiche la ligne)

const prenom_user = document.getElementById('prenom_user');
const nom_user = document.getElementById('nom_user');
const btn_ajouter = document.getElementById('btn_ajouter_utilisateur');
const fieldset = document.getElementById('fieldsetPrenomNom');

btn_ajouter.addEventListener("click", ajouterUtilisateur);

/**
 * Ajoute une ligne '{prenom.value} {nom.value} à été ajouté'
 * @param {*} event 
 * @returns 
 */
function ajouterUtilisateur(event) {
    event.preventDefault();

    // Empêche l'ajout si un champ est vide
    if (prenom_user.value.trim() === '' || nom_user.value.trim() === '') {
        alert("Veuillez remplir les deux champs.");
        return;
    }

    const paragraph = document.createElement('p');
    paragraph.textContent = `${prenom_user.value} ${nom_user.value} a été ajouté`;
    fieldset.appendChild(paragraph);

    // Réinitialisation des champs
    prenom_user.value = "";
    nom_user.value = "";
}