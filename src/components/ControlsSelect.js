  import React from 'react';
  import {FormGroup,FormControl,ControlLabel } from 'react-bootstrap';

  const formControlsSelect = (props) => {

  return(
    <FormGroup controlId="formControlsSelect">
      <ControlLabel>{props.title}</ControlLabel>
      <FormControl name={props.name} componentClass="select" placeholder="select"
                    value={props.valueSelected}  onChange={props.changeData}>
                    <option value="">---Escoger---</option>
        {Object.keys(props.data)
                    .map(key => <option key={key} value={key}>
                                  {props.data[key].nombre}
                                </option>)
        }
      </FormControl>
    </FormGroup>
  )
  }

  export default formControlsSelect;
