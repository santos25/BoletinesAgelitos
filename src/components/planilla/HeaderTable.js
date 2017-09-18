import React from 'react';

const HeaderTable = (props) => {
  if (props.boletin) {

    // let columnsPeriodos = props.planilla.map((colum , key) => <th colSpan="2" key={key}>Periodo {colum.periodo}</th>)
    // let columnsInsideNota = props.planilla.map((colum , i) => <th key={i}>Nota </th>)
    // let columnsInsideDS = props.planilla.map((colum , i) => <th key={i}>DS </th>)

    return(
      <thead>
        <tr>
          <th rowSpan="2">Asignatura</th>
          <th rowSpan="2">Descripcion Del Desempeño</th>
          {/* { columnsPeriodos } */}
          <th colSpan="2" > <center>Periodo 4</center></th>
          <th rowSpan="2">H/S</th>
        </tr>
        <tr>
          <th>Nota </th>
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
