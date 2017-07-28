
import React from 'react';
import {Form,FormGroup,ControlLabel,Button,FormControl } from 'react-bootstrap';

const FormEstudiantes = (props) =>{
  return (
    <Form inline>
      <ControlLabel>$$$$$$$</ControlLabel>
      {' '}
      <FormGroup controlId="formControlsTextarea">
        <ControlLabel>######### </ControlLabel>
        <FormControl componentClass="textarea" placeholder="textarea" />
      </FormGroup>
      {' '}
      <FormGroup controlId="formControlsText">
        <ControlLabel>%</ControlLabel>
        <FormControl  id="formControlsText"
          type="text"
          placeholder="Enter Nota"/>
        </FormGroup>
        {' '}
        <FormGroup controlId="formControlsText">
          <ControlLabel>DS</ControlLabel>
          <FormControl  id="formControlsText"
            type="text"
            placeholder="Enter Desempeño"/>
          </FormGroup>
      </Form>
    )
  }


  export default FormEstudiantes ;
