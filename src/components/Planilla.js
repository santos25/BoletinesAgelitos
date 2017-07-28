import React, { Component } from 'react';
import {Grid,Row,Col,Button,Label } from 'react-bootstrap';
import Base from '../Base';
import ControlsSelect from './ControlsSelect';
import FormEstudiantes from './FormEstudiantes';
import '../App.css';

class Planilla extends Component {
  constructor(){
    super();
    this.state = {
      asignaturas:{}
    }
  }

  componentWillMount(){

    this.ref = Base.syncState(`grados`, {
      context: this,
      state: 'grados',
    });
  }

  componentWillUnmount(){
    Base.removeBinding(this.ref);
  }

  componentDidMount(){
    console.log("");
  }
  onChangeGrado(e){
    console.log(e.target.value);
  }

  render(){
    return(
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={6} >
            <h4>
              <Label bsStyle="default">Periodo : </Label>&nbsp;
              <Label bsStyle="success">{this.props.periodoSelected}</Label>
            </h4>
          </Col>
          <Col xs={12} md={6} >
            <ControlsSelect title="Seleccione Asignatura"
              name="keyGradoSelected"
              valueSelected={this.state.keyPeriodoSelected}
              changeData={this.onChangeGrado.bind(this)}
              data={this.state.grados}/>
            </Col>
          </Row>
          
          <Row>
            <Col xs={12} md={12} >
              <div className="formPlanilla">
                <h3><Label bsStyle="default"> Informe del Desempeño de los ###############</Label><br></br></h3>
                <FormEstudiantes />
              </div>
            </Col>
          </Row>

        </Grid>
      )
    }
  }

  export default Planilla;
