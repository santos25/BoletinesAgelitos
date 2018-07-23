import React from 'react';

const HeaderTable = (props) => {
  if (props.boletin) {
    return(
      <thead>
        <tr>
          <th rowSpan="2" className="styleletterPrimary"><center>DESCRIPCION DE DESEMPEÑO </center></th>
          <th colSpan="2" > <center>Periodo 2</center></th>
          <th rowSpan="2">H/S</th>
        </tr>
        <tr>
          <th>NOTA </th>
          <th>DS </th>
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
