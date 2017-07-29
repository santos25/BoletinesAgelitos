import React, { Component } from 'react';
import {Grid,Row,Col,Button,Label } from 'react-bootstrap';
import Base from '../Base';
import ControlsSelect from './ControlsSelect';
import FormEstudiantes from './FormEstudiantes';
// import CuadroDescriptivo from './CuadroDescriptivo';
import '../App.css';

class Planilla extends Component {
  constructor(){
    super();
    this.state = {
      asignaturas:{},
      keyAsignaturaSelected : '',
      desempeno : ''
      // estudiantes : {}
    }
  }

  componentWillMount(){
    // this.ref = Base.syncState(`grados`, {
    //   context: this,
    //   state: 'grados',
    // });
  }

  componentWillUnmount(){
    // Base.removeBinding(this.ref);
  }

  componentDidMount(){
    // const asig = Object.keys(this.props.gradoSelected.asignaturas);
    this.getAsignaturas(Object.keys(this.props.gradoSelected.asignaturas));
    // this.setState({
    //   estudiantes : this.props.gradoSelected.estudiantes
    // })
  }

  onChangeAsignatura(e){
    this.setState({
      keyAsignaturaSelected : e.target.value
    })
  }

  onChangeNotas(e){
    //Se repite en todos los campos de la tabla
   let nota = e.target.value;
   if(nota => 1 && nota <= 5){
     if(nota > 4){
          // this.setState({
          //   desempeno : 'Superior'
          // })
      }
   }
  }

  submitPlantilla(){
    console.log("Working on it");
  }
  getAsignaturas(keyAsignatura){
    Base.fetch('asignaturas', {
      context: this,
      asArray: false
    }).then(data => {
     this.setState({
       asignaturas :  data[keyAsignatura]
     })
    }).catch(error => {
      //handle error
    })
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
            <h4>
              <Label bsStyle="default">Grado : </Label>&nbsp;
              <Label bsStyle="success">{this.props.gradoSelected.nombre}</Label>
            </h4>
          </Col>
          <Col xs={12} md={6} >
            <ControlsSelect title="Seleccione Asignatura"
              name="keyGradoSelected"
              valueSelected={this.state.keyAsignaturaSelected}
              changeData={this.onChangeAsignatura.bind(this)}
              data={this.state.asignaturas}/>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12} >
              <div className="formPlanilla">
                <h3><Label bsStyle="default"> Informe de Desempeño de los Estudiantes</Label><br></br></h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} >
              <FormEstudiantes estudiantes={this.props.gradoSelected.estudiantes}
                               onChangeNotas={this.onChangeNotas.bind(this)}
                               desempeno={this.state.desempeno}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} >
              <div className="formPlanilla">
                <Button bsStyle="primary" type="submit" bsSize="large"
                        onClick={this.submitPlantilla.bind(this)}> Guardar Planilla</Button>
              </div>
            </Col>
          </Row>

        </Grid>
      )
    }
  }

  export default Planilla;
