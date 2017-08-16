import React from 'react';
import {Grid,Row,Col,Button } from 'react-bootstrap';
import ControlsSelect from './ControlsSelect';

const GradoPeriodo = (props) => {
  return (
    <Grid>
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
          <ControlsSelect title="Seleccione Periodo"
            name="keyPeriodoSelected"
            valueSelected={props.valuePeriodoSelected}
            changeData={props.changePeriodoData}
            data={props.dataPeriodo}/>
            <Button disabled={props.disabled} bsStyle="primary" type="submit"> {props.labelButton}</Button>
          </Col>
        </form>
      </Row>
    </Grid>
  )
}
export default GradoPeriodo;
