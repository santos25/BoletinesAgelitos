
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

    let estuEdit = {...this.state.estudiantes[keyEstudiante], [name] : value}
    let estudiantes = this.state.estudiantes[keyEstudiante] = estuEdit;
    this.setState({
      estudiantes
    })
    // this.setState((prevState) =>{
    //   desempenoChange : !prevState.desempenoChange
    // })
  }

  onChangeRowStudent(e, keyEstudiante){

    let name = e.target.name;
    // let estudiante = this.props.estudiantes[keyEstudiante];
    if(name === 'nota')  {
      if(e.target.value <= 5){
        if(e.target.value >= 4.6){
          this.changeDataRow(e.target.value, name,'S');
        }else if (e.target.value >= 4.0) {
          this.changeDataRow(e.target.value, name,'A');
        }else if (e.target.value >= 3.0) {
          this.changeDataRow(e.target.value, name,'B');
        }else {
          this.changeDataRow(e.target.value, name,'B.J');
        }
      }
    }else {
      this.changeDataRow(e.target.value , name ,keyEstudiante)
      // let estuEdit = {...this.state.estudiantes[keyEstudiante], [name] : e.target.value}
      // let estudiantes = this.state.estudiantes[keyEstudiante] = estuEdit;
      // this.setState({
      //   estudiantes
      // })
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
            console.log(this.state.estudiantes[keyEstudiante].descripcion);
            // let descripcion = this.state.estudiantes[keyEstudiante].descripcion
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
                      // value={descripcion}
                      placeholder="Descripcion" />
                    </FormGroup>
                  </td>
                  <td>
                    <FormGroup controlId="formControlsText">
                      <FormControl  id="formControlsText"
                        onChange={(e) => this.onChangeRowStudent(e, keyEstudiante)}
                        type="text"
                        name="nota"
                        // value={this.state.estudiantes[keyEstudiante].nota}
                        placeholder="Enter Nota"/>
                      </FormGroup>
                    </td>
                    <td>
                        <h3 className="formPlanilla">
                          {/* <Label bsStyle="info">{this.props.estudiantes[keyEstudiante].desempeno}</Label> */}
                        </h3>
                    </td>
                    <td>
                      <FormGroup controlId="formControlsText">
                        <FormControl width="25px"  id="formControlsText"
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
