import React, { Component } from 'react';
import {} from 'react-bootstrap';
import Home from '../containers/Home';
import BoletinStudent from './BoletinStudent';

class DataBoletines extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

render(){
  return(
    <div>
      <Home>
        <BoletinStudent/>
      </Home>
    </div>
  )
}
}


export default DataBoletines;
