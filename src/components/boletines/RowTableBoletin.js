
import React from 'react';
import {Button } from 'react-bootstrap';


function renderRow(estudiantes , clickPreviewBoletin ,clickPrintBoletin, rowSelected ,key){
  let estudiante = estudiantes[key];
  console.log("Resutl row " ,  key === rowSelected ? "matched" : "nothing");
  return(
    <tr key={key} className={ key === rowSelected ? "styleRow" : ""} >
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

  const {estudiantes, clickPreviewBoletin , clickPrintBoletin, rowSelected} = props;
  return(
    <tbody>
      {Object.keys(props.estudiantes).map(renderRow.bind(this, estudiantes , clickPreviewBoletin , clickPrintBoletin,rowSelected))}
    </tbody>
  )
}

export default RowTableBoletin;
