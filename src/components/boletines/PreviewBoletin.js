import React from 'react';
import {Grid,Row,Col,Table,Label} from 'react-bootstrap';
import HeaderTable from '../planilla/HeaderTable';
// import HeaderTable from '../planilla/HeaderTable';
// import RowTableBoletin from './RowTableBoletin';

const PreviewBoletin = (props) => {
  const columns = ['Asignatura','Descripcion Del Desempeño', 'Nota', 'DS' ,'H/S'];
  // const columns = ['Nombre Del Estudiante', 'Ver', 'Imprimir'];
  const {planilla , asignaturas , keyEstudiante} = props;
  return(
    <div>
      <div className="formPlanilla">
        <h4><Label bsStyle="default">INFORME DEL DESEMPEÑO DEL ESTUDIANTE</Label></h4>
      </div>
      <Table striped bordered condensed hover>
        <HeaderTable  columns={columns}/>
        <tbody>
          {Object.keys(asignaturas).map ((key, i) => {
            if (planilla[0][key] && keyEstudiante !== '') {
              let estudianteData = planilla[0][key].estudiantes[keyEstudiante]
              console.log(estudianteData);
              return(
                <tr key={key}>
                  <td>{planilla[0][key].nombre}
                  </td>
                  <td><pre>{estudianteData.descripcion}</pre>
                </td>
                <td>{estudianteData.nota}
                </td>
                <td>{estudianteData.desempeno}
                </td>
                <td>{estudianteData.horas}
                </td>
              </tr>
            )
          }
        })}
      </tbody>
    </Table>
  </div>
)
}


export default PreviewBoletin;
