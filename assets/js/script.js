const inputTarea = document.querySelector("input");
const lista = document.querySelector("tbody");
const boton = document.querySelector("button");
const total = document.getElementById("total")
const realizadas = document.getElementById("realizadas")

const tareas = [
    {
        id: 15,
        descripcion: "Hacer mercado",
        realizada: false
    },
    {
        id: 20,
        descripcion: "Estudiar para la prueba",
        realizada: false
    },
    {
        id: 18,
        descripcion: "Sacar a pasear a Tobby",
        realizada: false
    },
];
document.querySelector("main").style.height = "400px"
for (const nuevaTarea of tareas) {
    lista.insertRow(-1).innerHTML = `<td>${nuevaTarea.id}</td>
                            <td>${nuevaTarea.descripcion}</td>
                            <td><input class="myCheck" type="checkbox" onclick="marcar('${nuevaTarea.id}',this)"/></td>
                            <td><button onclick="borrar('${nuevaTarea.id}')">X</button></td>`;
}

totalRealizadas = 0
realizadas.innerHTML = totalRealizadas

totalRegistros = 3
total.innerHTML = totalRegistros

boton.addEventListener("click", () => {
    let inputValue = inputTarea.value;
    if (inputValue === "") { return }
    document.querySelector("main").style.height = "400px"
    const nuevaTarea = {
        id: Date.now() % 100,
        descripcion: inputValue,
        realizada: false
    };
    tareas.push(nuevaTarea);
    console.table(tareas)
//    totalRealizadas = 0
    lista.insertRow(-1).innerHTML = `<td>${nuevaTarea.id}</td>
                            <td>${nuevaTarea.descripcion}</td>
                            <td><input class="myCheck" type="checkbox" onclick="marcar('${nuevaTarea.id}',this)"/></td>
                            <td><button onclick="borrar('${nuevaTarea.id}')">X</button></td>`;
    totalRegistros++
    total.innerHTML = totalRegistros
    realizadas.innerHTML = totalRealizadas
    inputTarea.value = "";
});

function borrar(idTareaAEliminar, checkear) {
    const indiceDeLaTareaAEliminar = tareas.findIndex(
        (tarea) => tarea.id == idTareaAEliminar
    );

    const lista = document.querySelector("tbody");

    lista.deleteRow(indiceDeLaTareaAEliminar)
    totalRegistros--
    total.innerHTML = totalRegistros
    if (totalRegistros == 0) { document.querySelector("main").style.height = "130px" }

    if (tareas[indiceDeLaTareaAEliminar].realizada) {
        totalRealizadas--
        realizadas.innerHTML = totalRealizadas
    }

    tareas.splice(indiceDeLaTareaAEliminar, 1);
}

function marcar(marcaCheckbox, checkear) {
    const indiceMarcaCheckbox = tareas.findIndex(
        (tarea) => tarea.id == marcaCheckbox)

    if (checkear.checked) {
        tareas[indiceMarcaCheckbox].realizada = true;
        totalRealizadas++
    } else {
        tareas[indiceMarcaCheckbox].realizada = false;
        totalRealizadas--
    }
    realizadas.innerHTML = totalRealizadas
}