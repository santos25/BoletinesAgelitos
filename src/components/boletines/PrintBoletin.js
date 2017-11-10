import React from 'react';
import { Table,Label,Row,Col } from 'react-bootstrap';
import HeaderTable from '../planilla/HeaderTable';
import PrintTemplate  from 'react-print';
import escudo from '../escudo.jpg';
import Firmas from './Firmas';
import CuadroDescriptivo from './CuadroDescriptivo';

const PrintBoletin = (props) => {

  const columns = ['Descripcion Del Desempeño', 'Nota', 'DS' ,'"H/S'];
  // if(!props.grado.excludeHS || false )  columns.push("H/S");
  // const columns = ['Nombre Del Estudiante', 'Ver', 'Imprimir'];
  const {planilla , asignaturas , keyEstudiante} = props;
  let arrayNotas = [];
  let totalAsignaturas= 0;

  // let rowHS ;
  // if (!props.grado.excludeHS) {
  //   rowHS = this.renderHS(estudiante, style);
  // }

  return(
    <div >
      <PrintTemplate>
        <div id="cabecera">
          <div className="escudoContainer">
            <img className="escudo"  src={escudo} alt="Escudo"></img>
          </div>
          <div className="titulo">
            <p className="tittlePrimary"> INSTITUTO ANGELITOS ALEGRES </p>
            <p>Nuevo Bosque Trv. 51    N° 29 B 77</p>
            <p>Aprobado por Resolución N° 7962</p>
            <p>Dane: 313001000185</p>
          </div>
        </div><br></br>
        <div id="informacionBoletin">
          <div className="nombreEstudiante">
            <p>Nombre : { props.keyEstudiante ? props.estudiantes[props.keyEstudiante].nombre +  " "
              +  props.estudiantes[props.keyEstudiante].apellido
              : ""
            }</p>
          </div>
          <div className="gradoBoletin">
            <p>{`GRADO : ${planilla[0].grado}` }</p>
            {/* <Label bsStyle="default">{`GRADO : ${planilla[0].grado}`} </Label> */}
          </div>
          <div className="jornada">
            <p>JORNADA : Mañana</p>
          </div>
          <div className="periodo">
            <p>PERIODO : 4 </p>
            {/* <Label bsStyle="default">{`PERIODO : ${planilla[0].periodo}`}</Label>*/ }
          </div>
          <div className="año">
            <p>AÑO 2017 </p>
          </div>
        </div>
        <div>
          <Table striped bordered condensed hover>
            <HeaderTable boletin={true} />
            <tbody>
              {Object.keys(asignaturas).map ((keyAsignatura, i) => {
                if (planilla[0][keyAsignatura] && keyEstudiante !== '') {
                  let estudianteData = planilla[0][keyAsignatura].estudiantes[keyEstudiante]
                  arrayNotas.push(estudianteData.nota);
                  totalAsignaturas = i + 1;
                  return(
                    <tr key={keyAsignatura}>
                      <td className="rowDescripcinPreview"><b>{planilla[0][keyAsignatura].nombre}</b><br></br>
                      {estudianteData.descripcion}
                    </td>
                    {/* <td className="rowDescripcin">{estudianteData.descripcion}   </td> */}
                    <td><p>{estudianteData.nota}</p>
                  </td>
                  <td><p>{estudianteData.desempeno}</p>
                </td>
                <td><p>{estudianteData.horas}</p>
              </td>
              {/* {rowHS} */}
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
      <p> Promedio :  { arrayNotas.reduce( (sum, nota) =>{
        return sum +  parseFloat(nota);
      },0) / totalAsignaturas}
    </p>
</div>
</Col>
</Row>
{/* <Row className="show-grid">
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
</Row> */}
{/* <Row className="show-grid">
<Col xs={12} md={12}>
<Firmas />
</Col>
</Row> */}
</PrintTemplate>
</div>

)
}

export default PrintBoletin;
