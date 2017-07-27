import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Home from './containers/Home';
import Informe from './components/Informe';
import Base from './Base';
import estudiantes from './Load-data';

class App extends Component {
constructor(){
  super();
  this.state = {
      grados : '',
      periodos : '',
      estudiantes:''
  }
}

componentWillMount(){
  this.ref = Base.syncState(`grados`, {
    context: this,
    state: 'grados',
  });

  this.ref = Base.syncState(`periodos`, {
    context: this,
    state: 'periodos',
  });

  // this.ref = Base.syncState(`grados/grado1/estudiantes`, {
  //   context: this,
  //   state: 'estudiantes',
  // });

}

componentDidMount(){
  // this.setState({
  //   estudiantes
  // })
}
componentWillUnmount(){
  Base.removeBinding(this.ref);
}

render() {
  return (
    <div className="App">
      <Home>
          <Informe header="Informe De Desempeño"
            grados={this.state.grados}
            periodos={this.state.periodos}/>
      </Home>
    </div>
  );
}
}

export default App;
