
import React,{Component} from 'react';
import {FormGroup,FormControl,Label,OverlayTrigger,Popover } from 'react-bootstrap';

class RowTable extends Component {


  changeDataRow(value, name,keyEstudiante, desempeno){
    if(name !== 'observacion'){
      let estuEdit = {...this.props.estudiantes[keyEstudiante], [name] : value};
      if(desempeno){
        estuEdit.desempeno = desempeno;
        if (!this.props.excludehs) {
          estuEdit.horas = this.props.horasByAsignatura.horas;
        }

      }
      this.props.onChangeStudent(keyEstudiante,estuEdit);
    }else{
        this.props.onChangeObservaciones(keyEstudiante, value)
    }
  }

  onChangeRowStudent(e, keyEstudiante){

    let name = e.target.name;
    if(name === 'nota')  {
      if(e.target.value <= 5 && e.target.value.length < 4){
        if(e.target.value >= 4.6){
          this.changeDataRow(e.target.value, name, keyEstudiante,'S');
        }else if (e.target.value >= 4.0) {
          this.changeDataRow(e.target.value, name, keyEstudiante,'A');
        }else if (e.target.value >= 3.0) {
          this.changeDataRow(e.target.value, name, keyEstudiante,'B');
        }else {
          this.changeDataRow(e.target.value, name, keyEstudiante,'B.J');
        }
      }
    }else {
      this.changeDataRow(e.target.value , name ,keyEstudiante)
    }
  }

  renderHS(estudiante , style){
    return(
      <td style={style}>
        <br></br><br></br>
        <h3 className="formPlanilla"><Label bsStyle="primary">{estudiante.horas || this.props.horasByAsignatura.horas}</Label></h3>
      </td>
    )
  }

  renderRow(key){
    let estudiante = this.props.estudiantes[key];
    //console.log(key);
    let observanEstudiante = this.props.observaciones[key];

    const style = {
      width : 80
    }
    let rowHS ;
    if (!this.props.excludehs) {
      rowHS = this.renderHS(estudiante, style);
    }

    const popoverHoverFocus = (
      <Popover id="popover-trigger-hover-focus" title="INFORMACIÓN">
        La observación es independiente de las asignaturas. Solo debe escribirla una sola vez,
        no en cada asignatura. Gracias  &#128512;
      </Popover>
    );

    return(
      <tr key={key}>
        {/* <td style={{width : 150}}>
        {estudiante.nombre + " " + estudiante.apellido}
      </td> */}
      <td>
        <b> ESTUDIANTE :  {estudiante.nombre + " " + estudiante.apellido}</b><br></br><br></br>
        <FormGroup controlId="formControlsTextarea">
          <FormControl  onChange={(e) => this.onChangeRowStudent(e, key)}
            componentClass="textarea"
            style={{ height: 100 }}
            className="textarea"
            name="descripcion"
            value={estudiante.descripcion || ''}
            placeholder="Descripcion Del Desempeño" />
          </FormGroup>
        </td>
        <td>
          <br></br><br></br>
          <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popoverHoverFocus}>
            <FormGroup controlId="formControlsTextarea">
              <FormControl  onChange={(e) => this.onChangeRowStudent(e, key)}
                componentClass="textarea"
                style={{ height: 100 }}
                className="textarea"
                name="observacion"
                value={observanEstudiante}
                placeholder="Observacion" />
              </FormGroup>
            </OverlayTrigger>

          </td>
          <td style={style}>
            <br></br><br></br>
            <FormGroup  controlId="formControlsText">
              <FormControl  id="formControlsText"
                onChange={(e) => this.onChangeRowStudent(e, key)}
                type="number"
                required
                min="0"
                name="nota"
                value={estudiante.nota || ''}
                placeholder="Nota"/>
              </FormGroup>
            </td>
            <td style={style}>
              <br></br><br></br>
              <h3 className="formPlanilla"><Label bsStyle="primary">{ estudiante.desempeno || ''}</Label></h3>
            </td>
            {rowHS}
          </tr>
        )
      }

      render(){
        // console.log(props);
        return(
          <tbody>
            {Object.keys(this.props.estudiantes).map(this.renderRow.bind(this))}
          </tbody>

        )
      }
    }




    export default RowTable ;
