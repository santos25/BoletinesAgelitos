import React from 'react';
import {FormGroup,FormControl,Label,Button } from 'react-bootstrap';
import PrintTemplate  from 'react-print';

const PrintBoletin = (props) => {

  return(
    <div id="print-mount">
      <PrintTemplate>
        <div>
          <h3>All markup for showing on print</h3>
          <p>Write all of your "HTML" (really JSX) that you want to show
            on print, in here</p>
            <p>If you need to show different data, you could grab that data
              via AJAX on componentWill/DidMount or pass it in as props</p>
              <p>The CSS will hide the original content and show what is in your
                Print Template.</p>
              </div>
            </PrintTemplate>
          </div>

        )
      }

      export default PrintBoletin;
