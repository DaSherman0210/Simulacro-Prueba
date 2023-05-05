const url = "http://localhost:4000/propietarios"
const urlJuguetes = "http://localhost:4000/juguetes"
const urlEmpleados = "http://localhost:4000/veterinarios"
const urlServicios = "http://localhost:4000/servicios"


//Macotas------------------------------------------------------
export const getPet = async ()=>{
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
}

export const agregarPet = async (propietario)=>{
    console.log("loquesea");
    try{
        await fetch(url ,{
            method: 'POST',
            body: JSON.stringify(propietario),
            headers:{
                'Content-Type': 'application/json'
            }
        });

    }
    catch(error){
        console.log(error);
    }
}

export const eliminarPet = async (id)=>{
    console.log(id);
    try {
        await fetch (`${url}/${id}` , {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

//Juguetes------------------------------------------------------

export const getToy = async ()=>{
    try {
        const respuesta = await fetch (urlJuguetes)
        const dato = await respuesta.json();
        return dato
    } catch (error) {
        console.log(error);

    }
}

export const addToy = async (juguete)=>{
    try {
        await fetch(urlJuguetes , {
            method: 'POST',
            body: JSON.stringify(juguete),
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (error) {
        console.log(error);
    }
} 

export const deleteToy = async (id)=>{
    try {
        await fetch (`${urlJuguetes}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

//Empleados-------------------------------------------------

export const getEmpleado = async ()=>{
    try {
        const respuesto = await fetch(urlEmpleados)
        const date = await respuesto.json();
        return date
    } catch (error) {
        console.log(error);
    }
}

export const addEmployeds = async (employed)=>{
    try {
        await fetch(urlEmpleados , {
            method: 'POST',
            body: JSON.stringify(employed),
            headers: {
                "Content-Type": "application/json"
            } 
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteEmployed = async (id)=>{
    try {
        await fetch(`${urlEmpleados}/${id}` , {
            method: 'DELETE',
        })
    } catch (error) {
        console.log(error);
    }
}

//Servicios--------------------------------------------------

export const getServicios = async ()=>{
    try {
        const respueste = await fetch(urlServicios)
        const dati = await respueste.json();
        return dati
    } catch (error) {
        console.log(error);
    }
}

/* export const addServicios = async (service)
    try {
        await fetch (urlServicios , {
            method: 'POST',

        })
    } catch (error) {
        console.log(error);
    } */