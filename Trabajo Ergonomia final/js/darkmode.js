/*====================================================
        DARKMODE.JS
        MODO OSCURO
====================================================*/

const themeButton = document.querySelector(".darkButton");

const body = document.body;

/*=========================================
        CARGAR TEMA GUARDADO
=========================================*/

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

    body.classList.add("dark-mode");

    if(themeButton){

        themeButton.innerHTML='<i class="fas fa-sun"></i>';

    }

}else{

    if(themeButton){

        themeButton.innerHTML='<i class="fas fa-moon"></i>';

    }

}

/*=========================================
        CAMBIAR TEMA
=========================================*/

if(themeButton){

themeButton.addEventListener("click",()=>{

    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        themeButton.innerHTML='<i class="fas fa-sun"></i>';

    }else{

        localStorage.setItem("theme","light");

        themeButton.innerHTML='<i class="fas fa-moon"></i>';

    }

});

}