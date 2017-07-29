import React, { Component } from 'react';
import {Grid,Row,Col,Button } from 'react-bootstrap';
import ControlsSelect from './ControlsSelect';
import Planilla from './Planilla';

class Informe extends Component {
  constructor(){
    super();
    this.state = {
      keyGradoSelected : 'grado1',
      keyPeriodoSelected: 'periodo1',
      isPlanilla: false
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
        <Grid>
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
        </Grid>
      </div>
    );
  }
}

export default Informe;
