'use strict';

//ONLOAD
// no uses funciones con la sintaxis vieja, ni dejes console log en entregas
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
// deja espacio antes y despues del =
const cierre= document.getElementById("cruz");

// deja espacio entre la coma y el inicio de la funcion
cierre.addEventListener("click",() => {
  document.getElementById("container-aside").classList.add('hidden');
});

//DESCARGA                          DESCARGA                            DESCARGA
const descarga = document.getElementById("download");
const contenedor = document.querySelector(".meme-container");


descarga.addEventListener ("click", () =>{
  // no dejes console log en entregas
  console.log ("entre a la funcion");
  domtoimage.toBlob(contenedor).then (function(blob){
    window.saveAs(blob, 'meme.png');
  });
});

//FUNCIONALIDAD SOLAPAS DE DISEÑOS                   FUNCIONALIDAD SOLAPAS DE DISEÑOS


//IMAGEN                             IMAGEN                          IMAGEN


//URL IMAGEN DE MEME              URL IMAGEN DE MEME           URL IMAGEN DE MEME
const meme = document.getElementById("meme");
const url = document.getElementById("link");

// usa funciones flecha siempre 
function cambiarUrl(){
  meme.style.backgroundImage=`url(${url.value})`;
};

url.addEventListener("change",cambiarUrl);

//SUBIR ARCHIVO                 SUBIR ARCHIVO               SUBIR ARCHIVO

const inpFile = document.getElementById("archivo");

inpFile.addEventListener("change", function(){
    const file = this.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function(){
        meme.style.backgroundImage = `url(${this.result})`;
    })
    reader.readAsDataURL(file); 
});

//CAMBIAR COLOR DE FONDO DE MEME                           CAMBIAR COLOR DE FONDO DE MEME
const valorColor = document.getElementById("color");

function cambiarcolor( ){
//  innecesaria la interpolacion aca
  document.getElementById("meme").style.backgroundColor =`${valorColor.value}`;
};

color.addEventListener('input', cambiarcolor);

//    CAMBIAR VALOR DE COLOR EN SPAN                       CAMBIAR VALOR DE COLOR EN SPAN          

function blendText() {
  // innecesaria la interpolacion
  document.getElementById("textColor").innerHTML =`${valorColor.value}`;
};

valorColor.addEventListener("input",blendText);

//  CAMBIAR MEZLCA FONDO           CAMBIAR MEZLCA FONDO         CAMBIAR MEZLCA FONDO
const modos = document.getElementById("mezclaFondo");

// deja espacios en tus funciones: () => {
modos.addEventListener("change", ()=>{
  meme.style.backgroundBlendMode= modos.value;
  // no dejes console.log
  console.log (modos.value)
});


//    FILTROS                           FILTROS                             FILTROS

const brillo = document.getElementById("brillo");
const opacidad = document.getElementById("opacidad");
const contraste = document.getElementById("contraste");
const desenfoque = document.getElementById("desenfoque");
const escalaGris= document.getElementById("escalaGrises");
const sepia = document.getElementById("sepia");
const hue = document.getElementById("hue");
const saturado = document.getElementById("saturado");
const negativo = document.getElementById("negativo");

const filtros = () =>{
meme.style.filter = `brightness(${brillo.value}) opacity(${opacidad.value}) contrast(${contraste.value}%) blur(${desenfoque.value}px)
grayscale(${escalaGris.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturado.value}%) invert(${negativo.value})`;

}

brillo.addEventListener("change", filtros);
opacidad.addEventListener("change", filtros);
contraste.addEventListener("change", filtros);
desenfoque.addEventListener("change", filtros);
escalaGris.addEventListener("change", filtros);
sepia.addEventListener("change", filtros);
hue.addEventListener("change", filtros);
saturado.addEventListener("change", filtros);
negativo.addEventListener("change", filtros);


//  RESTABLECER FILTROS           RESTABLECER FILTROS                 RESTABLECER FILTROS

const restablecer = document.getElementById("reset");

restablecer.addEventListener("click", () =>{
  brillo.value = 1;
  opacidad.value = 1;
  contraste.value = 100;
  desenfoque.value = 0;
  escalaGris.value = 0;
  sepia.value = 0;
  hue.value = 0;
  saturado.value = 100;
  negativo.value = 0;
  filtros()
});


//

//TEXTO                    TEXTO                   TEXTO                    TEXTO

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

//QUITAR TEXTO                    QUITAR TEXTO                        QUITAR TEXTO
const checkboxTop = document.getElementById("textoSuperior");
const checkboxBottom = document.getElementById("textoInferior");
const divTopText= document.querySelector(".top-text");
const divBottomText = document.querySelector(".bottom-text");


checkboxTop.addEventListener( 'change', function() {
  if(checkboxTop.checked) {
    topText.classList.toggle('ocultar');
  } 
  else{
    topText.classList.toggle('ocultar')
  }
});

checkboxBottom.addEventListener( 'change', function() {
  // ojo con el tabulado
if(checkboxBottom.checked) {
  bottomText.classList.toggle('ocultar');
} 
else{
  bottomText.classList.toggle('ocultar');
}
});

//CAMBIAR FUENTE                     CAMBIAR FUENTE                    CAMBIAR FUENTE 
const selectorFuente = document.getElementById("font-selector");

selectorFuente.addEventListener("change", () =>{
  // interpolacion innecesaria
  topText.style.fontFamily =`${selectorFuente.value}` ;
  bottomText.style.fontFamily =`${selectorFuente.value}`;
});

//CAMBIAR TAMAÑO DE FUENTE            CAMBIAR TAMAÑO DE FUENTE        CAMBIAR TAMAÑO DE FUENTE

const tamanioDeFuente= document.getElementById("sizeValue");

tamanioDeFuente.addEventListener("change",()=>{
 topText.style.fontSize = `${tamanioDeFuente.value}px`;
 bottomText.style.fontSize= `${tamanioDeFuente.value}px`;
});

//CAMBIAR ALINEACION                  CAMBIAR ALINEACION               CAMBIAR ALINEACION

const alignDer = document.getElementById("right");
const alignCentro= document.getElementById("center");
const alignIzq = document.getElementById("left");


// usa espacios! se ve mucho mejor y es mas facil para el lector 
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
  // interpolacion innecesaria
  topText.style.color = `${fontColor.value}`;
  bottomText.style.color =`${fontColor.value}`;
});

//  CAMBIAR COLOR DE FONDO DE TEXTO                       CAMBIAR COLOR DE FONDO DE TEXTO

const colorFondoTexto = document.getElementById ("colorFondoTexto");


colorFondoTexto.addEventListener("input",() =>{
// interpolacion innecesaria
  divTopText.style.backgroundColor = `${colorFondoTexto.value}`;
  divBottomText.style.backgroundColor = `${colorFondoTexto.value}`;
});

//FONDO TRANSPARENTE                 FONDO TRANSPARENTE                FONDO TRANSPARENTE

const fondoTransparente = document.getElementById("fondoTransparente");

fondoTransparente.addEventListener("change",() =>{
// interpolacion innecesaria
  if (fondoTransparente.checked){
    divTopText.style.backgroundColor = `${valorColor.value}`;
    divBottomText.style.backgroundColor = `${valorColor.value}`;
  }
  else {
    divTopText.style.backgroundColor = `${colorFondoTexto.value}`;
    divBottomText.style.backgroundColor = `${colorFondoTexto.value}`;
  }

});

//      CONTORNO                        CONTORNO                     CONTORNO
const none= document.getElementById("none");
const blanco = document.getElementById("blanco");
const negro = document.getElementById("negro"); 

// por que no usas el numero 2 y listo?? 
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

//    ESPACIADO                       ESPACIADO                                ESPACIADO
const espaciado = document.getElementById("espaciado");

espaciado.addEventListener("change",() =>{
  divTopText.style.padding = `${espaciado.value}px`;
  divBottomText.style.padding = `${espaciado.value}px`;
});

//  INTERLINEADO                      INTERLINEADO                         INTERLINEADO
const interlineado = document.getElementById("interlineado");

interlineado.addEventListener("change",() =>{
  // interpolacion innecesaria
  topText.style.lineHeight = `${interlineado.value}`;
  bottomText.style.lineHeight = `${interlineado.value}`;
});
