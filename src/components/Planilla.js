import React, { Component } from 'react';
import {Grid,Row,Col,Button,Label,Table } from 'react-bootstrap';
import Base from '../Base';
import ControlsSelect from './ControlsSelect';
import RowTable from './RowTable';
import HeaderTable from './HeaderTable';
// import CuadroDescriptivo from './CuadroDescriptivo';
import '../App.css';

class Planilla extends Component {
  constructor(){
    super();
    this.state = {
      asignaturas:{},
      keyAsignaturaSelected : '',
      estudiantes : {},
    }
  }

  componentWillMount(){
    this.findPlanillasByPeriodAndGrado();
  }

  componentWillUnmount(){
    // Base.removeBinding(this.ref);
  }

  componentDidMount(){
    this.getAsignaturas(Object.keys(this.props.gradoSelected.asignaturas));
  }

  onChangeAsignatura(e){
    this.setState({
      keyAsignaturaSelected : e.target.value
    })
  }

  createNewPlanilla(){
    let planilla = {};
    planilla.ano = new Date().getFullYear();
    planilla.periodo = this.props.periodoSelected;
    planilla.grado = this.props.gradoSelected.nombre;
    planilla.asignatura = {}
    Base.post(`planillas/${ new Date().getFullYear()+this.props.gradoSelected.nombre + this.props.periodoSelected}`, {
      data: planilla
    }).then(() => {
      console.log("Guardado Exitoso");
    }).catch(err => {
      // handle error
      console.log("Error al registrar Planilla Nueva");
    });
  }

  findPlanillasByPeriodAndGrado(){

    Base.fetch('planillas', {
      context: this,
      asArray: true,
      queries: {
        orderByChild: 'grado',
        equalTo : this.props.gradoSelected.nombre
      }
    }).then(data => {
      let planilla = data.filter((planilla) => planilla.periodo === this.props.periodoSelected);
      if(planilla.length > 0){
        this.uploadStudents(planilla[0].asignatura.asignatura1.estudiantes)
      }else {
        this.uploadStudents(this.props.gradoSelected.estudiantes);
        this.createNewPlanilla();
      }
    }).catch(error => {
      //handle error
      console.log("Error Consultando Planillas  "  + error);
    })
  }

  uploadStudents(students){
    this.setState({
      estudiantes : {...students},
    })
  }

  submitPlantilla(){
    let date = new Date();
    let asignatura = this.state.asignaturas[this.state.keyAsignaturaSelected];
    let estudiantes = {...this.state.estudiantes};
    let planilla = {};

    planilla.asignatura = {
      [this.state.keyAsignaturaSelected] : {
        nombre : asignatura.nombre,
        estudiantes : estudiantes
      }
    }


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

  onChangeStudent(key, estudiante){
    let estudiantes = {...this.state.estudiantes};
    estudiantes[key] = estudiante;
    this.setState({
      estudiantes
    })
  }

  render(){
    const columns = ['Nombre Del Estudiante', 'Descripcion Del Desempeño', 'Nota', 'DS = Desempeño' ,'H/S'];
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
              <Table striped bordered condensed hover>
                <HeaderTable  columns={columns}/>
                <RowTable estudiantes={this.state.estudiantes}
                  onChangeStudent={this.onChangeStudent.bind(this)}  />

                </Table>
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
