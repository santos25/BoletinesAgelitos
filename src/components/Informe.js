import React, { Component } from 'react';
import {Grid,Row,Col } from 'react-bootstrap';

class Informe extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={6} >Grado</Col>
            <Col xs={6} md={6}> Periodo</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Informe;
