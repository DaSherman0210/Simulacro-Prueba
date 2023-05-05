import { agregarPet } from "../apiConnection/APIs.js";

//Mascotas

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit' , (e)=>{
    
    agregarPropietario(e);
    
})


function agregarPropietario(e) {
    e.preventDefault();
    const nombre = document.querySelector('#nombreMascota').value;
    const tipo = document.querySelector('#tipoMascota').value;
    const años = Number(document.querySelector('#edadMascota').value);
    const nombrePropietario = document.querySelector('#propietarioMascota').value;
    const numeroPropietario = Number(document.querySelector('#numeroMascota').value);

    const dueno = {
        nombrePropietario,
        numeroPropietario,
        mascota: [
          {
            imagen: "/imgs/animales/imagenPerro.jpg",
            nombre,
            tipo,
            años,
          }]
        }

    if (validate(dueno)) {
        alert ("Todos los campos son obligatorios");
        return;
    }
    agregarPet(dueno);

    
}

function validate(prop) {
        return !Object.values(prop).every(dueno => dueno !== '');
}
