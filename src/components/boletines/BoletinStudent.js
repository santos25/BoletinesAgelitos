import React  from 'react';
import {Grid,Row,Col,Table} from 'react-bootstrap';
import HeaderTable from '../planilla/HeaderTable';
import RowTableBoletin from './RowTableBoletin';
import PreviewBoletin from './PreviewBoletin';
// import PrintTemplate  from 'react-print';
import PrintBoletin  from './PrintBoletin';

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
              <div id="react-no-print">
                <PreviewBoletin planilla={props.planilla}
                  asignaturas={props.asignaturas}
                  keyEstudiante={props.keyEstudiante}
                  estudiantes={props.estudiantes}/>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <PrintBoletin planilla={props.planilla}
                  asignaturas={props.asignaturas}
                  keyEstudiante={props.keyEstudiante}
                  estudiantes={props.estudiantes}/>
              </Col>
            </Row>
          </Grid>
        </div>
      )
    }


    export default BoletinStudent;
