import React, { Component } from 'react';
import {Label,Grid,Row,Col } from 'react-bootstrap';
import Planilla from './Planilla';
import InputGradoPeriodo from '../general/InputGradoPeriodo'
import Alert from 'react-s-alert';

class Informe extends Component {
  constructor(){
    super();
    this.state = {
      keyGradoSelected : '',
      keyPeriodoSelected: '',
      isPlanilla: false
    }
  }

  showPlanilla(e){
    e.preventDefault();
    if (this.state.keyPeriodoSelected === 'periodo1') {
      this.setState(prevState => ({
        isPlanilla: !prevState.isPlanilla
      }))
    }else {
      Alert.error('Seleccione Periodo 1!', {
        position: 'bottom-left',
        effect: 'scale',
        timeout: 3000
      });
    }

  }

  changeData(e){
    let name = e.target.name;

    this.setState({
      [name] : e.target.value
    })
  }


  render() {
    const disabled =  this.state.keyGradoSelected && this.state.keyPeriodoSelected? false : true;

    if(this.state.isPlanilla){
      return (
        <Planilla periodoSelected={this.props.periodos[this.state.keyPeriodoSelected].nombre}
          gradoSelected={this.props.grados[this.state.keyGradoSelected]}
        />
      )
    }

    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <div className="formPlanilla">
                <h3><Label bsStyle="primary"> Planilla </Label><br></br></h3>
              </div>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <InputGradoPeriodo onSubmit={this.showPlanilla.bind(this)}
                valueGradoSelected={this.state.keyGradoSelected}
                changeGradoData={this.changeData.bind(this)}
                dataGrado={this.props.grados.sort((beforeData,afterData) => parseInt(beforeData.orden) - parseInt(afterData.orden))}
                valuePeriodoSelected={this.state.keyPeriodoSelected}
                changePeriodoData={this.changeData.bind(this)}
                dataPeriodo={this.props.periodos}
                disabled={disabled}
                showPeriodo={true}
                labelButton="Ir a Planillas"
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}



export default Informe;
