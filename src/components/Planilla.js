import React, { Component } from 'react';
import {Grid,Row,Col,Button,Label,Table } from 'react-bootstrap';
import {Base, firebase} from '../Base';
import ControlsSelect from './ControlsSelect';
import RowTable from './RowTable';
import HeaderTable from './HeaderTable';
import Alert from './AlertStudentData';
// import CuadroDescriptivo from './CuadroDescriptivo';
import '../App.css';

class Planilla extends Component {
  constructor(){
    super();
    this.state = {
      asignaturas:{},
      keyAsignaturaSelected : '',
      estudiantes : {},
      keyPlanilla : '',
      alertVisible: true
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
        // this.uploadStudents(planilla[0].asignatura.asignatura1.estudiantes)
        // this.setState({
        //   planilla
        // })
      }else {
        // this.uploadStudents(this.props.gradoSelected.estudiantes);
        this.createNewPlanilla();
      }
    }).catch(error => {
      //handle error
      console.log("Error Consultando Planillas  "  + error);
    })
  }

  onChangeAsignatura(e){

    this.setState({
      keyAsignaturaSelected : e.target.value
    })

    this.findPlanillasByAsignatura(e.target.value)
    // this.uploadStudents(this.props.gradoSelected.estudiantes);
  }

  findPlanillasByAsignatura(asignaturaKey){
    Base.fetch('planillas', {
      context: this,
      asArray: true,
      queries: {
        orderByChild: 'grado',
        equalTo : this.props.gradoSelected.nombre
      }
    }).then(data => {
      let planilla = data.filter((planilla) => planilla.periodo === this.props.periodoSelected);
      console.log(planilla);
      if(planilla[0][asignaturaKey]){
        this.uploadStudents(planilla[0][asignaturaKey].estudiantes , planilla[0].key);
      }else {
        this.uploadStudents(this.props.gradoSelected.estudiantes, planilla[0].key);
      }
    }).catch(error => {
      //handle error
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

  uploadStudents(students, keyPlani){
    this.setState({
      estudiantes : {...students},
      keyPlanilla : keyPlani
    })
  }

  submitPlantilla(){
    let estudiantes = {...this.state.estudiantes};
    let dataStudentForm = {};
    dataStudentForm = {
      nombre : this.state.asignaturas[this.state.keyAsignaturaSelected].nombre,
      estudiantes : estudiantes
    }
    var usersRef = firebase.database().ref(`planillas/${ this.state.keyPlanilla}`);
    usersRef.child(this.state.keyAsignaturaSelected).set(dataStudentForm);
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
      console.log("Fallo Consultar Asignaturas");
    })
  }

  onChangeStudent(key, estudiante){
    let estudiantes = {...this.state.estudiantes};
    estudiantes[key] = estudiante;
    this.setState({
      estudiantes
    })
  }

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  render(){
    const columns = ['Nombre Del Estudiante', 'Descripcion Del Desempeño', 'Nota', 'DS = Desempeño' ,'H/S'];
    return(
      <Grid>
        {this.state.alertVisible ?<Alert handleDismiss= {this.handleAlertDismiss.bind(this)}/> : ""}
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
