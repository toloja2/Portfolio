
function homeSection() {
  const homeSection = document.getElementById("homeSection");
  const aboutSection = document.getElementById("aboutSection");
  const seeCvSection = document.getElementById("seeCvSection");
  const contactSection = document.getElementById("contactSection");
  homeSection.style.display = "flex";
  aboutSection.style.display = "none";
  seeCvSection.style.display = "none";
  contactSection.style.display = "none";
  location.reload();
}

function aboutSection() {
  const homeSection = document.getElementById("homeSection");
  const aboutSection = document.getElementById("aboutSection");
  const seeCvSection = document.getElementById("seeCvSection");
  const contactSection = document.getElementById("contactSection");
  homeSection.style.display = "none";
  aboutSection.style.display = "flex";
  seeCvSection.style.display = "none";
  contactSection.style.display = "none";
}

function seeCvSection() {
  const homeSection = document.getElementById("homeSection");
  const aboutSection = document.getElementById("aboutSection");
  const seeCvSection = document.getElementById("seeCvSection");
  const contactSection = document.getElementById("contactSection");
  homeSection.style.display = "none";
  aboutSection.style.display = "none";
  seeCvSection.style.display = "flex";
  contactSection.style.display = "none";
}

function contactSection() {
  const homeSection = document.getElementById("homeSection");
  const aboutSection = document.getElementById("aboutSection");
  const seeCvSection = document.getElementById("seeCvSection");
  const contactSection = document.getElementById("contactSection");
  const formulaire = document.getElementById("formulaire");
  homeSection.style.display = "none";
  aboutSection.style.display = "none";
  seeCvSection.style.display = "none";
  contactSection.style.display = "flex";
  formulaire.reset();
}

function envoyeMessage(){
  const sucessMessage = document.getElementById("sucessMessage");
  const formulaire = document.getElementById("formulaire");
  sucessMessage.style.display = "flex";
  formulaire.style.display = "none";
 
}

function reloadPage(){
  location.reload();
}
