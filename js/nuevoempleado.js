import { addEmployeds } from "../apiConnection/APIs.js"

const newFormulario  = document.querySelector('#formulario')
newFormulario.addEventListener('submit' , (e)=>{
    agregarEmpleados(e);
})


function agregarEmpleados(e) {
    e.preventDefault();

    const nombreEmpleado = document.querySelector('#nombreVeterinario').value;
    const edadEmpleado = document.querySelector('#edadVeterinario').value;
    const animalEmpleado = document.querySelector('#animalEspecializado').value;

    const empleado = {
        imagenEmpleado: "/imgs/veterinarios/veterinaria4.jpg",
        nombreEmpleado,
        edadEmpleado,
        animalEmpleado
    }

    if (validation(empleado)) {
        alert ('Todos los campos son obligatorios')
        return
    }
    addEmployeds(empleado)
    
}

function validation(prop) {
    return !Object.values(prop).every(empleado => empleado !== "")
}