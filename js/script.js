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

var body = document.getElementById('bodyid');
var btndis = document.getElementById('btndis');

var jup = document.getElementById('imgJup2');
var mer = document.getElementById('imgMerc2');
var nep = document.getElementById('imgNep2');
var sat = document.getElementById('imgSat2');
var ven = document.getElementById('imgVen2');

// Fonction image 2 de jupiter
function appearimageJup() {
    jup.style.display = "block";
    btndis.style.display = "block";
    body.style.opacity = "0.5";
    body.style.pointerEvents = "none";
}

// Fonction image 2 de mercure
function appearimageMer() {
    mer.style.display = "block";
    btndis.style.display = "block";
    body.style.opacity = "0.5";
    body.style.pointerEvents = "none";
}

// Fonction image 2 de neptune
function appearimageNep() {
    nep.style.display = "block";
    btndis.style.display = "block";
    body.style.opacity = "0.5";
    body.style.pointerEvents = "none";
}

// Fonction image 2 de saturne
function appearimageSat() {
    sat.style.display = "block";
    btndis.style.display = "block";
    body.style.opacity = "0.5";
    body.style.pointerEvents = "none";
}

// Fonction image 2 de venus
function appearimageVen() {
    ven.style.display = "block";
    btndis.style.display = "block";
    body.style.opacity = "0.5";
    body.style.pointerEvents = "none";
}

function closeJup() {
    jup.style.display = "none";
    mer.style.display = "none";
    nep.style.display = "none";
    sat.style.display = "none";
    ven.style.display = "none";
    btndis.style.display = "none";
    body.style.opacity = "1";
    body.style.pointerEvents = "auto";
}