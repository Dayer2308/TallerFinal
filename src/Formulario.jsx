import React from 'react';

const Formulario = () => {
    return (
        <div className='container mt-5'>
            <h1>PERSONAJES DEL ANIME</h1>
            <hr />
            <div className='row'>
                <div className='col-8'>
                    <h4>LISTADO DE PERSONAJES</h4>
                    <ul className='list-group'>
                        <li className='list-group-item'>Personaje 1</li>
                        <li className='list-group-item'>Personaje 2</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h4 className='text-center'>AGREGAR PERSONAJES</h4>
                </div>

            </div>

        </div>    
        )
}

export default Formulario