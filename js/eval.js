/// Récupération générale
const form = document.querySelector("form");
const submit = form.lastElementChild;

/// Inputs
const pseudo = document.getElementById("pseudo");
const message = document.getElementById("message");
const color = document.getElementById("color");

/// On test si l'utilisateur reseigne un message afin d'enlever le disabled
message.addEventListener("keyup", () =>{
	if (message.value !== "") {
		submit.disabled = false;
	}
});

// addEventListener sur le submit
form.addEventListener("submit", (evt) => {
    //// On test le champ pseudo, par defaut Chat-Nonyme
    if (pseudo.value === ""){
        pseudo.value = "Chat-Nonyme";
    } else {
        pseudo.value = pseudo.value;
    }

    //// Heure et date
    let date1 = new Date();
    let dateLocale  = date1.toLocaleString('fr-FR',{
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'});
    

    //// Créer un button delete
    let del = document.createElement("button");
    del.innerHTML = "X";
    del.addEventListener ("click", function() {
        let element = del.parentNode.parentNode.removeChild(del.parentNode);
        element.remove();
    });
    
    //// Récupérer champ "ul" et on crée un champ "li"
    let ul = document.querySelector("ul");
    let li = document.createElement("li");

    //// Fixer la couleur choisi par l'internaute 
    li.style.color = color.value;

    //// Insérer les champs pseudo, message et button suppression
    li.innerHTML = "Votre pseudo: " + pseudo.value + "<br>" + "Votre message: "  + message.value + "<br>" + "Posté le: " + dateLocale;
    ul.append(li); 
    let linebreak = document.createElement("br"); // Retour à ligne
    li.appendChild(linebreak); // Application du retour à la ligne
    li.appendChild(del); 

    //// Réinisialiser les champs et focus
    pseudo.value = ""; // vider le "pseudo"
    message.value = ""; // vider le "message"
    submit.disabled = true; // activer disabled dans le button "submit"
    color.value = "#000000"; // Réinisialiser le champ "color", par defaut black
    message.focus(); // focus sur le champ message, car pseudo est falcutatif

    //// stop submit en cas d'erreur
    evt.preventDefault();
});

// Disable right-click
window.addEventListener('contextmenu', function (e) {
    alert('Le clic droit est désactivé');
    e.preventDefault();
  }, false);

// Taper entrée pour stockage
submit.addEventListener("keyup", e =>{
    if (e.key === "Enter"){
        form.submit();
    }
});
