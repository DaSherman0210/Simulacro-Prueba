import {getPet , eliminarPet} from "../apiConnection/APIs.js"

(function (){
    const lista = document.querySelector('.lista')
    document.addEventListener('DOMContentLoaded' , showPets)

    lista.addEventListener('click' , eliminarMascota)

    async function showPets() {
        const miniVet = await getPet();
        console.log(miniVet);
        const cuerpo = document.querySelector('tbody')
        miniVet.forEach( veterinarias => {
            const {id, mascota , nombrePropietario , numeroPropietario} = veterinarias
            const row = document.createElement('tr')
            row.innerHTML =  `
            
            <td>
                ${id}
            </td>
            <td>
                <img src="${mascota[0].imagen}" alt="..." class="cuenta">
            </td>
            <td>
                ${mascota[0].nombre}
            </td>
            <td>
                ${mascota[0].tipo}
            </td>
            <td>
                ${mascota[0].años}
            </td>
            <td>
                ${nombrePropietario}
            </td>
            <td>
                ${numeroPropietario}
            </td>
            <td>
                <button type="button" data-pet = "${id}" class="delete btn btn-warning">Borrar</button>
            </td>
            `
            cuerpo.appendChild(row);
        });
    }
})()

function eliminarMascota(e) {
    if (e.target.classList.contains('delete')) {
        const animalId = Number(e.target.dataset.pet)
        const confirmar = confirm('¿En verdad desea elimar la mascota?')
        if (confirmar) {
            eliminarPet(animalId)
        }
        
    }
    
}