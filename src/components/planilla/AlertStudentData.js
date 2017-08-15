import React from 'react';
import { Button,Alert } from 'react-bootstrap';


const alertAsignatura = (props) =>{
  return (
    <Alert bsStyle="danger" onDismiss={props.handleDismiss}>
      <h3>Seleccione Una Asignatura!</h3>
      <p>Por favor Seleccione una Asignatura para ver la información de los
          Estudiantes.</p>
      <p>
        <Button bsStyle="primary" onClick={props.handleDismiss}>Cerrar Advertencia</Button>
      </p>
    </Alert>
  )
}

export default alertAsignatura;
