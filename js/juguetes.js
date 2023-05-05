import { getToy , deleteToy } from "../apiConnection/APIs.js";

(function (){
    const lista = document.querySelector('.lista')
    document.addEventListener('DOMContentLoaded' , showToys)

    lista.addEventListener('click' , elimarJuguete)

    async function showToys() {
        const miniToy = await getToy();
        console.log(miniToy);
        const cuerpo = document.querySelector('tbody')
        miniToy.forEach(toy => {
            const {imagenJuguete , nombreJuguete , precioJuguete , id} = toy
            const row = document.createElement('tr')
            row.innerHTML = `
            <td>${id}</td>
            <td><img src="${imagenJuguete}" class = "cuenta"></td>
            <td>${nombreJuguete}</td>
            <td>${precioJuguete}</td>
            <td><button type ="button" data-ltoy ="${id}" class ="delete btn btn-warning">Eliminar</button></td>
            `

            cuerpo.appendChild(row)
        });
    }
})()


function elimarJuguete(e) {
    if (e.target.classList.contains('delete')) {
        const jugueteID = Number(e.target.dataset.ltoy)
        const confirmar = confirm('¿En verdad desea elimar el juguete?')
        if (confirmar) {
            deleteToy(jugueteID)
        }
    }
}


