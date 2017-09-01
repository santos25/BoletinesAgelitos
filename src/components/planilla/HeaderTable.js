import React from 'react';


const HeaderTable = (props) => {
  if (props.boletin) {
    return(
      <thead>
        <tr>
          <th>Asignatura</th>
          <th>Descripcion Del Desempeño</th>
          <th colSpan="2">Periodo 1</th>
          <th>H/S</th>
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
