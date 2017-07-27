import React, { Component } from 'react';
import {Grid,Row,Col,Button } from 'react-bootstrap';
import ControlsSelect from './ControlsSelect';
import Planilla from './Planilla';
class Informe extends Component {
  constructor(){
    super();
    this.state = {
      gradoSelected : '',
      periodoSelected: '',
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
    const disabled =  this.state.gradoSelected && this.state.periodoSelected? false : true;
    if(this.state.isPlanilla){
      return (
              <Planilla periodoSelected={this.state.periodoSelected}
                        gradoSelected={this.state.gradoSelected}
                        />
      )
    }

    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <form onSubmit={this.showPlanilla.bind(this)}>
              <Col xs={12} md={6} >
                <ControlsSelect title="Seleccione EL Grado"
                  name="gradoSelected"
                  valueSelected={this.state.gradoSelected}
                  changeData={this.changeData.bind(this)}
                  data={this.props.grados}/>
                </Col>
                <Col xs={6} md={6}>
                  <ControlsSelect title="Seleccione EL Periodo"
                    name="periodoSelected"
                    valueSelected={this.state.periodoSelected}
                    changeData={this.changeData.bind(this)}
                    data={this.props.periodos}/>
                  </Col>
                  <Button disabled={disabled} bsStyle="primary" type="submit"> Ir a Planillas</Button>
                </form>
              </Row>
            </Grid>
          </div>
        );
      }
    }

    export default Informe;
