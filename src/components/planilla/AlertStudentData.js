import React from 'react';
import { Button,Alert } from 'react-bootstrap';


const alertAsignatura = (props) =>{
  return (
    <Alert bsStyle="warning" onDismiss={props.handleDismiss}>
      <h3>Seleccione Una Asignatura!</h3>
      <b><p>Por favor Seleccione una Asignatura para ver la información de los
        Estudiantes.</p></b>
        <Button bsSize="xsmall" bsStyle="primary" onClick={props.handleDismiss}>Cerrar Advertencia</Button>
      </Alert>
    )
  }

  export default alertAsignatura;
