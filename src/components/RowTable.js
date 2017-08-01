
import React,{Component} from 'react';
import {Table,FormGroup,FormControl } from 'react-bootstrap';

class RowTable extends Component {
  constructor(){
    super();
    this.state = {
      desempeno : '',
      planillas : {}
      // estudiantes : {}
    }
  }

componentWillMount(){
  // this.ref = Base.syncState(`planillas`, {
  //   context: this,
  //   state: 'planillas',
  // });

}
  changeDesempeno(desempeno){
    this.setState({
      desempeno : desempeno
    })
  }


  onChangeRowStudent(e){

    let name = e.target.name;
    console.log(name);
    // if(nota <= 5){
    //   if(nota >= 4.6){
    //     this.changeDesempeno('S');
    //   }else if (nota >= 4.0) {
    //     this.changeDesempeno('A');
    //   }else if (nota >= 3.0) {
    //     this.changeDesempeno('B');
    //   }else {
    //     this.changeDesempeno('B.J');
    //   }
    // }
  }


  render(){
    // console.log(props);
    return(
      // null
      <tr>
        <td>{this.props.estudiante.nombre + " " +
          this.props.estudiante.apellido}
        </td>
        <td>
          <FormGroup controlId="formControlsTextarea">
            <FormControl  onChange={this.onChangeRowStudent.bind(this)}
                      componentClass="textarea"
                      name="descripcion"
                      placeholder="textarea" />
          </FormGroup>
        </td>
        <td>
          <FormGroup controlId="formControlsText">
            <FormControl  id="formControlsText"
              onChange={this.onChangeRowStudent.bind(this)}
              type="text"
              name="nota"
              placeholder="Enter Nota"/>
            </FormGroup>
          </td>
          <td>
            <FormGroup controlId="formControlsText">
              <FormControl disabled="true"  id="formControlsText"
                type="text"
                value={this.state.desempeno}
              />
            </FormGroup>
          </td>
          <td>
            <FormGroup controlId="formControlsText">
              <FormControl width="25px"  id="formControlsText"
                type="text"
                name="horas"
                onChange={this.onChangeRowStudent.bind(this)}
                placeholder="Horas"/>
              </FormGroup>
            </td>
          </tr>
        )
      }
    }


    export default RowTable ;
