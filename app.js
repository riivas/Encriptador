let textoPlano = document.querySelector(".texto-plano");
let textoCifrado = document.querySelector(".mensaje");
const COPY = document.querySelector("#copiar");
const CIFRAR = document.querySelector("#encriptar");
const DESCIFRAR = document.querySelector("#desencriptar");
const noTexto1 = document.getElementById("no-texto1");
const noTexto2 = document.getElementById("no-texto2");
const imagen = document.getElementById("imagen");
const seccion = document.querySelector(".mensajeTrabajado");


//const regEx =/ [^A-Z(áéíóú)\s]*/g;

//Funciones para encriptar y desencriptar

function encriptar(mensajeEncriptar){
    const letras =  [  "e",    "i"  , "a" ,  "o"  ,   "u" ];
    const codigos = ["enter", "imes", "ai", "ober", "ufat"];


    mensajeEncriptar = mensajeEncriptar.toLowerCase();

    for(let cont = 0; cont < letras.length; cont++){
        if(mensajeEncriptar.includes(letras[cont])){
            mensajeEncriptar = mensajeEncriptar.replaceAll(letras[cont], codigos[cont]);
        }
    }

    return mensajeEncriptar;
}

function desencriptar(mensajeDesencriptar){
    const letras =  [ "a",   "e"  ,   "i" ,  "o"  ,   "u" ];
    const codigos = ["ai", "enter", "imes", "ober", "ufat"];

    mensajeDesencriptar = mensajeDesencriptar.toLowerCase();

    for(let cont = 0; cont < codigos.length; cont++){
        if(mensajeDesencriptar.includes(codigos[cont])){
            mensajeDesencriptar = mensajeDesencriptar.replaceAll(codigos[cont], letras[cont]);
        }
    }

    return mensajeDesencriptar;
}

//Funciones para los botones correspondientes

function btnEncrypt(){
    let mensaje = encriptar(textoPlano.value);
    textoCifrado.value = mensaje; 
}

function btnDecrypt(){
    let mensaje = desencriptar(textoPlano.value);
    textoCifrado.value = mensaje; 
}

//Funcionamiento del boton copiar

COPY.addEventListener('click', function(){
    navigator.clipboard.writeText(textoCifrado.value);
})

//Limpiar la imagen del textArea 

CIFRAR.addEventListener('click',  function(){
    textoCifrado.removeAttribute("hidden");
    COPY.removeAttribute("hidden");
    noTexto1.setAttribute("hidden", true);
    noTexto2.setAttribute("hidden", true);
    imagen.setAttribute("hidden", true);
    seccion.classList.remove("mensajeTrabajado");
    
})


DESCIFRAR.addEventListener('click', function(){
    COPY.removeAttribute("hidden");
    textoCifrado.removeAttribute("hidden");
    COPY.removeAttribute("hidden");
    noTexto1.setAttribute("hidden", true);
    noTexto2.setAttribute("hidden", true);
    imagen.setAttribute("hidden", true);
    seccion.classList.remove("mensajeTrabajado");
})