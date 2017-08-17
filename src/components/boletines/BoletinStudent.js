import React  from 'react';
import {Grid,Row,Col,Table} from 'react-bootstrap';
import HeaderTable from '../planilla/HeaderTable';
import RowTableBoletin from './RowTableBoletin';
import PreviewBoletin from './PreviewBoletin';
import PrintTemplate  from 'react-print';

const BoletinStudent = (props) => {
  const columns = ['Nombre Del Estudiante', 'Ver', 'Imprimir'];
  // console.log(props);
  return(
    <div>
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={4}>
            <div id="react-no-print">
              <Table striped bordered condensed hover>
                <HeaderTable  columns={columns}/>
                <RowTableBoletin estudiantes={props.estudiantes}
                                clickPreviewBoletin={props.clickPreviewBoletin}
                                clickPrintBoletin={props.clickPrintBoletin}/>
              </Table>
            </div>
          </Col>

          <Col xs={12} md={8}>
            <PreviewBoletin planilla={props.planilla}
                            asignaturas={props.asignaturas}
                            keyEstudiante={props.keyEstudiante}/>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}


export default BoletinStudent;
