import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Formulario = ({ addCitas }) => {

    // Crear State de Citas.
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
        id: ''
    });

    // Crear State para el manejo de errores
    const [error, actualizarError] = useState({
        err: false,
        message: ''
    });

    // Función que se ejecuta cuando un usuario escribe en un input.
    const handleChange = event => {
       
        actualizarCita({
            ...cita,
            [event.target.name]: event.target.value
        });

    }

    // Extraer los valores de nuestro State
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    // Cuando el usuario preciona solicitar turno
    const handleSubmit = event => {
        event.preventDefault();

        // Validar datos del formulario
        if(  mascota.trim() === '' ) {
            actualizarError({
                ...error,
                err: true,
                message: 'No se agrego el nombre de la mascota'
            });
            
            return;
        }

        if(  propietario.trim() === '' ) {
            actualizarError({
                ...error,
                err: true,
                message: 'No se agrego el nombre del propietario'
            });
     
            return;
        }

        if(  fecha.trim() === '' ) {
            
            actualizarError({
                ...error,
                err: true,
                message: 'No se agrego la fecha'
            });
          
            return;
        }

        if(  hora.trim() === '' ) {
            actualizarError({
                ...error,
                err: true,
                message: 'No se agrego la hora'
            });
       
            return;
        }

        if(  sintomas.trim() === '' ) {
            
            actualizarError({
                ...error,
                err: true,
                message: 'No se agregaron los sintomas'
            });
           
            return;
        }

        // Modificar el estado del error si hubise habido uno y este se ha solucionado
        if( error.err ) {
            actualizarError({
                ...error,
                err: false,
                message: ''
            });
        }

        // Asignar un ID
        cita.id = uuid();

        // Crear la cita
        addCitas(cita);

        // Reiniciar el form
        actualizarCita({
            ...cita,
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: '',
            id: ''
        })

        console.log('enviando form')

    }

    return ( 
        <Fragment>
            <h2>Solicitar Turno</h2>

            { error.err ? <p className="alerta-error"> { error.message } </p> : null }

            <form
                onSubmit={handleSubmit}
            >
                <label>Nombre de Mascota</label>
                <input
                    type="text"
                    name="mascota" 
                    className="u-full-width"
                    placeholder="Como se llama tu mascota"
                    onChange={handleChange}
                    value={mascota}
                />

                <label>Nombre del Dueño</label>
                <input 
                    type="text"
                    name="propietario" 
                    className="u-full-width"
                    placeholder="Nombre del dueño"
                    onChange={handleChange}
                    value={propietario}
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha" 
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora" 
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Solicitar Turno
                </button>
            </form>
        </Fragment>
     );
}

Formulario.propTypes = {
    addCitas: PropTypes.func.isRequired
}
 
export default Formulario;