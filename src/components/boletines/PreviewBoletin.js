import React from 'react';
import {Row,Col,Table,Label} from 'react-bootstrap';
import HeaderTable from '../planilla/HeaderTable';
// import escudo from '../escudo.jpg'
import Firmas from './Firmas'
import CuadroDescriptivo from './CuadroDescriptivo'
// import HeaderTable from '../planilla/HeaderTable';
// import RowTableBoletin from './RowTableBoletin';
function returnEstudianteData(planilla, key , keyEstudiante){

  let estudianteData = planilla[0][key].estudiantes[keyEstudiante]

  return estudianteData;
}

const PreviewBoletin = (props) => {
  const columns = ['Asignatura','Descripcion Del Desempeño', 'Nota', 'DS' ,'H/S'];
  // const columns = ['Nombre Del Estudiante', 'Ver', 'Imprimir'];
  const {planilla , asignaturas , keyEstudiante} = props;
  return(
    <div>
      <Row className="show-grid">
        <Col xs={12} md={12}>
          <Table striped bordered condensed hover>

            <HeaderTable planilla={planilla}  boletin={true} />
            <tbody>
              {Object.keys(asignaturas).map ((key, i) => {
                if (planilla[0][key] && keyEstudiante !== '') {
                  // let estudianteData = planilla[0][key].estudiantes[keyEstudiante]
                  let estudianteData = returnEstudianteData(planilla , key , keyEstudiante);
                  return(
                    <tr key={key}>
                      <td> {planilla[0][key].nombre} </td>
                      <td className="rowDescripcin"> {estudianteData.descripcion} </td>
                      <td> {estudianteData.nota} </td>
                      <td> {estudianteData.desempeno} </td>
                      <td> {estudianteData.horas} </td>
                    </tr>
                  )
                }else {
                  return null;
                }
              })}
            </tbody>
          </Table>

        </Col>
      </Row>

    </div>
  )
}



export default PreviewBoletin;
