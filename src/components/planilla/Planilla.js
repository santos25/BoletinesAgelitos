import React, { Component } from 'react';
import {Grid,Row,Col,Button,Label,Table } from 'react-bootstrap';
import {Base, firebase} from '../Base';
import ControlsSelect from '../general/ControlsSelect';
import RowTable from './RowTable';
import HeaderTable from './HeaderTable';
import AlertAsignatura from './AlertStudentData';
// import Modal from './ModalInformation'
// import CuadroDescriptivo from './CuadroDescriptivo';
import '../App.css';
import Alert from 'react-s-alert';

class Planilla extends Component {
  constructor(){
    super();
    this.state = {
      asignaturas:{},
      keyAsignaturaSelected : '',
      estudiantes : {},
      observaciones : {},
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

  shouldComponentUpdate(nextProps, nextState){
    return true;
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
      let planilla = data.filter((planilla) => planilla.periodo === this.props.periodoSelected && planilla.ano === 2019);

      if(planilla.length > 0){
      }else {
        this.createNewPlanilla();

      }
    }).catch(error => {
      //handle error
      console.log("Error Consultando Planillas "  + error);
    })
  }

  onChangeAsignatura(e){
    let sure = true;

    if(this.state.keyAsignaturaSelected !== '')
    sure = window.confirm( "SE BORRARÁN TODOS LOS DATOS QUE NO HAN SIDO GUARDADOS");


    if (sure){
      this.setState({
        keyAsignaturaSelected : e.target.value,
      });

      this.findPlanillasByAsignatura(e.target.value, false)
    }

  }

  findPlanillasByAsignatura(asignaturaKey, booleanToKnowIdPlanilla){
    Base.fetch('planillas', {
      context: this,
      asArray: true,
      queries: {
        orderByChild: 'grado',
        equalTo : this.props.gradoSelected.nombre
      }
    }).then(data => {
      let planilla = data.filter((planilla) => planilla.periodo === this.props.periodoSelected && planilla.ano === 2019);
      console.log(planilla)

      if(booleanToKnowIdPlanilla){
          this.createOrFindObservacionesStudent(planilla[0].key, true);
      }else{
        if(planilla[0][asignaturaKey]){
          this.uploadStudents(planilla[0][asignaturaKey].estudiantes , planilla[0].key);
          console.log(planilla[0]);
          // this.getObervacionesStudent(planilla[0].observaciones);
        }else {
          this.uploadStudents(this.props.gradoSelected.estudiantes, planilla[0].key);
          // this.getObervacionesStudent(planilla[0].observaciones);
        }
        this.getObervacionesStudent(planilla[0].observaciones);

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
    planilla.observaciones = {}

    Base.post(`planillas/${ new Date().getFullYear()+this.props.gradoSelected.nombre + this.props.periodoSelected}`, {
      data: planilla
    }).then(() => {
      console.log("Guardado Exitoso");
      this.findPlanillasByAsignatura("", true)
      // this.createObservacionesStudent();

    }).catch(err => {
      // handle error
      console.log("Error al registrar Planilla Nueva");
    });
  }

getObervacionesStudent(observaciones){
this.setState({
  observaciones
})

}

  createOrFindObservacionesStudent(keyPlanilla, createBool){
    if(createBool){
      Base.fetch('grados', {
        context: this,
        asArray: true,
        queries: {
          orderByChild: 'nombre',
          equalTo : this.props.gradoSelected.nombre
        }
      }).then(datas => {

      //  console.log(keyPlanilla);
        var usersRef = firebase.database().ref(`planillas/${ keyPlanilla}`);
        var observacion = {};
        datas.map((data,index) => Object.keys(data.estudiantes).map(key =>{
          observacion[key] = " ";
        }));
          usersRef.child('observaciones').set(observacion);
          this.setState({
            observaciones: observacion
          })
      }).catch(error => {
        //handle error
      })
    }else{

    }

  }


  uploadStudents(students, keyPlani , asignaturaKey){
    this.setState({
      estudiantes : {...students},
      keyPlanilla : keyPlani
      // keyAsignaturaSelected : asignaturaKey
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
    usersRef.child('observaciones').set(this.state.observaciones);

    // this.createObservacionesStudent();

    Alert.success('Planilla Guardada!', {
      position: 'bottom-left',
      effect: 'scale',
      timeout: 3000
    });
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

  onChangeObservacionStudent(key, valueObservacion){
    let observaciones = {...this.state.observaciones};
    observaciones[key] = valueObservacion;
    console.log(observaciones);
    this.setState({
      observaciones
    })
  }

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  render(){
    let  columns = [ 'ESTUDIANTE / DESCRIPCION DEL DESEMPEÑO','Observacion', 'Nota', 'DS = Desempeño'];
    if(!this.props.gradoSelected.excludeHS || false )  columns.push("H/S");

    return(
      <Grid>
        {this.state.alertVisible ?<AlertAsignatura handleDismiss= {this.handleAlertDismiss.bind(this)}/> : ""}
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
                  observaciones={this.state.observaciones}
                  onChangeObservaciones={this.onChangeObservacionStudent.bind(this)}
                  onChangeStudent={this.onChangeStudent.bind(this)}
                  excludehs={this.props.gradoSelected.excludeHS || false}
                  horasByAsignatura={ this.state.asignaturas[this.state.keyAsignaturaSelected] || ""}/>
                </Table>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} >
            <div className="formPlanilla">
                  <Button disabled={this.state.keyAsignaturaSelected ? false : true} bsStyle="primary" type="submit" bsSize="large"
                    onClick={this.submitPlantilla.bind(this)}> Guardar Planilla</Button>
                  </div>
                </Col>
              </Row>
              {/* <Modal showModalAsignatura={this.state.showModalAsignatura}
              close={this.closeModal.bind(this )}/> */}
            </Grid>
          )
        }
      }

      export default Planilla;
