
import React,{Component} from 'react';
import {FormGroup,FormControl,Label } from 'react-bootstrap';

class RowTable extends Component {

  changeDataRow(value, name,keyEstudiante, desempeno){

    let estuEdit = {...this.props.estudiantes[keyEstudiante], [name] : value};
    if(desempeno){
      estuEdit.desempeno = desempeno;
      estuEdit.horas = 5;
    }
    this.props.onChangeStudent(keyEstudiante,estuEdit);

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

  renderHS(excludehs, estudiante , style){
      return(
        <td style={style}>
          <h3 className="formPlanilla"><Label bsStyle="info">{estudiante.horas || ''}</Label></h3>
        </td>
      )
  }

  renderRow(key){
    let estudiante = this.props.estudiantes[key];
    // rowHS = renderRow(this.props.excludehs);
    const style = {
      width : 90
    }
    let rowHS ; 
    if (!this.props.excludehs) {
      rowHS = this.renderHS(estudiante, style);
    }

    return(
      <tr key={key}>

        <td style={{width : 150}}>
          {estudiante.nombre + " " + estudiante.apellido}
        </td>
        <td>
          <FormGroup controlId="formControlsTextarea">
            <FormControl  onChange={(e) => this.onChangeRowStudent(e, key)}
              componentClass="textarea"
              style={{ height: 150 }}
              className="textarea"
              name="descripcion"
              value={estudiante.descripcion || ''}
              placeholder="Descripcion" />
            </FormGroup>
          </td>
          <td style={style}>
            <FormGroup  controlId="formControlsText">
              <FormControl  id="formControlsText"
                onChange={(e) => this.onChangeRowStudent(e, key)}
                type="number"
                min="0"
                name="nota"
                value={estudiante.nota || ''}
                placeholder="Nota"/>
              </FormGroup>
            </td>
            <td style={style}>
              <h3 className="formPlanilla"><Label bsStyle="info">{ estudiante.desempeno || ''}</Label></h3>
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
