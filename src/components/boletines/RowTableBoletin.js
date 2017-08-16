
import React,{Component} from 'react';
import {FormGroup,FormControl,Label,Button } from 'react-bootstrap';


function renderRow(estudiantes, key){
  let estudiante = estudiantes[key];
  return(
    <tr key={key}>
      <td>{estudiante.nombre + " " + estudiante.apellido}
      </td>
      <td>
        <Button bsStyle="primary" bsSize="xsmall" className="glyphicon glyphicon-search"/>
      </td>
      <td>
        <Button bsStyle="primary" bsSize="xsmall" className="glyphicon glyphicon-print"/>
      </td>
    </tr>
  )
}

const RowTableBoletin = (props) => {

  return(
    <tbody>
      {Object.keys(props.estudiantes).map(renderRow.bind(this, props.estudiantes))}
    </tbody>
  )
}

export default RowTableBoletin;
