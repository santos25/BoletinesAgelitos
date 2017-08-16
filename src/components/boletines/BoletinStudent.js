import React, { Component } from 'react';
import {Grid,Row,Col,Table} from 'react-bootstrap';
import HeaderTable from '../planilla/HeaderTable';
import RowTableBoletin from './RowTableBoletin';

const BoletinStudent = (props) => {
  const columns = ['Nombre Del Estudiante', 'Ver', 'Imprimir'];

  return(
    <div>
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={4}>
            <Table striped bordered condensed hover>
              <HeaderTable  columns={columns}/>
              <RowTableBoletin estudiantes={props.estudiantes} />
            </Table>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}


export default BoletinStudent;
