import React, { useState } from "react";

const Formulario = () => {
    const {PersonajeUrl, setPersonajeUrl} = useState('')
    const {PersonajeId, setPersonajeId} = useState('')
    const {PersonajeNom, setPersonajeNom} = useState('')
    const {PersonajeAlias, setPersonajeAlias} = useState('')
    const {PersonajeEdad, setPersonajeEdad} = useState('')
    const {PersonajeGen, setPersonajeGen} = useState('')
    const {PersonajePod, setPersonajePod} = useState('')
    const {PersonajeAni, setPersonajeAni} = useState('')
    const {ListaPersona, setListaPersona} = useState([])

    const GuardarPersonaje = asynd
    
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
          <form action="">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese url de la imagen del personaje"
            />
            <input
              type="numb"
              className="form-control mb-2"
              placeholder="Ingrese ID del personaje"
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese nombre del personaje"
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese alias del personaje"
            />
            <input
              type="number"
              className="form-control mb-2"
              placeholder="Ingrese edad del personaje"
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese Genero del personaje"
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese poderes del personaje"
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese anime del personaje"
            />
          </form>
          <button className="btn btn-warning" on="submit" >Editar</button>
          <button className="btn btn-dark btn-block mx-2" on="submit" >Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
