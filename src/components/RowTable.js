
import React,{Component} from 'react';
import {Table,FormGroup,FormControl } from 'react-bootstrap';

class RowTable extends Component {
  constructor(){
    super();
    this.state = {
      desempeno : '',
      // estudiantes : {}
    }
  }

  onChangeNotas(e){
    //Se repite en todos los campos de la tabla
    let nota = e.target.value;
     if(nota => 1 && nota <= 5){
       if(nota > 4){
            this.setState({
              desempeno : 'Superior'
            })
        }else if (nota > 3 && nota <= 4) {
          this.setState({
            desempeno : 'Alto'
          })
        }
     }
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
                  <FormControl componentClass="textarea" placeholder="textarea" />
                </FormGroup>
              </td>
              <td>
                <FormGroup controlId="formControlsText">
                  <FormControl  id="formControlsText"
                    onChange={this.onChangeNotas.bind(this)}
                    type="text"
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
                      placeholder="Horas"/>
                    </FormGroup>
                  </td>
                </tr>
          )
      }
    }


      export default RowTable ;
