import React, { useState } from "react";
import {db} from '../firebase'
import { collection, doc, addDoc } from "firebase/firestore";

const Formulario = () => {
    const [personajeUrl, setPersonajeUrl] = useState('')
    const [personajeId, setPersonajeId] = useState('')
    const [personajeNom, setPersonajeNom] = useState('')
    const [personajeAlias, setPersonajeAlias] = useState('')
    const [personajeEdad, setPersonajeEdad] = useState('')
    const [personajeGen, setPersonajeGen] = useState('')
    const [personajePod, setPersonajePod] = useState('')
    const [personajeAni, setPersonajeAni] = useState('')
    const [listaPersona, setListaPersona] = useState([])

    const GuardarPersonaje = async (e) =>{
      e.preventDefault()
      try{
        const data = await addDoc(collection(db,'Personajes_Anime'),{
          P_Url: personajeUrl,
          P_Id: personajeId,
          P_Nombre: personajeNom,
          P_Alias: personajeAlias,
          P_Edad: personajeEdad,
          P_Genero: personajeGen,
          P_Poder: personajePod,
          P_Anime: personajeAni
        })
      }catch(error){
        console.log(error)
      }
    }
    
  return (
    <div className="container mt-5">
      <h1>PERSONAJES DEL ANIME</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4>LISTADO DE PERSONAJES</h4>
          <ul className="list-group">
            <li className="list-group-item">Personaje 1</li>
            <li className="list-group-item">Personaje 2</li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">AGREGAR PERSONAJES</h4>
          <form onSubmit={GuardarPersonaje}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese url de la imagen del personaje"
              value={personajeUrl}
              onChange={(e) => setPersonajeUrl(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese ID del personaje"
              value={personajeId}
              onChange={(e)=>setPersonajeId(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese nombre del personaje"
              value={personajeNom}
              onChange={(e)=>setPersonajeNom(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese alias del personaje"
              value={personajeAlias}
              onChange={(e)=>setPersonajeAlias(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese edad del personaje"
              value={personajeEdad}
              onChange={(e)=>setPersonajeEdad(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese Genero del personaje"
              value={personajeGen}
              onChange={(e)=>setPersonajeGen(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese poderes del personaje"
              value={personajePod}
              onChange={(e)=>setPersonajePod(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese anime del personaje"
              value={personajeAni}
              onChange={(e)=>setPersonajeAni(e.target.value)}
            />
          </form>
          <button className="btn btn-warning btn-block" on="submit" >Agregar</button>
          <button className="btn btn-dark btn-block mx-2">Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
