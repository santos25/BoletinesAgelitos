import React, { Component } from 'react';
import {Label } from 'react-bootstrap';
import Planilla from './Planilla';
import InputGradoPeriodo from '../general/InputGradoPeriodo'

class Informe extends Component {
  constructor(){
    super();
    this.state = {
      keyGradoSelected : '',
      keyPeriodoSelected: ''
      // isPlanilla: false
    }
  }

  showPlanilla(e){
    e.preventDefault();
    this.setState(prevState => ({
      isPlanilla: !prevState.isPlanilla
    }))
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
        <div className="formPlanilla">
          <h3><Label bsStyle="default"> PLANILLAS </Label><br></br></h3>
        </div>
        <InputGradoPeriodo onSubmit={this.showPlanilla.bind(this)}
                          valueGradoSelected={this.state.keyGradoSelected}
                          changeGradoData={this.changeData.bind(this)}
                          dataGrado={this.props.grados}
                          valuePeriodoSelected={this.state.keyPeriodoSelected}
                          changePeriodoData={this.changeData.bind(this)}
                          dataPeriodo={this.props.periodos}
                          disabled={disabled}
                          labelButton="Ir a Planillas"
        />
        {/* <Grid>
          <Row className="show-grid">
            <form onSubmit={this.showPlanilla.bind(this)}>
              <Col xs={12} md={6} >
              <ControlsSelect title="Seleccione Grado"
              name="keyGradoSelected"
              valueSelected={this.state.keyGradoSelected}
              changeData={this.changeData.bind(this)}
              data={this.props.grados}/>
            </Col>
            <Col xs={6} md={6}>
              <ControlsSelect title="Seleccione Periodo"
                name="keyPeriodoSelected"
                valueSelected={this.state.keyPeriodoSelected}
                changeData={this.changeData.bind(this)}
                data={this.props.periodos}/>
                <Button disabled={disabled} bsStyle="primary" type="submit"> Ir a Planillas</Button>
              </Col>
            </form>
          </Row>
        </Grid> */}
      </div>
    );
  }
}

export default Informe;
