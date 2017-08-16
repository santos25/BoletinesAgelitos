import React, { Component } from 'react';
import {Label,Alert,Button,Row,Grid,Col} from 'react-bootstrap';
import Home from '../containers/Home';
import BoletinStudent from './BoletinStudent';
import InputGradoPeriodo from '../general/InputGradoPeriodo';
import {Base} from '../Base';

class DataBoletines extends Component {
  constructor(){
    super();
    this.state = {
      // estudiantes : {},
      planilla : {},
      keyGradoSelected : '',
      keyPeriodoSelected: '',
      showBoletines : false,
      grados : '',
      periodos : '',
      showNoData: false
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
        console.log(planilla);
        this.setState({
          showBoletines : true
        })
      }else {
        this.setState(prevState => ({
          showNoData: true
        }))
      }
    }).catch(error => {
      //handle error
      console.log("Error Consultando Planillas  "  + error);
    })
    // this.setState(prevState => ({
    //   showBoletines: !prevState.isPlanilla
    // }))

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

  render(){
    const disabled =  this.state.keyGradoSelected && this.state.keyPeriodoSelected? false : true;
    if (this.state.showBoletines) {
      return  ( <Home>
        <BoletinStudent estudiantes={this.state.grados[this.state.keyGradoSelected].estudiantes}/>
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
