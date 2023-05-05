import { addToy} from "../apiConnection/APIs.js"

//Juguete

const newFormulario = document.querySelector('#formularioJuguete')
newFormulario.addEventListener('submit' , (e)=>{
    
    agregarJuguete(e);
})

function agregarJuguete(e) {
    e.preventDefault();
    
    const nombreJuguete = document.querySelector('#tipoJuguete').value;
    const precioJuguete = document.querySelector('#precioJuguete').value;
    const toy = {
        imagenJuguete: `/imgs/juguetes/juguetePerro.jpg`,
        nombreJuguete,
        precioJuguete
    }

    if (validar(toy)) {
        alert('Todos los campos son obligatorios')
        return
    }
    addToy(toy)

}

function validar(prop) {
    return !Object.values(prop).every(toy => toy !== '');
}