
let listaNombre = [];

const btnAgregar = document.getElementById("btnAgregar");
const btnLimpiar = document.getElementById("btnLimpiar");
const nombre = document.getElementById("nombre");
const resultadoTextarea = document.getElementById("resultadoTextarea");

function agregar_ordenar () {
    const nombre = nombre.value.trim();
    if (nombre !== '') {
        listaNombre.push(nombre);
        listaNombre.sort((a, b) => a.localeCompare(b));
        resultadoTextarea.value = listaNombre.join('\n');
        
        nombre.value = '';
        nombre.focus();
    }
}

function limpiar() {
    listaNombre = [];
    resultadoTextarea.value = '';
    nombre.value = '';
    nombre.focus();
}

btnAgregar.addEventListener("click", agregar_ordenar);
btnLimpiar.addEventListener("click", limpiar);

nombre.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregar_ordenar();
    }
});
