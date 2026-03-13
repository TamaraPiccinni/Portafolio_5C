/* --- ETAPA 4: MANIPULACIÓN DEL DOM E INTERACTIVIDAD --- */

/* PASO 1: INSTANCIAR REFERENCIAS A LOS NODOS DEL DOM
   Utilizamos el método getElementById() perteneciente al objeto global 'document'.
   Este método recibe como parámetro un string (cadena de texto) con el valor del atributo 'id'
   del elemento HTML, y retorna la referencia a ese nodo en el DOM.
   Guardamos estas referencias declarando constantes (const) para asegurar que la referencia en memoria no sea reasignada.
*/

const botonAbrir = document.getElementById('btn-diagnostico');
const botonCerrar = document.getElementById('btn-cerrar');
const ventanaModal = document.getElementById('modal-info');


/* PASO 2: REGISTRO DE MANEJADORES DE EVENTOS (EVENT LISTENERS)
   Invocamos el método addEventListener() sobre los nodos de los botones.
   Este método recibe dos parámetros obligatorios:
   1. El tipo de evento a escuchar (el string 'click').
   2. Una función 'callback' (función anónima) que contiene el bloque de instrucciones 
      que se ejecutará o "disparará" cuando el evento ocurra.
*/

botonAbrir.addEventListener('click', function() {
    /* Invocamos el método nativo showModal() perteneciente a la API del elemento HTMLDialogElement.
       Este método renderiza la etiqueta <dialog> en la capa superior (top layer) del navegador,
       bloqueando la interacción con el resto del documento principal (comportamiento modal). */
    ventanaModal.showModal();
});

botonCerrar.addEventListener('click', function() {
    /* Invocamos el método nativo close() sobre el nodo del dialog.
       Este método cambia el estado del elemento a oculto y devuelve el foco al documento. */
    ventanaModal.close();
});

/* --- ETAPA 7: LÓGICA DEL MODO OSCURO (ESTILO SUTIL) --- */

/* 1. Capturamos el nodo del botón flotante */
const botonTema = document.getElementById('btn-tema');

/* 2. Escuchamos el evento de clic */
botonTema.addEventListener('click', function() {
    
    /* El método toggle inyecta o retira la clase 'modo-oscuro' del body */
    document.body.classList.toggle('modo-oscuro');
    
    /* Lógica Condicional (If/Else): Evaluamos qué ícono mostrar */
    if (document.body.classList.contains('modo-oscuro')) {
        /* Si el modo oscuro está activo, cambiamos el texto por un sol */
        botonTema.textContent = '☀'; 
    } else {
        /* Si el modo oscuro se apagó, volvemos a la luna */
        botonTema.textContent = '☽'; 
    }
});
