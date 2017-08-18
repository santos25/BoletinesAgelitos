import React from 'react';
import {Grid,Row,Col,Table,Label} from 'react-bootstrap';
import HeaderTable from '../planilla/HeaderTable';
import escudo from '../escudo.jpg'
// import HeaderTable from '../planilla/HeaderTable';
// import RowTableBoletin from './RowTableBoletin';

const PreviewBoletin = (props) => {
  const columns = ['Asignatura','Descripcion Del Desempeño', 'Nota', 'DS' ,'H/S'];
  // const columns = ['Nombre Del Estudiante', 'Ver', 'Imprimir'];
  const {planilla , asignaturas , keyEstudiante} = props;
  return(
    <div>
      <Row className="show-grid">
        <Col xs={12} md={4}>
          <img className="escudo" src={escudo} alt="Escudo"></img>
        </Col>
        <Col xs={12} md={4}>
          <div>
            <Label>INSTITUTO ANGELITOS ALEGRES </Label>
          </div>
          <div>
            <Label>Nuevo Bosque Trv. 51    N° 29 B 77</Label>
          </div>
          <div>
            <Label>Aprobado por Resolución N° 7962</Label>
          </div>
          <div>
            <Label>Dane: 313001000185</Label>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div>
            <Label>Andres Fernado Santos Gueto</Label>
          </div>
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={12} md={12}>
          <div className="tittleBoletinContainer">
            <div className="tittleFloating">
              <Label bsStyle="default">INFORME ACADEMICO </Label>
            </div>
            <div className="tittleFloating">
              <Label bsStyle="default">{`GRADO : ${planilla[0].grado}`} </Label>
            </div>
            <div className="tittleFloating">
              <Label bsStyle="default">JORNADA : Mañana</Label>
            </div>
            <div className="tittleFloating">
              <Label bsStyle="default">{`PERIODO : ${planilla[0].periodo}`}</Label>
            </div>
            <div className="tittleFloating">
              <Label bsStyle="default"> {`AÑO : ${ new Date().getFullYear()}`}</Label>
            </div>
          </div>
        </Col>

      </Row>
      <Row>
        <Table striped bordered condensed hover>
          <HeaderTable  columns={columns}/>
          <tbody>
            {Object.keys(asignaturas).map ((key, i) => {
              if (planilla[0][key] && keyEstudiante !== '') {
                let estudianteData = planilla[0][key].estudiantes[keyEstudiante]
                console.log(estudianteData);
                return(
                  <tr key={key}>
                    <td>{planilla[0][key].nombre}
                    </td>
                    <td><pre>{estudianteData.descripcion}</pre>
                  </td>
                  <td>{estudianteData.nota}
                  </td>
                  <td>{estudianteData.desempeno}
                  </td>
                  <td>{estudianteData.horas}
                  </td>
                </tr>
              )
            }
          })}
        </tbody>
      </Table>
    </Row>
  </div>
)
}


export default PreviewBoletin;
