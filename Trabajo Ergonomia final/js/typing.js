/*====================================================
        TYPING.JS
        EFECTO DE ESCRITURA
====================================================*/

const typingElement = document.getElementById("typing");

const professions = [

    "Ingeniero Industrial",

    "Desarrollador Web",

    "Programador Full Stack",

    "Investigador",

    "Docente",

    "Analista de Datos"

];

let professionIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect(){

    const current = professions[professionIndex];

    if(!deleting){

        typingElement.textContent = current.substring(0, letterIndex + 1);

        letterIndex++;

        if(letterIndex === current.length){

            deleting = true;

            setTimeout(typeEffect,1800);

            return;

        }

    }else{

        typingElement.textContent = current.substring(0, letterIndex - 1);

        letterIndex--;

        if(letterIndex === 0){

            deleting = false;

            professionIndex++;

            if(professionIndex >= professions.length){

                professionIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 50 : 90);

}

window.addEventListener("load",typeEffect);