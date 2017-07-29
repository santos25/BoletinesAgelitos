
import React from 'react';
import {Table,FormGroup,FormControl } from 'react-bootstrap';

function renderFilasEstudiantes(props){
  return(
    Object.keys(props.estudiantes)
    .map(estudiante => {
      return(
        <tbody key={estudiante}>
        <tr>
          <td key={estudiante}>{props.estudiantes[estudiante].nombre + " " +
            props.estudiantes[estudiante].apellido}
          </td>
          <td>
            <FormGroup controlId="formControlsTextarea">
              <FormControl componentClass="textarea" placeholder="textarea" />
            </FormGroup>
          </td>
          <td>
            <FormGroup controlId="formControlsText">
              <FormControl  id="formControlsText"
                onChange={props.onChangeNotas}
                type="text"
                placeholder="Enter Nota"/>
              </FormGroup>
            </td>
            <td>
              <FormGroup controlId="formControlsText">
                <FormControl disabled="true"  id="formControlsText"
                  type="text"
                  value={props.desempeno}
                />
              </FormGroup>
            </td>
            <td>
              <FormGroup controlId="formControlsText">
                <FormControl width="25px"  id="formControlsText"
                  type="text"
                  placeholder="Horas"/>
                </FormGroup>
              </td>
            </tr>
          </tbody>

          )
        } )
      )
    }

    const FormEstudiantes = (props) =>{
      return (
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Nombre Del Estudiante</th>
              <th>Descripcion Del Desempeño</th>
              <th>Nota</th>
              <th>DS = Desempeño</th>
              <th>H/S</th>
            </tr>
          </thead>
            {
              renderFilasEstudiantes(props)
            }
        </Table>
      )
    }


    export default FormEstudiantes ;
