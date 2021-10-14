
# Observaciones

Maca, felicitaciones por tu trabajo. Tu TP ve muy bonito, me encanta la paleta de colores. El funcionamiento esta muy bien y se nota mucho tu esfuerzo. La mayor observación que te haría es sobre la prolijidad de tu codigo: tenes los conocimientos, pero el codigo esta muuuy desprolijo, tanto en HTML, como CSS y JS, y no le hace justicia a lo que sabés. Sería lo mismo que me presentaras un TP en la facu donde me demostras los conocimientos pero tenés errores de ortografía, sintaxis y gramática: no es una buena impresión. Va a ser algo que impacte tus chances de entrar a una empresa, así que te recomiendo que desde ya le prestes mas atención al tabulado y a la prolijidad en todos tus archivos. 

## Estructura correcta de documento HTML

Te dejé varios comentarios. 

## Respeta el diseño dado

Cumplido salvo por el alto del documento, que no alcanza a cubrir toda la pantalla y no queda bien. Deberia tener un height de 100vh. 

## Respeta el funcionamiento

Cumplido con algunas excepciones (el fondo transparente no funciona si pongo un color de fondo antes, el negativo aparece apenas pongo cualquier otro filtro)

## Responsive funciona correctamente

Cumplido

## Buena estructura de proyecto

Falta un favicon, y el README deberia estar asi, todo en mayusculas. 

## Código bien indentado

Muy desprolijo. Hay herramientas para VSCode que te ayudan a arreglarlo, te recomiendo prettier, pero tambien tene la costumbre de leer tu codigo y dejar el tabulado bien hecho y los espacios correctos entre las cosas. 

## Comentarios que permiten mejorar la legibilidad del código

Impecables. 

## Uso correcto de etiquetas semánticas

Cumplido con una excepcion. Usás como títulos cosas que no lo son, como los h3 en lugar de label. Aquí creo que hay una confusión: un texto **importante** no es lo mismo que un **título**. Un título encabeza secciones o subsecciones. Un texto importante, como el que sirve para cambiar el texto del meme, no tiene necesariamente que tener una etiqueta h1, h2 o h3, que está reservada para los titulos. Pensá en los títulos desde una perspectiva de diseño: cuáles son las secciones y subsecciones de mi web? Cuales son los títulos de esas secciones? En esta web creo yo hay tres secciones principales: la de editar meme, el panel aside de imagen, y el panel aside de texto. La sección de editar meme no tiene título, pero las otras dos sí: La palabra "texto" y la palabra "imagen". Ahí están tus h2. El resto de los textos, aunque sean importantes, **no** son títulos, y no deberían tener etiquetas como h2 o h3. 

## Buenos nombres de clases

Cumplido en general, aunque tenés la tendencia de usar camelCase para los nombres de clases y de IDs. Comentamos en clase que siempre que esté en html, usamos por convención guiones para separar palabras. Es decir, "boton-texto" en lugar de "botonTexto". camelCase, lo usamos por convención para Javascript. 

## Buenos nombres de funciones y variables

Cumplido. 

## Reutilización de estilos

Cumplido, aunque te dejo varios comentarios. 

## Funciones pequeñas

Cumplido. 

## Accesibilidad

Hay algunas decisiones aquí que impactan muy negativamente en la accesibilidad de tu sitio. 

- Le diste "outline: none" a algunos elementos del form. No puedo insistir lo suficiente en lo pernicioso que es esto: le quitaste a tus usuarios la posibilidad de navegar tu web por teclado. Cualquier persona que por dificultades motrices no pueda usar el mouse, no va a poder navegar tu web. No quiero ser dramática, pero es nuestro deber y responsabilidad como desarrolladoras web permitir que todos puedan usar nuestros sitios. Quitar el outline que viene por defecto es como comprar un edificio que tiene rampas para sillas de ruedas y reemplazarlas a todas por escaleras. Nunca, nunca, nunca quitamos el outline **a menos** que lo reemplacemos con una alternativa clara toda vez que un elemento está en foco. Ante la duda, mejor dejar el outline que viene por defecto. 

- Te olvidas de usar label, lo reemplazas por h3, que no es lo mismo

- Falta aria-label en algunos elementos. ¿Como puede saber un usuario que depende del lector de pantalla qué son los elementos que no tienen texto o label? 

## Commits con mensajes adecuados

Cumplido. 

# Nota final: 8

