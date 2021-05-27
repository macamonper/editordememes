'use strict';

//ONLOAD
function saludar () {
  console.log('Esta pagina ya se ha cargado');
}

//CAMBIAR ENTRE PESTAÑAS             CAMBIAR ENTRE PESTAÑAS          CAMBIAR ENTRE PESTAÑAS
const solapaImagen = document.getElementById("botonImagen");
const solapaTexto = document.getElementById("botonTexto");

solapaImagen.addEventListener('click',() => {
  document.getElementById("texto").classList.add('ocultar');
  document.getElementById("imagen").classList.remove('ocultar');
  document.getElementById("container-aside").classList.remove('hidden');
  
});

solapaTexto.addEventListener('click',() => {
  document.getElementById("imagen").classList.add('ocultar');
  document.getElementById("texto").classList.remove('ocultar');
  document.getElementById("container-aside").classList.remove('hidden');
  
  
});

//CAMBIAR MODOS                   CAMBIAR MODOS                       CAMBIAR MODOS
const cambiarModo = document.getElementById("switchMode");


cambiarModo.addEventListener('click',() => {
  document.body.classList.toggle('claro');
  cambiarModo.classList.toggle('active');
});


//CERRAR SOLAPA DE DISEÑO            CERRAR SOLAPA DE DISEÑO           CERRAR SOLAPA DE DISEÑO
const cierre= document.getElementById("cruz");

cierre.addEventListener("click",() => {
  document.getElementById("container-aside").classList.add('hidden');
});

//CARGAR IMAGEN DE MEME              CARGAR IMAGEN DE MEME           CARGAR IMAGEN DE MEME
const meme = document.getElementById("meme");
const url = document.getElementById("link");

function cambiarUrl(){
  meme.style.backgroundImage=`url(${url.value})`;
};

url.addEventListener("change",cambiarUrl);

//CAMBIAR COLOR DE FONDO DE MEME      CAMBIAR COLOR DE FONDO DE MEME   CAMBIAR COLOR DE FONDO DE MEME
const valorColor = document.getElementById("color");

function cambiarcolor( ){
 
  document.getElementById("meme").style.backgroundColor =`${valorColor.value}`;
};

color.addEventListener('input', cambiarcolor);

//    CAMBIAR VALOR DE COLOR EN SPAN                       CAMBIAR VALOR DE COLOR EN SPAN          

function blendText() {
  document.getElementById("textColor").innerHTML =`${valorColor.value}`;
};

valorColor.addEventListener("input",blendText);

// CAMBIAR MEZLCA FONDO
const modos = document.getElementById("mezclaFondo");

  function mezcla(modos) {
    switch (modos.value){
      case "lighten": 
      meme.style.backgroundBlendMode="lighten";
      break;
      case "darken": 
      meme.style.backgroundBlendMode ="darken";
      break;
      case "difference": 
      meme.style.backgroundBlendMode ="difference";
      break;
      case "luminosity":
         meme.style.backgroundBlendMode = "luminosity";
      break;
      case "multiply": 
      meme.style.backgroundBlendMode = "multiply";
      break;
      default:
        modos.value= "unset";
    }
  }
modos.addEventListener("change",mezcla);
//

//TEXTO                       TEXTO                             TEXTO           TEXTO

//

//CAMBIAR TOP TEXT                  CAMBIAR TOP TEXT                  CAMBIAR TOP TEXT
const topText = document.querySelector(".top-text");
const InputTopText = document.getElementById("top-text-input");

InputTopText.addEventListener("input",() =>{
  topText.innerText=InputTopText.value;
});

//CAMBIAR BOTTOM TEXT             CAMBIAR BOTTOM TEXT                 CAMBIAR BOTTOM TEXT

const bottomText = document.querySelector(".bottom-text");
const InputBottomText = document.getElementById("bottom-text-input");

InputBottomText.addEventListener("input",() =>{
  bottomText.innerText=InputBottomText.value;
});

//QUITAR TEXTO                QUITAR TEXTO                  QUITAR TEXTO
const checkboxTop = document.getElementById("textoSuperior");
const checkboxBottom = document.getElementById("textoInferior");
const divTopText= document.querySelector(".top-text");
const divBottomText = document.querySelector(".bottom-text");
const em = Number(46)

checkboxTop.addEventListener( 'change', function() {
  if(checkboxTop.checked) {
    topText.classList.toggle('ocultar');
  } 
  else{
    topText.classList.toggle('ocultar')
  }
});

checkboxBottom.addEventListener( 'change', function() {
if(checkboxBottom.checked) {
  bottomText.classList.toggle('ocultar');
} 
else{
  bottomText.classList.toggle('ocultar');
}
});

//CAMBIAR FUENTE                CAMBIAR FUENTE                    CAMBIAR FUENTE 
const selectorFuente = document.getElementById("font-selector");

selectorFuente.addEventListener("change", () =>{
  topText.style.fontFamily =`${selectorFuente.value}` ;
  bottomText.style.fontFamily =`${selectorFuente.value}`;
});

//CAMBIAR TAMAÑO DE FUENTE            CAMBIAR TAMAÑO DE FUENTE        CAMBIAR TAMAÑO DE FUENTE

const tamanioDeFuente= document.getElementById("sizeValue");

tamanioDeFuente.addEventListener("change",()=>{
 topText.style.fontSize = `${tamanioDeFuente.value}px`;
 bottomText.style.fontSize= `${tamanioDeFuente.value}px`;
});

//CAMBIAR ALINEACION          CAMBIAR ALINEACION                CAMBIAR ALINEACION

const alignDer = document.getElementById("right");
const alignCentro= document.getElementById("center");
const alignIzq = document.getElementById("left");


alignDer.addEventListener("click",()=>{
  topText.style.justifyContent ="flex-end";
  bottomText.style.justifyContent="flex-end";
});
alignCentro.addEventListener("click",()=>{
  topText.style.justifyContent ="center";
  bottomText.style.justifyContent="center";
});
alignIzq.addEventListener("click",()=>{
  topText.style.justifyContent ="left";
  bottomText.style.justifyContent="left";
});

//CAMBIAR COLOR DE LETRA            CAMBIAR COLOR DE LETRA        CAMBIAR COLOR DE LETRA
const fontColor = document.getElementById ("colorTexto");

colorTexto.addEventListener("input", () =>{
  topText.style.color = `${fontColor.value}`;
  bottomText.style.color =`${fontColor.value}`;
});

//CAMBIAR COLOR DE FONDO DE TEXTO                 CAMBIAR COLOR DE FONDO DE TEXTO

const colorFondoTexto = document.getElementById ("colorFondoTexto");


colorFondoTexto.addEventListener("input",() =>{

  divTopText.style.backgroundColor = `${colorFondoTexto.value}`;
  divBottomText.style.backgroundColor = `${colorFondoTexto.value}`;
});

//FONDO TRANSPARENTE                            FONDO TRANSPARENTE

const fondoTransparente = document.getElementById("fondoTransparente");

fondoTransparente.addEventListener("change",() =>{

  if (fondoTransparente.checked){
    divTopText.style.backgroundColor = `${valorColor.value}`;
    divBottomText.style.backgroundColor = `${valorColor.value}`;
  }
  else {
    divTopText.style.backgroundColor = `${colorFondoTexto.value}`;
    divBottomText.style.backgroundColor = `${colorFondoTexto.value}`;
  }

});

// CONTORNO                               CONTORNO                         CONTORNO
const none= document.getElementById("none");
const blanco = document.getElementById("blanco");
const negro = document.getElementById("negro"); 
const pixel = Number("2")

none.addEventListener("click",() =>{
  topText.style.textShadow = "none";
  bottomText.style.textShadow ="none";
});
blanco.addEventListener("click", () =>{
  topText.style.textShadow = `${pixel}px ${pixel}px ${pixel}px white`;
  bottomText.style.textShadow = `${pixel}px ${pixel}px ${pixel}px white`;
});

negro.addEventListener("click", () =>{
  topText.style.textShadow = `${pixel}px ${pixel}px ${pixel}px black`;
  bottomText.style.textShadow = `${pixel}px ${pixel}px ${pixel}px black`;
});

//ESPACIADO                       ESPACIADO                                ESPACIADO
const espaciado = document.getElementById("espaciado");

espaciado.addEventListener("change",() =>{
  divTopText.style.padding = `${espaciado.value}px`;
  divBottomText.style.padding = `${espaciado.value}px`;
});

//INTERLINEADO                  INTERLINEADO                              INTERLINEADO
const interlineado = document.getElementById("interlineado");

interlineado.addEventListener("change",() =>{
  topText.style.lineHeight = `${interlineado.value}`;
  bottomText.style.lineHeight = `${interlineado.value}`;

});
