import { addServicios } from "../apiConnection/APIs.js"

const newFormulario = document.querySelector('#formulario')
newFormulario.addEventListener('submit' , (e)=>{
    agregarServicios(e);
})

function agregarServicios(e) {
    e.preventDefault();
    const salud = document.querySelector('#servicio').value;
    const aseo = document.querySelector('#aseo').value;
    const comida = document.querySelector('#comida').value;

    const servicios ={
        imagen: "/imgs/servicios/berroBienBañao.jpg",
        salud,
        aseo,
        comida
    }

    if (verificar(servicios)) {
        alert('Todos los campos son obligatorios')
        return
    }
    addServicios(servicios)
}

function verificar(prop) {
    return !Object.values(prop).every(servicios => servicios !== "")
}