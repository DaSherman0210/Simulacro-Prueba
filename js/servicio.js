import { getServicios } from "../apiConnection/APIs.js"

(function(){

    document.addEventListener('DOMContentLoaded' , mostrarServicios)

    async function mostrarServicios() {
        const miniServicios = await getServicios();
        const cuerpo = document.querySelector('tbody')
        console.log(miniServicios);
        miniServicios.forEach(servicio => {
            const {id, salud , aseo , comida} = servicio
            const row = document.createElement('tr')
            row.innerHTML = `
            <td>${id}</td>
            <td>${salud}</td>
            <td>${aseo}</td>
            <td>${comida}</td>
            <td><button type="button" class="btn btn-warning">Eliminar</button></td>
            `
            cuerpo.appendChild(row)
        });   
    }
})()