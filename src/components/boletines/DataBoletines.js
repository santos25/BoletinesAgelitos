import React, { Component } from "react";
import { Label, Alert, Row, Grid, Col } from "react-bootstrap";
import Home from "../containers/Home";
import BoletinStudent from "./BoletinStudent";
// import PrintBoletin from './PrintBoletin';
import InputGradoPeriodo from "../general/InputGradoPeriodo";
import { Base } from "../Base";

class DataBoletines extends Component {
  constructor() {
    super();
    this.state = {
      // estudiantes : {},
      planilla: [],
      keyGradoSelected: "",
      // keyPeriodoSelected: 'periodo1',
      showBoletines: false,
      grados: [],
      periodos: "",
      asignaturasByGrado: {},
      showNoData: false,
      keyEstudiante: "",
      // rowSelected : '',
      print: false,
    };
  }

  componentWillMount() {
    this.ref = Base.syncState(`grados`, {
      context: this,
      asArray: true,
      state: "grados",
    });

    // this.ref = Base.syncState(`periodos`, {
    //   context: this,
    //   state: 'periodos',
    // });
  }

  componentWillUnmount() {
    console.log("DEsmonto DataBoletines.js");
    Base.removeBinding(this.ref);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.showBoletines) {
      if (nextState.planilla.length === 0) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }

  showBoletinesStudent(e) {
    e.preventDefault();
    console.log(this.state.keyGradoSelected);
    Base.fetch("planillas", {
      context: this,
      asArray: true,
      queries: {
        orderByChild: "grado",
        equalTo: this.state.grados[this.state.keyGradoSelected].nombre,
      },
    })
      .then((data) => {
        if (data.length > 0) {
          console.log(data);
          for (var x = 0; x < data.length; x++) {
            //console.log(data[x].ano);
            if (data[x].ano === 2020 && data[x].periodo === 2) {
              console.log(data[x]);
              var newVector = new Array();
              newVector[0] = data[x];
              console.log(newVector);
              this.findAsignaturasByGrado(
                Object.keys(
                  this.state.grados[this.state.keyGradoSelected].asignaturas
                ),
                newVector
              );
            }
          }
          //this.findAsignaturasByGrado(Object.keys(this.state.grados[this.state.keyGradoSelected].asignaturas) , data);
        } else {
          this.setState((prevState) => ({
            showNoData: true,
          }));
        }
      })
      .catch((error) => {
        //handle error
        console.log("Error Consultando Planillas  " + error);
      });
  }

  findAsignaturasByGrado(keyAsignatura, dataBoletin) {
    Base.fetch("asignaturas", {
      context: this,
      asArray: false,
    })
      .then((data) => {
        // console.log(keyAsignatura);
        this.setState({
          asignaturasByGrado: data[keyAsignatura],
          showBoletines: true,
          planilla: dataBoletin,
        });
      })
      .catch((error) => {
        console.log("Fallo Consultar Asignaturas", error);
      });
  }

  changeData(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  }

  closeNoDataException() {
    this.setState((prevState) => ({
      showNoData: !prevState.showNoData,
    }));
  }

  clickPreviewBoletin(keyStudent) {
    this.setState({
      keyEstudiante: keyStudent,
    });
  }

  clickPrintBoletin(keyStudent) {
    console.log("Key Student print ", keyStudent);
    this.setState(
      {
        keyEstudiante: keyStudent,
      },
      () => window.print()
    );
    // window.print();
  }

  render() {
    const disabled = this.state.keyGradoSelected ? false : true;

    if (this.state.showBoletines) {
      // console.log(this.state.grados[this.state.keyGradoSelected].nombre);
      return (
        <Home>
          <BoletinStudent
            estudiantes={
              this.state.grados[this.state.keyGradoSelected].estudiantes
            }
            planilla={this.state.planilla}
            grado={this.state.grados[this.state.keyGradoSelected]}
            asignaturas={this.state.asignaturasByGrado}
            clickPreviewBoletin={this.clickPreviewBoletin.bind(this)}
            clickPrintBoletin={this.clickPrintBoletin.bind(this)}
            keyEstudiante={this.state.keyEstudiante}
            rowSelected={this.state.keyEstudiante}
          />
        </Home>
      );
    }
    return (
      <div>
        <Home>
          <Grid>
            {this.state.showNoData ? (
              <Row className="show-grid">
                <Col xs={12} md={8}>
                  <Alert
                    bsStyle="danger"
                    onDismiss={this.closeNoDataException.bind(this)}
                  >
                    {`No se Econtro Datos para  Grado  : ${
                      this.state.grados[this.state.keyGradoSelected].nombre
                    }`}
                    <br></br>
                    {/* <Button bsStyle="primary" onClick={}>Cerrar</Button> */}
                  </Alert>
                </Col>
              </Row>
            ) : (
              ""
            )}
            <Row className="show-grid">
              <Col xs={12} md={8}>
                <div className="formPlanilla">
                  <h3>
                    <Label bsStyle="primary"> BOLETINES</Label>
                    <br></br>
                  </h3>
                </div>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={12} md={8}>
                <center>
                  <div>
                    <InputGradoPeriodo
                      onSubmit={this.showBoletinesStudent.bind(this)}
                      valueGradoSelected={this.state.keyGradoSelected}
                      changeGradoData={this.changeData.bind(this)}
                      dataGrado={this.state.grados.sort(
                        (beforeData, afterData) =>
                          parseInt(beforeData.orden) - parseInt(afterData.orden)
                      )}
                      disabled={disabled}
                      showPeriodo={false}
                      labelButton="Ir a Boletines"
                    />
                  </div>
                </center>
              </Col>
            </Row>
          </Grid>
        </Home>
      </div>
    );
  }
}

export default DataBoletines;
