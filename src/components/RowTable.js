
import React,{Component} from 'react';
import {Table,FormGroup,FormControl,Label } from 'react-bootstrap';

class RowTable extends Component {
  constructor(){
    super();
    this.state = {
      // desempenoChange : false,
      estudiantes : {}
    }
  }

  componentWillMount(){
    // this.ref = Base.syncState(`planillas`, {
    //   context: this,
    //   state: 'planillas',
    // });
    this.setState({
      estudiantes : {...this.props.estudiantes}
    })
  }

  changeDataRow(value, name,keyEstudiante, desempeno){
    // estudiante[name] = value;
    // estudiante['desempeno'] = desempeno
    let estudiantes = {...this.state.estudiantes};
    let estuEdit = {...estudiantes[keyEstudiante], [name] : value};
    estudiantes[keyEstudiante] = estuEdit;
    // console.log(estudiantes);
    this.setState({
      estudiantes
    })

  }

  onChangeRowStudent(e, keyEstudiante){

    let name = e.target.name;
    if(name === 'nota')  {
      if(e.target.value <= 5){
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


  render(){
    // console.log(props);
    return(
      // null
      <tbody>
        {
          Object.keys(this.props.estudiantes)
          .map((keyEstudiante) =>{
            // console.log(this.state.estudiantes[keyEstudiante].descripcion);
            let descripcion = this.state.estudiantes[keyEstudiante].descripcion;
            // let nota = this.state.estudiantes[keyEstudiante].nota;
            // let desempeno = this.state.estudiantes[keyEstudiante].desempeno;
            // let horas = this.state.estudiantes[keyEstudiante].horas;

            return(
              <tr key={keyEstudiante}>
                <td>{this.props.estudiantes[keyEstudiante].nombre + " " +
                  this.props.estudiantes[keyEstudiante].apellido}
                </td>
                <td>
                  <FormGroup controlId="formControlsTextarea">
                    <FormControl  onChange={(e) => this.onChangeRowStudent(e, keyEstudiante)}
                      componentClass="textarea"
                      name="descripcion"
                      value={descripcion}
                      placeholder="Descripcion" />
                    </FormGroup>
                  </td>
                  <td>
                    <input name="nota"
                      type="text"
                      value={descripcion}
                      onChange={(e) => this.onChangeRowStudent(e, keyEstudiante)}
                    />
                    {/* <FormGroup controlId="formControlsText">
                    <FormControl  id="formControlsText"
                    onChange={(e) => this.onChangeRowStudent(e, keyEstudiante)}
                    type="text"
                    name="nota"
                    value={descripcion}
                    placeholder="Enter Nota"/>
                  </FormGroup> */}
                </td>
                <td>
                  <h3 className="formPlanilla">
                    {/* <Label bsStyle="info">{desempeno}</Label> */}
                  </h3>
                </td>
                <td>
                  <FormGroup controlId="formControlsText">
                    <FormControl
                      id="formControlsText"
                      type="text"
                      name="horas"
                      // value={this.state.estudiantes[keyEstudiante].horas}
                      onChange={(e) => this.onChangeRowStudent(e, keyEstudiante)}
                      placeholder="Horas"/>
                    </FormGroup>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      )
    }
  }


  export default RowTable ;
