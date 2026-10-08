
let listaNombre = [];

const btnAgregar = document.getElementById("btnAgregar");
const btnLimpiar = document.getElementById("btnLimpiar");
const inputNombre = document.getElementById("nombre");
const resultadoTextarea = document.getElementById("resultadoTextarea");

function agregar_ordenar() {
    const valorNombre = inputNombre.value.trim();

    if (valorNombre !== '') {
        listaNombre.push(valorNombre);
        listaNombre.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
        resultadoTextarea.value = listaNombre.join('\n');

        inputNombre.value = '';
        inputNombre.focus();
    }
}

function limpiar() {
    listaNombre = [];
    resultadoTextarea.value = '';
    inputNombre.value = '';
    inputNombre.focus();
}

btnAgregar.addEventListener("click", agregar_ordenar);
btnLimpiar.addEventListener("click", limpiar);

inputNombre.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregar_ordenar();
    }
});
