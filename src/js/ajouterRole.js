// Fichier JS rattaché à l'ajout de rôle
//---------------------------------------
const ajouter_description = document.getElementById('ajouter_description');
ajouter_description.addEventListener("click", ajouterDescription);

/**
 * Ajoute un textfield dans 'ajouter rôle'
 * @param {*} event 
 */
function ajouterDescription(event){
    event.preventDefault();
    const label = document.createElement('label');
    label.textContent = "";
    const textarea = document.createElement('textarea');
    zone.appendChild(label);
    zone.appendChild(textarea);
    zone.appendChild(document.createElement("br"));
}



