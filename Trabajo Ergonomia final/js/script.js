/*====================================================
        SCRIPT.JS
        CURRÍCULUM WEB - JHON AXEL RAMOS MUCHA
====================================================*/


/*=========================================
            ELEMENTOS
=========================================*/

const header = document.querySelector("header");

const btnTop = document.getElementById("btnTop");

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".menu a");



/*=========================================
        BARRA DE PROGRESO
=========================================*/

const progressBar = document.createElement("div");

progressBar.classList.add("scroll-indicator");

document.body.appendChild(progressBar);



/*=========================================
            SCROLL
=========================================*/

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const height = document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";



    /* Header */

    if(scrollTop > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }



    /* Botón subir */

    if(scrollTop > 500){

        btnTop.style.display = "block";

    }else{

        btnTop.style.display = "none";

    }



    /* Menú activo */

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if(scrollTop >= top && scrollTop < top + height){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});



/*=========================================
        BOTÓN VOLVER ARRIBA
=========================================*/

btnTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



/*=========================================
        SCROLL SUAVE
=========================================*/

navLinks.forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        const destino = document.querySelector(link.getAttribute("href"));

        destino.scrollIntoView({

            behavior:"smooth"

        });

    });

});



/*=========================================
        ANIMACIONES
=========================================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.15

});



document.querySelectorAll(

".hidden,.fade-left,.fade-right,.zoom"

).forEach(el=>{

    observer.observe(el);

});



/*=========================================
        EFECTO HERO
=========================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("fade");

});



/*=========================================
        PREVENIR DRAG FOTO
=========================================*/

const images=document.querySelectorAll("img");

images.forEach(img=>{

    img.setAttribute("draggable","false");

});