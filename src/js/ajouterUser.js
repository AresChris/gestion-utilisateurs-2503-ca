// Fichier JS rattaché à l'ajout d'utilisateurs
//--------------------------------------
// Ajouter un utilisateur (affiche la ligne)

const prenom_user = document.getElementById('prenom_user');
const nom_user = document.getElementById('nom_user');
const btn_ajouter = document.getElementById('btn_ajouter_utilisateur');
const fieldset = document.getElementById('fieldsetPrenomNom');
const myForm = document.getElementById('myForm');
const myName = document.getElementById('prenom_user');
const surname = document.getElementById('nom_user');
const myBirthDate = document.getElementById('birthdate');
const myPhone = document.getElementById('phone_number');
const myPassword1 = document.getElementById('password1');
const myPassword2 = document.getElementById('password2');


btn_ajouter.addEventListener("click", ajouterUtilisateur);

/**
 * Ajoute une ligne '{prenom.value} {nom.value} à été ajouté'
 * @param {*} event 
 * @returns 
 */
function ajouterUtilisateur(event) {
    event.preventDefault();

    // controles de saisies
    const isNameValid = validateName(myName.value, surname.value);
    const isDateValid = validateBirthDate(myBirthDate.value);
    const isNumberValid = validatePhoneNumber(myPhone.value);
    const isPasswordValid = validatePassword(myPassword1.value, myPassword2.value);

    if(isNameValid && isNumberValid && isDateValid && isPasswordValid) {
        const paragraph = document.createElement('p');
        paragraph.textContent = `${prenom_user.value} ${nom_user.value} a été ajouté`;
        fieldset.appendChild(paragraph);
    } 
}


//-------------------------------------------------------------
/** 
 * Valide un nom
 * 3 caractères minimum, uniquement des lettres _name 
 * @param {string} _name le nom à valider
 * @returns {Boolean} VRAI si le nom est valide, FAUX sinon
 */
function validateName(_name, _surname) {
    let regexName = /^[A-Za-z]{3,}$/;
    _name = _name.trim();
    _surname = _surname.trim();
   
    if(regexName.test(_name) && regexName.test(_surname)){
        return true;
    } else {
        return false;
    }
    
}

/**
 * Contrôle la validité d'une date
 * @param {String} _birthDate la date à vérifier
 * @returns {Boolean} 
 */
function validateBirthDate(_birthDate) {
    console.log(_birthDate);
    try {
        const dateTest = new Date(_birthDate);
        console.log(dateTest);

        if(isNaN(dateTest)) {
            throw new Error();
        } 
        return true;
    } catch(error) {
        alert('Date non valide');
        return false;
    }   
}

/**
 * Valide un numéro de téléphone
 * 0607080910
 * +33607080910
 * @param {*} _phoneNumber 
 * @returns 
 */
function validatePhoneNumber(_phoneNumber) {
    let regexNumber = /^0[0-7|9]\d{8}$/;

    return regexNumber.test(_phoneNumber);
}

/**
 * Valider que les 2 mots de passe sont identiques 
 * ET
 * longueur de 12 caractères minimum
 * au moins 1 majuscule
 * au moins 1 minuscule
 * au moins 1 chiffre
 * @param {*} _password1 
 * @param {*} _password2 
 * @returns 
 */
function validatePassword(_password1, _password2) {
    let regexUpperCase = /[A-Z]/;
    let regexLowerCase = /[a-z]/;
    let regexDigit = /[0-9]/;
    let regexNumberOfCaracteres =/^.{12,}$/

    if(_password1 === '' || _password2 === ''){
        alert('Veuillez saisir un mot de passe')
        return false;
    }

    if(_password1 != _password2){
        alert('Les mots de passe ne se ressemblent pas')
        return false;
    }
    else {
        if(!regexUpperCase.test(_password1)){
            alert('Au moins une lettre majuscule est necessaire dans le mot de passe !');
        return false;
        } else if( !regexLowerCase.test(_password1)) {
            alert('Au moins une lettre minuscule est necessaire dans le mot de passe !');
        return false;
        } else if(!regexDigit.test(_password1)) {
            alert('Au moins un chiffre necessaire dans le mot de passe !');
        return false;
        } else if( !regexNumberOfCaracteres.test(_password1)){
            alert('Au moins 12 caractères sont necessaires dans le mot de passe !');
        return false;
        }
    }
    // on considère que le mot de passe est OK
    return true;
}

/**
 * Passwords test
 * 
 * 1Trouvabl312 = true
 * 1trouvabl3 = false // pas de majuscule
 * 1Trouvabl3 = false // 12 caractères minimum
 * Introuvable = false // au moins 1 chiffre necessaire
 */