'use strict';

//ONLOAD
function saludar () {
  console.log('Esta pagina ya se ha cargado');
}
//CERRAR SOLAPA DE DISEÑO            CERRAR SOLAPA DE DISEÑO           CERRAR SOLAPA DE DISEÑO
const cierre= document.getElementById("cruz");

cierre.addEventListener("click",() => {
  document.getElementById("container-aside").classList.add('ocultar');
});

//CAMBIAR ENTRE PESTAÑAS             CAMBIAR ENTRE PESTAÑAS          CAMBIAR ENTRE PESTAÑAS
const solapaImagen = document.getElementById("botonImagen");
const solapaTexto = document.getElementById("botonTexto");

solapaImagen.addEventListener('click',() => {
  document.getElementById("texto").classList.add('ocultar');
  document.getElementById("imagen").classList.remove('ocultar');
  document.getElementById("container-aside").classList.remove('ocultar');

});

solapaTexto.addEventListener('click',() => {
  document.getElementById("imagen").classList.add('ocultar');
  document.getElementById("texto").classList.remove('ocultar');
  document.getElementById("container-aside").classList.remove('ocultar');


});


//CAMBIAR MODOS                   CAMBIAR MODOS                       CAMBIAR MODOS
const cambiarModo = document.getElementById("switchMode");


cambiarModo.addEventListener('click',() => {
  document.body.classList.toggle('claro');
  cambiarModo.classList.toggle('active');
});

//CAMBIAR COLOR DE FONDO DE MEME      CAMBIAR COLOR DE FONDO DE MEME   CAMBIAR COLOR DE FONDO DE MEME
const valorColor = document.getElementById("color");

function cambiarcolor( ){
 
  document.getElementById("meme").style.backgroundColor =`${valorColor.value}`;
};

color.addEventListener('input', cambiarcolor);

//CAMBIAR VALOR DE COLOR              CAMBIAR VALOR DE COLOR           CAMBIAR VALOR DE COLOR 

function blendText() {
  document.getElementById("textColor").innerHTML =`${valorColor.value}`;
};

valorColor.addEventListener("input",blendText);


//CARGAR IMAGEN DE MEME              CARGAR IMAGEN DE MEME           CARGAR IMAGEN DE MEME
const meme = document.getElementById("meme");
const url = document.getElementById("link");

function cambiarUrl(){
  meme.style.backgroundImage=`url(${url.value})`;
};

url.addEventListener("change",cambiarUrl);

//CAMBIAR TOP TEXT                  CAMBIAR TOP TEXT                  CAMBIAR TOP TEXT
const topText = document.querySelector(".primerTexto");
const InputTopText = document.getElementById("top-text-input");

InputTopText.addEventListener("input",() =>{
  topText.innerText=InputTopText.value;
});

//CAMBIAR BOTTOM TEXT             CAMBIAR BOTTOM TEXT                 CAMBIAR BOTTOM TEXT

const bottomText = document.querySelector(".segundoTexto");
const InputBottomText = document.getElementById("bottom-text-input");

InputBottomText.addEventListener("input",() =>{
  bottomText.innerText=InputBottomText.value;
});
//QUITAR TEXTO
const checkboxTop = document.getElementById("textoSuperior");
const checkboxBottom = document.getElementById("textoInferior");
const divTopText= document.querySelector(".top-text");
const divBottomText = document.querySelector(".bottom-text");

checkboxTop.addEventListener( 'change', function() {
  if(checkboxTop.checked) {
    meme.style.height="23em";
    divTopText.classList.toggle('ocultar');
    topText.classList.toggle('ocultar')
  } 
  else{
    divTopText.classList.toggle('ocultar');
    topText.classList.toggle('ocultar')
  
  }
});
 checkboxBottom.addEventListener( 'change', function() {
  if(checkboxBottom.checked) {
    meme.style.height="23em";
    divBottomText.classList.toggle('ocultar');
    bottomText.classList.toggle('ocultar')
  } 
  else{
    divBottomText.classList.toggle('ocultar');
    bottomText.classList.toggle('ocultar')
  }
});
//ESTO NO FUNCIONA
if (checkboxTop.checked & checkboxBottom.checked){
  meme.style.height="30em";

}
//


