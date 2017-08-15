import React, { Component } from 'react';
import {BrowserRouter,  Route} from 'react-router-dom';
import App from './App';
import DataBoletines from './boletines/DataBoletines';

class Root extends Component {

  render(){
    return(
          <BrowserRouter>
            <div>
              <Route exact={true} path="/informe" component={App}/>
              <Route exact={true} path="/" component={App}/>
            </div>
          </BrowserRouter>
    )
  }

}


export default Root;
