import React, { Fragment, useState, useEffect } from 'react';


// Imports Components
import Formulario from './components/Formulario/Formulario';
import Cita from './components/Cita/Cita';

function App() {

  // Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  } 

  // Arreglo de Citas
  const [citas, guardarCitas] = useState(citasIniciales);

  // Use Effect para realizar operaciones cuando el state cambia
  useEffect( () => {

    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }

  }, [citas, citasIniciales]);


  // Funcion para añadir citas al array de citas
  const addCitas = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }

  // Funcio para eliminar una cita de nuestro State de citas.
  const eliminarCita = id => {
    const newCitas = citas.filter( cita => cita.id !== id )
    guardarCitas(newCitas);
  }

  // Mensaje condicional
  const titulo = citas.length === 0 ? 'Solicita un turno' : 'Administra tus turnos.'
 
  return (
    <Fragment>
      <h1>
        Administrador de Pacientes
      </h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Formulario
                addCitas={addCitas}
              />
          </div>
          <div className="one-half column">
              <h2> {titulo} </h2>

              {citas.map( cita => {
                 return <Cita 
                          key={cita.id} 
                          cita={cita} 
                          eliminarCita={eliminarCita}
                        />
              })}

          </div>
        </div>
      </div>
    </Fragment>
  );

}



export default App;
