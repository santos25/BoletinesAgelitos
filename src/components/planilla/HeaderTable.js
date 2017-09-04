import React from 'react';


const HeaderTable = (props) => {
  if (props.boletin) {
    return(
      <thead>
        <tr >
          <th rowSpan="2">Asignatura</th>
          <th rowSpan="2">Descripcion Del Desempeño</th>
          <th colSpan="2">Periodo 1</th>
          <th colSpan="2">Periodo 2</th>
          <th colSpan="2">Periodo 3</th>
          <th colSpan="2">Periodo 4</th>
          <th rowSpan="2">H/S</th>
        </tr>
        <tr>
          <th> Nota </th>
          <th> DS </th>
          <th> Nota </th>
          <th> DS </th>
          <th> Nota </th>
          <th> DS </th>
          <th> Nota </th>
          <th> DS </th>
        </tr>
      </thead>
    )

  }
  return (
    <thead>
      <tr>
        {

          props.columns.map((colum,i) => <th key={i} >{colum}</th>)
        }

      </tr>
    </thead>
  )
}

export default HeaderTable;
