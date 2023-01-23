// Manipulación del DOM, elementos del DOM guardados en variables
const inputTarea = document.querySelector("input");
const lista = document.querySelector("tbody");
const boton = document.querySelector("button");
const total = document.getElementById("total")
const realizadas = document.getElementById("realizadas")

const tareas = [];

let totalRegistros = 0
debugger
// Asignación del evento click al botón
boton.addEventListener("click", () => {
    // Tomar el valor del input
    let inputValue = inputTarea.value;
    const nuevaTarea = {
        id: Date.now() % 100,
        descripcion: inputValue,
        realizada: false
    };

    // Guardarlo en el arreglo
    tareas.push(nuevaTarea);
    console.table(tareas)
    // Re renderizar la lista de tareas
    renderizarLista();
});

function borrar(idTareaAEliminar) {
    // Eliminar una tarea del arreglo de tareas
    const indiceDeLaTareaAEliminar = tareas.findIndex(
        (tarea) => tarea.id == idTareaAEliminar
    );

    tareas.splice(indiceDeLaTareaAEliminar, 1);

    renderizarLista();
}

function actualizarTarea(idTareaAEliminar) {
    // Eliminar una tarea del arreglo de tareas
    const indiceDeLaTareaAEliminar = tareas.findIndex(
        (tarea) => tarea.id == idTareaAEliminar
    );

    tareas.splice(indiceDeLaTareaAEliminar, 1);

    renderizarLista();
}

function renderizarLista() {
    totalRealizadas = 0
    totalRegistros = 0
    lista.innerHTML = "";
    for (tarea of tareas) {
        const conmutador = document.querySelector('input[type="checkbox"]')

        // Agregamos elementos a la lista con la tarea y un botón para eliminarlas
        lista.innerHTML += `<td>${tarea.id}</td>
                            <td>${tarea.descripcion}</td>
                            <td><input type="checkbox" onclick="marcar('${tarea.id}',this)" 
                            ${tarea.realizada} ? ${conmutador}.click()/></td>
                            <td><button onclick="borrar('${tarea.id}')">X</button></td>`;

        if (tarea.realizada) {
            conmutador.click()
            tarea.realizada = true
            totalRealizadas++
        }
        totalRegistros++
    }

    inputTarea.value = ""
    total.innerHTML = totalRegistros
    realizadas.innerHTML = totalRealizadas
}
// onclick="marcar('${tarea.realizada}')"
function marcar(marcaCheckbox, checkear) {
    const indiceMarcaCheckbox = tareas.findIndex(
        (tarea) => tarea.id == marcaCheckbox)

    //            if (document.querySelector('input[type="checkbox"]').checked) {

    //    if (tareas[indiceMarcaCheckbox].realizada) {
    if (checkear.checked) {
        tareas[indiceMarcaCheckbox].realizada = true;
        totalRealizadas++
    } else {
        tareas[indiceMarcaCheckbox].realizada = false;
        totalRealizadas--
    }
    realizadas.innerHTML = totalRealizadas
}


/*        var checkboxes = document.getElementById("form1").checkbox;
        var cont = 0;

        for (var x = 0; x < checkboxes.length; x++) {
            if (checkboxes[x].checked) {
                cont = cont + 1;
            }
        }
*/
/* Aporte del estudiante Daniel Paz del curso

let agregaID = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
};


tareas.push({
    id: asignaID(100, 1000), .......


        tareas.push({ id: agregaID(100, 1000), .......*/