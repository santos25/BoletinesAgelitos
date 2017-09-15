import React from 'react';

const HeaderTable = (props) => {
  let rows =  "";
  if (props.boletin) {
    return(
      <thead>
        <tr>
          <th rowSpan="2">Asignatura</th>
          <th rowSpan="2">Descripcion Del Desempeño</th>
          {
            props.planilla.map((colum , key) => {
              rows += <th> Nota </th>;
              return (
                <th colSpan="2" key={key}>Periodo {colum.periodo}</th>
              )
            })
          }
          <th rowSpan="2">H/S</th>
        </tr>
        <tr>
          {console.log(rows) }
            {/* <th> Nota </th>
            <th> DS </th> */}
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
