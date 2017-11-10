import React from 'react';
import {Row,Col,Table,Label,Well} from 'react-bootstrap';
import HeaderTable from '../planilla/HeaderTable';
// import escudo from '../escudo.jpg'
import Firmas from './Firmas'
import CuadroDescriptivo from './CuadroDescriptivo'
// import HeaderTable from '../planilla/HeaderTable';
// import RowTableBoletin from './RowTableBoletin';
function returnEstudianteData(planilla, keyAsignatura , keyEstudiante){

  let estudianteData = planilla[0][keyAsignatura].estudiantes[keyEstudiante]

  return estudianteData;
}

const PreviewBoletin = (props) => {
  // const columns = ['Asignatura','Descripcion Del Desempeño', 'Nota', 'DS' ,'H/S'];
  // const columns = ['Nombre Del Estudiante', 'Ver', 'Imprimir'];
  const {planilla , asignaturas , keyEstudiante} = props;
  return(
    <div>
      <Row className="show-grid">
        <Col xs={12} md={12}>
          <h4><Label bsStyle="primary">Observacion</Label></h4>
          <Well bsSize="small">{planilla[0].observaciones[keyEstudiante]}</Well>
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={12} md={12}>
          <Table striped bordered condensed hover>

            <HeaderTable   boletin={true} />
            <tbody>
              {Object.keys(asignaturas).map ((keyAsignatura, i) => {
                if (planilla[0][keyAsignatura] && keyEstudiante !== '') {
                  // let estudianteData = planilla[0][key].estudiantes[keyEstudiante]
                  let estudianteData = returnEstudianteData(planilla , keyAsignatura , keyEstudiante);
                  console.log();
                  return(
                    <tr key={keyAsignatura}>
                      <td className="rowDescripcinPreview"> <b>{planilla[0][keyAsignatura].nombre}</b> <br></br><br></br>
                      {estudianteData.descripcion}
                    </td>
                    {/* <td className="rowDescripcinPreview"> {estudianteData.descripcion} </td> */}
                    {/* <td> {planilla[0].observaciones[keyEstudiante]} </td> */}
                    <td ><p className="centerData"> {estudianteData.nota} </p></td>
                    <td> <p className="centerData">{estudianteData.desempeno} </p></td>
                    <td> <p className="centerData">{estudianteData.horas}</p> </td>
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
