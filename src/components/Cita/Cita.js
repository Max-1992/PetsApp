import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({ cita, eliminarCita }) => {

    const {
        mascota,
        propietario,
        fecha,
        hora,
        sintomas,
    } = cita;

    return ( 
        <div className="cita">
            <p>
                Mascota: <span> {mascota} </span>
            </p>
            <p>
                Dueño: <span> {propietario} </span>
            </p>
            <p>
                Motivo de consulta: <span> {sintomas} </span>
            </p>
            <p>
               Fecha y Hora: <span> {fecha} </span> <span> {hora}hs </span>
            </p>

            <button 
                type="button" 
                className="button eliminar u-full-width"
                onClick={ () => eliminarCita(cita.id) }
                >
                    eliminar
            </button>
        </div>
     );
}

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
 
export default Cita;