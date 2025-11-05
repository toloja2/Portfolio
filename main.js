// SCROLL VERS AUTRE CHOSES
function vers(id, type) {
    const element = document.getElementById(id)
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: type
        })
    }
}

// VOIR MENU CACHE
const bouttonMenu = document.getElementById('bouttonMenu');
const navList = document.querySelector('nav>ul');
bouttonMenu.addEventListener("click",()=>{
    navList.classList.toggle('offancaveMenu');
    bouttonMenu.firstChild.classList.toggle("fa-close");
    document.addEventListener("click", (e) => {
        if (!bouttonMenu.contains(e.target)) {
            navList.classList.remove("offancaveMenu");
            bouttonMenu.firstChild.classList.replace("fa-close", "fa-bars")
        }
})})

// Anymation
const ajoutAnimation = document.getElementById('ajoutAnimation');
const styleKeyframes = document.createElement("style")
ajoutAnimation.addEventListener('click',()=>{
        styleKeyframes.textContent = `@keyframes animation1 {
    0% {
        width: 0;
        margin-left: -5%;
    }

    100% {
        width: 85%;
    }
}

@keyframes animation2 {
    0% {
        width: 0;
        margin-left: -5%;
    }

    100% {
        width: 65%;
    }
}

@keyframes animation3 {
    0% {
        width: 0;
        margin-left: -5%;
    }

    100% {
        width: 60%;
    }
}`
    document.body.appendChild(styleKeyframes)
    document.getElementById('aboutSection').addEventListener("mouseleave",()=>{
         styleKeyframes.textContent = '';
    })
})

// VOIR PLUS A PROPOS DE MOI
const voirPlus = document.getElementById("voirPlus");
const progressBar2 = document.getElementById("progressBar2");

voirPlus.addEventListener("click",()=>{
  voirPlus.textContent = voirPlus.textContent === 'Voir Plus' ? 'Voir Moins' : 'Voir Plus' ;
   progressBar2.style.display = progressBar2.style.display === 'none' ? 'block' : 'none';
})
