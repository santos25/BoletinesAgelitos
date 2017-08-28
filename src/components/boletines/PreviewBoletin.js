import React from 'react';
import {Row,Col,Table,Label} from 'react-bootstrap';
import HeaderTable from '../planilla/HeaderTable';
import escudo from '../escudo.jpg'
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
        <div className="divLeft">
          <Col xs={12} md={4}>
            <img className="escudo" src={escudo} alt="Escudo"></img>
          </Col>
        </div>
        <div className="">
          <Col xs={12} md={4}>
            <div>
              <Label bsStyle="primary"> INSTITUTO ANGELITOS ALEGRES </Label>
            </div>
            <div>
              <Label bsStyle="primary">Nuevo Bosque Trv. 51    N° 29 B 77</Label>
            </div>
            <div>
              <Label bsStyle="primary" >Aprobado por Resolución N° 7962</Label>
            </div>
            <div>
              <Label bsStyle="primary">Dane: 313001000185</Label>
            </div>
          </Col>
        </div>
        <div className="divRight">
          <Col xs={12} md={4}>
            <div>
              <Label bsStyle="primary">
                { props.keyEstudiante ? props.estudiantes[props.keyEstudiante].nombre +  " "
                                       +  props.estudiantes[props.keyEstudiante].apellido
                                      : ""
              }
            </Label>
          </div>
        </Col>
      </div>
    </Row>
    <Row className="show-grid">
      <Col xs={12} md={12}>
        <div className="tittleBoletinContainer">
          <div className="tittleFloating">
            <Label bsStyle="primary">INFORME ACADEMICO </Label>
          </div>
          <div className="tittleFloating">
            <Label bsStyle="primary">{`GRADO : ${planilla[0].grado}`} </Label>
          </div>
          <div className="tittleFloating">
            <Label bsStyle="primary">JORNADA : Mañana</Label>
          </div>
          <div className="tittleFloating">
            <Label bsStyle="primary">{`PERIODO : ${planilla[0].periodo}`}</Label>
          </div>
          <div className="tittleFloating">
            <Label bsStyle="primary"> {`AÑO : ${ new Date().getFullYear()}`}</Label>
          </div>
        </div>
      </Col>

    </Row>
    <Row className="show-grid">
      <Col xs={12} md={12}>
      <Table striped bordered condensed hover>
        <HeaderTable  columns={columns}/>
        <tbody>
          {Object.keys(asignaturas).map ((key, i) => {
            if (planilla[0][key] && keyEstudiante !== '') {
              // let estudianteData = planilla[0][key].estudiantes[keyEstudiante]
              let estudianteData = returnEstudianteData(planilla , key , keyEstudiante);
              return(
                <tr key={key}>
                  <td> {planilla[0][key].nombre} </td>
                  <td> <pre>{estudianteData.descripcion}</pre> </td>
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
