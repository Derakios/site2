function validateAccount() {
    var login = document.forms["form"]["login"];
    var pwd = document.forms["form"]["pwd"];

    if(login.value == "") {
		alert("Erreur authentification");
		login.focus();
		console.log("error login:" + login.value);
		return false;
	}
    else if (pwd.value == "") {
        alert("Erreur authentification");
		pwd.focus();
		console.log("error login:" + pwd.value);
		return false;
    }
}


function validateContact() {
    var nom = document.forms["form"]["Nom"];
    var prenom = document.forms["form"]["Prenom"];
    var mail = document.forms["form"]["EMail"];
    var msg = document.forms["form"]["msgtext"];

    if(nom.value == "") {
        alert("Erreur authentification");
		nom.focus();
		console.log("error nom:" + nom.value);
		return false;
    }
    else if (prenom.value == "") {
        alert("Erreur authentification");
		prenom.focus();
		console.log("error prenom:" + prenom.value);
		return false;
    }
    else if (prenom.mail == "") {
        alert("Erreur authentification");
		mail.focus();
		console.log("error mail:" + mail.value);
		return false;
    }
    else if (msg.value == "") {
        alert("Erreur authentification");
		msg.focus();
		console.log("error msg:" + msg.value);
		return false;
    }

}