import React from 'react';
import {Grid,Row,Col,Button } from 'react-bootstrap';
import ControlsSelect from './ControlsSelect';
import "./InputGradoPeriodo.css"
const GradoPeriodo = (props) => {
  return (
    <div id="form">
      <Grid >
        <Row className="show-grid">
          <form onSubmit={props.onSubmit}>
            <Col xs={12} md={6} >
              <ControlsSelect title="Seleccione Grado"
                name="keyGradoSelected"
                valueSelected={props.valueGradoSelected}
                changeData={props.changeGradoData}
                data={props.dataGrado}/>
              </Col>
              <Col xs={6} md={6}>
                {props.showPeriodo &&   <ControlsSelect title="Seleccione Periodo"
                  name="keyPeriodoSelected"
                  valueSelected={props.valuePeriodoSelected}
                  changeData={props.changePeriodoData}
                  data={props.dataPeriodo}/> }
                </Col>
                <Col xs={12} md={12}>
                  <center><Button  disabled={props.disabled} bsStyle="primary" type="submit"> {props.labelButton}</Button></center>
                </Col>
              </form>
            </Row>
          </Grid>
        </div>
      )
    }
    export default GradoPeriodo;
