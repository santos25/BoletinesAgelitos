import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Home from './containers/Home';
import Informe from './components/Informe';
import Base from './Base';

class App extends Component {
constructor(){
  super();
  this.state = {
      grados : '',
      periodos : '',
  }
}

componentWillMount(){
  this.ref = Base.syncState(`grados`, {
    context: this,
    state: 'grados',
  });
}

componentWillUnmount(){
  Base.removeBinding(this.ref);
}

render() {
  return (
    <div className="App">
      <Home>
          <Informe header="Informe De Desempeño" />
      </Home>
    </div>
  );
}
}

export default App;
