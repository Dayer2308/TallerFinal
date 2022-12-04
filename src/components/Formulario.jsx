import React, { useState, useEffect } from "react";
import { db } from '../firebase'
import { collection, doc, addDoc, onSnapshot, query } from "firebase/firestore";

const Formulario = (e) => {
  const [personajeUrl, setPersonajeUrl] = useState('')
  const [personajeId, setPersonajeId] = useState('')
  const [personajeNom, setPersonajeNom] = useState('')
  const [personajeAlias, setPersonajeAlias] = useState('')
  const [personajeEdad, setPersonajeEdad] = useState('')
  const [personajeGen, setPersonajeGen] = useState('')
  const [personajePod, setPersonajePod] = useState('')
  const [personajeAni, setPersonajeAni] = useState('')
  const [listaPersona, setListaPersona] = useState([])

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        await onSnapshot(collection(db, 'Personajes_Anime'), (query) => {
          setListaPersona(query.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        })
      } catch (error) {
        console.log(error)
      }
    }

    obtenerDatos();
    console.log(listaPersona)

  }, [])


  const GuardarPersonaje = async (e) => {
    e.preventDefault()
    try {
      const data = await addDoc(collection(db, 'Personajes_Anime'), {
        P_Url: personajeUrl,
        P_Id: personajeId,
        P_Nombre: personajeNom,
        P_Alias: personajeAlias,
        P_Edad: personajeEdad,
        P_Genero: personajeGen,
        P_Poder: personajePod,
        P_Anime: personajeAni
      })

      setListaPersona(
        [...listaPersona, {
          P_Url: personajeUrl,
          P_Id: personajeId,
          P_Alias: personajeAlias,
          P_Edad: personajeEdad,
          P_Genero: personajeGen,
          P_Poder: personajePod,
          P_Anime: personajeAni,
          id: data.id
        }]
      )

      setPersonajeUrl("")
      setPersonajeId("")
      setPersonajeNom("")
      setPersonajeAlias("")
      setPersonajeEdad("")
      setPersonajeGen("")
      setPersonajePod("")
      setPersonajeAni("")

    } catch (error) {
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
            {
              listaPersona.map(item =>(
                <li className="list-group-item" key={item.id}>
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={item.P_Url} className="img-fluid rounded-start"/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{item.P_Nombre}</h5>
                          <p className="card-text" >{item.P_Id}</p>
                          <p className="card-text" >{item.P_Alias}</p>
                          <p className="card-text" >{item.P_Edad}</p>
                          <p className="card-text" >{item.P_Genero}</p>
                          <p className="card-text" >{item.P_Poder}</p>
                          <p className="card-text" >{item.P_Anime}</p>
                          <button></button>
                          <button></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            }
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
              onChange={(e) => setPersonajeId(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese nombre del personaje"
              value={personajeNom}
              onChange={(e) => setPersonajeNom(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese alias del personaje"
              value={personajeAlias}
              onChange={(e) => setPersonajeAlias(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese edad del personaje"
              value={personajeEdad}
              onChange={(e) => setPersonajeEdad(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese Genero del personaje"
              value={personajeGen}
              onChange={(e) => setPersonajeGen(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese poderes del personaje"
              value={personajePod}
              onChange={(e) => setPersonajePod(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese anime del personaje"
              value={personajeAni}
              onChange={(e) => setPersonajeAni(e.target.value)}
            />
            <button className="btn btn-primary btn-block" on="submit">Agregar</button>
            <button className="btn btn-dark btn-block mx-2">Cancelar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;

