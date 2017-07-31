import React from 'react';


const HeaderTable = (props) => {

  return (
    <thead>
      <tr>
        {
          props.columns.map((colum,i) => <th key={i}>{colum}</th>)
        }
      
      </tr>
    </thead>
  )
}

export default HeaderTable;
