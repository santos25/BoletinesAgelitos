
import React from 'react';
import {FormGroup,FormControl,Label,Button } from 'react-bootstrap';


function renderRow(estudiantes , clickPreviewBoletin ,clickPrintBoletin ,key){
  let estudiante = estudiantes[key];

  return(
    <tr key={key}>
      <td>{estudiante.nombre + " " + estudiante.apellido}
      </td>
      <td>
        <Button bsStyle="primary" bsSize="xsmall" onClick={() => clickPreviewBoletin(key)} className="glyphicon glyphicon-search"/>
      </td>
      <td>
        <Button bsStyle="primary" bsSize="xsmall" onClick={() => clickPrintBoletin(key)} className="glyphicon glyphicon-print"/>
      </td>
    </tr>
  )
}

const RowTableBoletin = (props) => {

  const {estudiantes, clickPreviewBoletin , clickPrintBoletin} = props;
  console.log(clickPrintBoletin);
  return(
    <tbody>
      {Object.keys(props.estudiantes).map(renderRow.bind(this, props.estudiantes , clickPreviewBoletin , clickPrintBoletin))}
    </tbody>
  )
}

export default RowTableBoletin;
