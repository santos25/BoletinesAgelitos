import React from 'react';
import { Table,Label,Row,Col } from 'react-bootstrap';
import HeaderTable from '../planilla/HeaderTable';
import PrintTemplate  from 'react-print';
import escudo from '../escudo.jpg'
import Firmas from './Firmas'
import CuadroDescriptivo from './CuadroDescriptivo'

const PrintBoletin = (props) => {
  const columns = ['Asignatura','Descripcion Del Desempeño', 'Nota', 'DS' ,'H/S'];
  // const columns = ['Nombre Del Estudiante', 'Ver', 'Imprimir'];
  const {planilla , asignaturas , keyEstudiante} = props;
  return(
    <div >
      <PrintTemplate>
        <div id="cabecera">
          <div className="escudoBoletin">
            <img  src={escudo} alt="Escudo"></img>
          </div>
          <div className="divCabecera">
            <div >
              <label> INSTITUTO ANGELITOS ALEGRES </label>
            </div>
            <div>
              <label>Nuevo Bosque Trv. 51    N° 29 B 77</label>
            </div>
            <div>
              <label>Aprobado por Resolución N° 7962</label>
            </div>
            <div>
              <label>Dane: 313001000185</label>
            </div>
          </div>
          <div className="divCabecera">
            <label>Nombre del Estudiante : </label>
            <label>  { props.keyEstudiante ? props.estudiantes[props.keyEstudiante].nombre +  " "
              +  props.estudiantes[props.keyEstudiante].apellido
              : ""
            }</label>
          </div>
        </div>
        <div id="informacion">
          <div className="tittleFloating">
            <Label bsStyle="default">INFORME ACADEMICO </Label>
          </div>
          <div className="tittleFloating">
            <Label bsStyle="default">GRADO : PREESCOLAR </Label>
            {/* <Label bsStyle="default">{`GRADO : ${planilla[0].grado}`} </Label> */}
          </div>
          <div className="tittleFloating">
            <Label bsStyle="default">JORNADA : Mañana</Label>
          </div>
          <div className="tittleFloating">
            <Label bsStyle="default">PERIODO : 1 </Label>
            {/* <Label bsStyle="default">{`PERIODO : ${planilla[0].periodo}`}</Label> */}
          </div>
          <div className="tittleFloating">
            <Label bsStyle="default">AÑO 2017 </Label>
            {/* <Label bsStyle="default"> {`AÑO : ${ new Date().getFullYear()}`}</Label> */}
          </div>
        </div>

        <div>
          <Table striped bordered condensed hover>
            <HeaderTable boletin={true} />
            <tbody>
              {Object.keys(asignaturas).map ((key, i) => {
                if (planilla[0][key] && keyEstudiante !== '') {
                  let estudianteData = planilla[0][key].estudiantes[keyEstudiante]
                  return(
                    <tr key={key}>
                      <td>{planilla[0][key].nombre}
                      </td>
                      <td className="rowDescripcin">{estudianteData.descripcion}   </td>
                      <td>{estudianteData.nota}
                      </td>
                      <td>{estudianteData.desempeno}
                      </td>
                      <td>{estudianteData.horas}
                      </td>
                    </tr>
                  )
                }else {
                  return null;
                }
              })}
            </tbody>
          </Table>
        </div>
        <Row>
          <Col xs={12} md={12}>
            <div className="promedio" >
              <Label bsStyle="default"> Promedio : 4.4 </Label>
            </div>
          </Col>
        </Row>
        <Row className="show-grid">
          <div className="obserCuadro">
            <div className="observacion">
              <label>Observaciones</label>
              <pre>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                sagittis tellus. Lorem ipsum dolor sit amet</pre>
              </div>
              <div className="cuadro">
                <CuadroDescriptivo />
              </div>
            </div>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <Firmas />
            </Col>
          </Row>
        </PrintTemplate>
      </div>

    )
  }

  export default PrintBoletin;
