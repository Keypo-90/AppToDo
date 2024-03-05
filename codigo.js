const form = document.querySelector('#form')
const dom = document.querySelector('.flex')
const opcion = document.querySelector('#prioridad')
const main = document.querySelector('.flex main')
const final = document.querySelector('.final')
let miId = 1;
form.addEventListener('submit', cargarDatos)


function cargarDatos(event) {
    event.preventDefault()
    const nuevaTarea = {
        task: event.target.task.value,
        prioridad: opcion.value
    }
    pintar1(nuevaTarea, dom)
}

function guardarData(listaTareas, nuevaTarea) {
    miId++;
    nuevaLista = listaTareas.push(nuevaTarea)
    return nuevaLista;
}



function pintar1(tarea, dom) {
    const tr = document.createElement('tr');// <tr></tr>
    const td1 = document.createElement('td'); //<td></td>
    const td2 = document.createElement('td'); //<td></td>
    const td3 = document.createElement('td'); //<td></td>
    const button = document.createElement('button'); //<button></button>
    button.dataset.id = tarea.id;
    button.textContent = 'Borrar'; //<button>borrar</button>
    button.addEventListener('click', borrarTarea);
    tr.classList.add(devolverPrioridad(tarea.prioridad))
    td1.textContent = tarea.task;
    td2.textContent = tarea.prioridad;
    td3.appendChild(button); //<td><button>borrar</button></td>
    tr.append(td1, td2, td3);
    dom.appendChild(tr)
}

function borrarTarea(event) {
    let id = Number(event.target.dataset.id);
    let posicion = listaTareas.findIndex(tarea => tarea.id === id);
    listaTareas.splice(posicion, 1);
    let tbody = event.target.parentNode.parentNode.parentNode;
    let hijo = event.target.parentNode.parentNode
    tbody.removeChild(hijo);

}

function devolverPrioridad(prioridad) {
    let estado = ""
    switch (prioridad) {

        case 'Diaria':
            estado = 'Diaria'
            break;

        case 'Mensual':
            estado = 'Mensual'
            break;
        case 'Urgente':
            estado = 'Urgente'
            break;

        default:

            break;
    }
    return (estado)
}

function filterByPrioridad(list, prioridad) {
    return list.filter(tarea => {
        let prioridadBBDD = tarea.prioridad.toLowerCase()
        let miPrioridad = prioridad.toLowerCase()
        return prioridadBBDD.includes(miPrioridad)
    })
}
const filtrado = document.querySelector('.domTareas')
console.log(filterByPrioridad(listaTareas, 'diaria'))

const selectPrioridad = document.getElementById('#selector');
selector.addEventListener('change', capturarSelect);

function capturarSelect(event) {
    Todos(filterByPrioridad(listaTareas, event.target.value), filtrado)
}

function Todos(lista, dom) {
    lista.forEach(tarea => pintar1(tarea, dom))
}

Todos(listaTareas, dom)

