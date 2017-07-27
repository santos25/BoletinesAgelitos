import React, { Component } from 'react';
import {Grid,Row,Col,Button,Label } from 'react-bootstrap';

class Planilla extends Component {
  constructor(){
    super();

  }

  render(){
    return(
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={6} >
            <h4> Periodo : <Label bsStyle="success">{this.props.periodoSelected}</Label></h4>
          </Col>
          <Col xs={12} md={6} >
            <h4> Grado : <Label bsStyle="success">{this.props.gradoSelected}</Label> </h4>
          </Col>
          <Col xs={12} md={6} >
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Planilla;
