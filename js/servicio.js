import { getServicios , deleteServicios } from "../apiConnection/APIs.js"

(function(){
    const lista = document.querySelector('.lista')
    document.addEventListener('DOMContentLoaded' , mostrarServicios)

    lista.addEventListener('click' , eliminarServicio)

    async function mostrarServicios() {
        const miniServicios = await getServicios();
        const cuerpo = document.querySelector('tbody')
        console.log(miniServicios);
        miniServicios.forEach(servicio => {
            const {imagen, id, salud , aseo , comida} = servicio
            const row = document.createElement('tr')
            row.innerHTML = `
            <td>${id}</td>
            <td><img class="cuenta" src="${imagen}"></td>
            <td>${salud}</td>
            <td>${aseo}</td>
            <td>${comida}</td>
            <td><button type="button" data-servc="${id}" class="delete btn btn-warning">Eliminar</button></td>
            `
            cuerpo.appendChild(row)
        });   
    }
})()


function eliminarServicio(e) {
    if (e.target.classList.contains('delete')) {
        const servicioId = Number(e.target.dataset.servc)
        const confirmar = confirm('¿En verdad desea elimar el servicio?')
        if (confirmar) {
            deleteServicios(servicioId)
        }
    }
}
