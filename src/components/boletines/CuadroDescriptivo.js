import React from 'react';

const CuadroDescriptivo = (props) => {

  return (
    <div className="cuadroDescriptivo">
      <table>
        <caption>Cuadro  Explicativo</caption>
      <thead>
        <tr>
          <th>Convenciones</th>
          <th>Desempeño</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td>4,6 - 5,0	</td>
          <td>S = Superior</td>
        </tr>
        <tr>
          <td>4,0 - 4,5	</td>
          <td>A =  Alto</td>
        </tr>
        <tr>
          <td>3,0 - 3,9	</td>
          <td>B = Básico</td>
        </tr>
        <tr>
          <td>1,0 - 2,9	</td>
          <td>B.J = Bajo</td>
        </tr>
      </tbody>
      </table>
    </div>
  )
}

export default CuadroDescriptivo;
