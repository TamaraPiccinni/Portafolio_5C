/* --- ETAPA 4: INTERACTIVIDAD CON EL DOM --- */

/* PASO 1: CAPTURAR LOS ELEMENTOS DEL HTML
  Usamos 'document.getElementById' para buscar en nuestra página los elementos que tienen 
  un 'id' específico y los guardamos dentro de variables (cajas de memoria) llamadas 'const'.
*/

/* Busca el botón "Ver Layout del Manual" y lo guarda en la variable botonAbrir */
const botonAbrir = document.getElementById('btn-diagnostico');

/* Busca el botón "Cerrar Explicación" que está dentro de la ventana y lo guarda en botonCerrar */
const botonCerrar = document.getElementById('btn-cerrar');

/* Busca la etiqueta <dialog> (la ventana oculta) y la guarda en ventanaModal */
const ventanaModal = document.getElementById('modal-info');


/* PASO 2: PROGRAMAR LAS ACCIONES (EVENTOS)
  'addEventListener' significa "Añadir un escuchador de eventos". 
  Le decimos al botón que se quede esperando a que el usuario haga un 'click'.
*/

/* Cuando el usuario hace clic en el botón de abrir, se ejecuta la función de adentro */
botonAbrir.addEventListener('click', function() {
    /* 'showModal()' es una orden nativa que hace aparecer la etiqueta <dialog> por encima de todo */
    ventanaModal.showModal();
});

/* Cuando el usuario hace clic en el botón de cerrar, se ejecuta esta otra función */
botonCerrar.addEventListener('click', function() {
    /* 'close()' es la orden nativa que vuelve a ocultar la etiqueta <dialog> */
    ventanaModal.close();
});