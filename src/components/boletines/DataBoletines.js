import React, { Component } from 'react';
import {Label,Alert,Button,Row,Grid,Col} from 'react-bootstrap';
import Home from '../containers/Home';
import BoletinStudent from './BoletinStudent';
// import PrintBoletin from './PrintBoletin';
import InputGradoPeriodo from '../general/InputGradoPeriodo';
import {Base} from '../Base';

class DataBoletines extends Component {
  constructor(){
    super();
    this.state = {
      // estudiantes : {},
      planilla : [],
      keyGradoSelected : 'grado1',
      keyPeriodoSelected: 'periodo1',
      showBoletines : false,
      grados : '',
      periodos : '',
      asignaturasByGrado:{},
      showNoData: false,
      keyEstudiante : '',
      print: false
    }
  }

  componentWillMount(){
    this.ref = Base.syncState(`grados`, {
      context: this,
      state: 'grados',
    });

    this.ref = Base.syncState(`periodos`, {
      context: this,
      state: 'periodos',
    });

  }

  componentWillUnmount(){
    console.log("DEsmonto DataBoletines.js");
    Base.removeBinding(this.ref);
  }

  shouldComponentUpdate(nextProps, nextState){

    console.log(nextState);
    if (nextState.showBoletines ) {
      if(nextState.planilla.length === 0 ){
        return false
      }else {
        return true
      }
    }else {
      return true
    }

  }

  showBoletinesStudent(e){
    e.preventDefault();

    Base.fetch('planillas', {
      context: this,
      asArray: true,
      queries: {
        orderByChild: 'grado',
        equalTo : this.state.grados[this.state.keyGradoSelected].nombre
      }
    }).then(data => {
      let planilla = data.filter((planilla) => planilla.periodo === this.state.periodos[this.state.keyPeriodoSelected].nombre);
      if(planilla.length > 0){
        // console.log(planilla[0].grado);
        this.findAsignaturasByGrado(Object.keys(this.state.grados[this.state.keyGradoSelected].asignaturas) , planilla);
        // this.setState({
        //   showBoletines : true,
        //   planilla
        // })

      }else {
        this.setState(prevState => ({
          showNoData: true
        }))
      }
    }).catch(error => {
      //handle error
      console.log("Error Consultando Planillas  "  + error);
    })
  }

  findAsignaturasByGrado(keyAsignatura, planilla){
    Base.fetch('asignaturas', {
      context: this,
      asArray: false,
    }).then(data => {
      console.log(keyAsignatura);
      this.setState({
        asignaturasByGrado :  data[keyAsignatura],
        showBoletines : true,
        planilla
      })
    }).catch(error => {
      console.log("Fallo Consultar Asignaturas" , error);
    })

  }

  changeData(e){
    let name = e.target.name;
    this.setState({
      [name] : e.target.value
    })
  }

  closeNoDataException(){
    this.setState(prevState => ({
      showNoData: !prevState.showNoData
    }))
  }

  clickPreviewBoletin(keyStudent){
    console.log("Key Student " , keyStudent);
    this.setState({
      keyEstudiante : keyStudent
    })
  }

  clickPrintBoletin(keyStudent){
    console.log("Key Student print " , keyStudent);
    window.print();

  }

  render(){
    const disabled =  this.state.keyGradoSelected && this.state.keyPeriodoSelected? false : true;
    if (this.state.showBoletines) {

      // if(this.state.print){
      //     this.PrintComponent()
      //
      //
      // }
      return  ( <Home>
        <BoletinStudent estudiantes={this.state.grados[this.state.keyGradoSelected].estudiantes}
                        planilla={this.state.planilla}
                        asignaturas={this.state.asignaturasByGrado}
                        clickPreviewBoletin={this.clickPreviewBoletin.bind(this)}
                        clickPrintBoletin={this.clickPrintBoletin.bind(this)}
                        keyEstudiante= {this.state.keyEstudiante}/>
      </Home>
    )
  }
  return(
    <div>
      <Home>
        <Grid>
          {this.state.showNoData ?
            <Row className="show-grid">
              <Col xs={12} md={8}>
                <Alert bsStyle="danger" onDismiss={this.closeNoDataException.bind(this)}>
                  {`No se Econtro Datos para  Grado  : ${this.state.grados[this.state.keyGradoSelected].nombre}
                  y Periodo :  ${this.state.periodos[this.state.keyPeriodoSelected].nombre}`}
                  <br></br>
                  {/* <Button bsStyle="primary" onClick={}>Cerrar</Button> */}
                </Alert>
              </Col>
            </Row>
            : ''}
            <Row className="show-grid">
              <Col xs={12} md={8}>
                <div className="formPlanilla">
                  <h3><Label bsStyle="default"> BOLETINES</Label><br></br></h3>
                </div>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={12} md={8}>

                <InputGradoPeriodo onSubmit={this.showBoletinesStudent.bind(this)}
                  valueGradoSelected={this.state.keyGradoSelected}
                  changeGradoData={this.changeData.bind(this)}
                  dataGrado={this.state.grados}
                  valuePeriodoSelected={this.state.keyPeriodoSelected}
                  changePeriodoData={this.changeData.bind(this)}
                  dataPeriodo={this.state.periodos}
                  disabled={disabled}
                  labelButton="Ir a Boletines"
                />
              </Col>
            </Row>
          </Grid>
        </Home>

      </div>
    )
  }
}


export default DataBoletines;
