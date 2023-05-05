import {getEmpleado , deleteEmployed} from "../apiConnection/APIs.js"


(function (){
    const lista = document.querySelector('.lista')
    document.addEventListener('DOMContentLoaded' , showEmpleados)

    lista.addEventListener('click', eliminarEmpleados)

    async function showEmpleados() {
        const miniEmpleado = await getEmpleado();
        console.log(miniEmpleado);
        const cuerpo = document.querySelector('tbody')
        miniEmpleado.forEach(employed => {
            const {imagenEmpleado , nombreEmpleado , edadEmpleado , animalEmpleado , id} = employed
            const row = document.createElement('tr')
            row.innerHTML = `
            <td>${id}</td>
            <td><img src="${imagenEmpleado}"class="cuenta"></td>
            <td>${nombreEmpleado}</td>
            <td>${edadEmpleado}</td>
            <td>${animalEmpleado}</td>
            <td><button type="button" data-empled="${id}" class="delete btn btn-warning">Delete</button></td>
            `
            cuerpo.appendChild(row)
        });

    }
})()

function eliminarEmpleados(e) {
    if (e.target.classList.contains('delete')) {
        const empleadoId = Number(e.target.dataset.empled)
        const confirmar = confirm('¿En verdad desea elimar el juguete?')
        if (confirmar) {
            deleteEmployed(empleadoId)
        }
    }
}