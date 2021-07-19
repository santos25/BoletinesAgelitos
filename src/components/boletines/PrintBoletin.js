import React from "react";
import { Table, Label, Row, Col } from "react-bootstrap";
import HeaderTable from "../planilla/HeaderTable";
import PrintTemplate from "react-print";
import escudo from "../escudo.jpg";
import Firmas from "./Firmas";
import CuadroDescriptivo from "./CuadroDescriptivo";

function promedioNotas(arrayNotas) {
  let totalAsignaturas = 0;

  console.log(arrayNotas);
  return (
    arrayNotas.reduce((sum, nota) => {
      return sum + parseFloat(nota);
    }, 0) / totalAsignaturas
  );
}

const PrintBoletin = (props) => {
  const { planilla, asignaturas, keyEstudiante } = props;
  let arrayNotas = [];
  let totalAsignaturas = 0;

  console.log(props);

  //validate the total asignatures when the boletin is for Preescolar as preescolar does not have Informatica asignature..

  const ReturnTotalAsignatures = (totalasig) => {
    console.log(totalasig);
    if (props.grado.nombre === "Transición") {
      return totalasig - 1;
    } else {
      return totalasig;
    }
  };
  return (
    <div>
      <PrintTemplate>
        <div id="cabecera">
          <div className="escudoContainer">
            <img className="escudo" src={escudo} alt="Escudo"></img>
          </div>
          <div className="titulo">
            <p className="tittlePrimary"> INSTITUTO ANGELITOS ALEGRES </p>
            <p>Nuevo Bosque Trv. 51 N° 29 B 77</p>
            <p>Aprobado por Resolución N° 7962</p>
            <p>Dane: 313001000185</p>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div id="informacionBoletin">
          <div className="nombreEstudiante">
            <p className="styleletterPrimary">Nombre </p>
            <p className="styleletterPrimary">
              {" "}
              {props.keyEstudiante
                ? props.estudiantes[props.keyEstudiante].nombre +
                  " " +
                  props.estudiantes[props.keyEstudiante].apellido
                : ""}
            </p>
          </div>
          <div className="gradoBoletin">
            <p className="styleletterPrimary">Grado </p>
            <p className="styleletterPrimary">{planilla[0].grado}</p>
            {/* <Label bsStyle="default">{`GRADO : ${planilla[0].grado}`} </Label> */}
          </div>
          <div className="jornada">
            <p className="styleletterPrimary">Jornada </p>
            <p className="styleletterPrimary">Mañana</p>
          </div>
          <div className="periodo">
            <p className="styleletterPrimary">Periodo </p>
            <p className="styleletterPrimary">2</p>
            {/* <Label bsStyle="default">{`PERIODO : ${planilla[0].periodo}`}</Label>*/}
          </div>
          <div className="año">
            <p className="styleletterPrimary">Año </p>
            <p className="styleletterPrimary">2021 </p>
          </div>
        </div>
        <div>
          <Table striped bordered condensed hover>
            <HeaderTable boletin={true} />
            <tbody>
              {Object.keys(asignaturas).map((keyAsignatura, i) => {
                if (planilla[0][keyAsignatura] && keyEstudiante !== "") {
                  let estudianteData =
                    planilla[0][keyAsignatura].estudiantes[keyEstudiante];
                  arrayNotas.push(estudianteData.nota);
                  totalAsignaturas = i + 1;
                  console.log(totalAsignaturas);
                  return (
                    <tr key={keyAsignatura}>
                      <td className="rowDescripcinPreview">
                        <b className="styleletterPrimaryBold">
                          {planilla[0][keyAsignatura].nombre}
                        </b>
                        <br></br>
                        <p className="styleletterSecond">
                          {estudianteData.descripcion}
                        </p>
                      </td>
                      {/* <td className="rowDescripcin">{estudianteData.descripcion}   </td> */}
                      <td className="styleletterSecond">
                        <p className="centerData">{estudianteData.nota}</p>
                      </td>
                      <td className="styleletterSecond">
                        <p className="centerData">{estudianteData.desempeno}</p>
                      </td>
                      <td className="styleletterSecond">
                        <p className="centerData">{estudianteData.horas}</p>
                      </td>
                      {/* {rowHS} */}
                    </tr>
                  );
                } else {
                  return null;
                }
              })}
            </tbody>
          </Table>
        </div>
        <Row>
          <Col xs={12} md={12}>
            <div className="promedio">
              <p className="styleletterSecond">
                {" "}
                Promedio :{" "}
                {(
                  arrayNotas.reduce((sum, nota) => {
                    // console.log(sum);
                    // console.log(nota);
                    return sum + parseFloat(nota);
                  }, 0) / ReturnTotalAsignatures(totalAsignaturas)
                ).toFixed(2)}
              </p>
              {/* <p>{promedioNotas(arrayNotas)}</p> */}
            </div>
          </Col>
        </Row>
        <Row className="show-grid">
          <div className="obserCuadro">
            <div className="observacion">
              <label className="styleletterPrimary">
                <b>Observaciones</b>
              </label>
              <br></br>
              <pre className="styleletterSecond">
                <p style={{ width: 800 }}>
                  {planilla[0].observaciones[keyEstudiante]}
                </p>
              </pre>
              <Firmas />
              <CuadroDescriptivo />
            </div>
            {/* <div className="cuadro">
      <CuadroDescriptivo />
    </div> */}
          </div>
        </Row>
        {/* <Row className="show-grid">
  <Col xs={12} md={12}>
    <Firmas />
  </Col>
</Row> */}
      </PrintTemplate>
    </div>
  );
};

export default PrintBoletin;
