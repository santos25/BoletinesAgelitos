import React, { Component } from 'react';
import {BrowserRouter,  Route} from 'react-router-dom';
import App from './App';
import DataBoletines from './boletines/DataBoletines';
import Welcome from './general/Welcome';

class Root extends Component {

  render(){
    return(
          <BrowserRouter>
            <div>
              <Route exact={true} path="/informe" component={App}/>
              <Route exact={true} path="/boletines" component={DataBoletines}/>
              <Route exact={true} path="/" component={Welcome}/>
            </div>
          </BrowserRouter>
    )
  }

}


export default Root;
