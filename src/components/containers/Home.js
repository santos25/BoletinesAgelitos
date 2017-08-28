import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar,NavItem,Nav,Label } from 'react-bootstrap';
// import escudo from '../escudo.jpg';

class Home extends Component {
  render() {

    return (
      <div >
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
                  <Link to={'/'}>
                      Instituto Angelitos Alegres
                  </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem >
                <Link to={'/informe'}>
                <h4><Label bsStyle="primary">Ir a Planillas</Label></h4>
              </Link>
            </NavItem>
            <NavItem  >
              <Link to={'/boletines'}>
              <h4><Label bsStyle="primary">Ir a Boletines</Label></h4>
            </Link>
          </NavItem>
        </Nav>
        <Navbar.Text>
          {/* Session: <Navbar.Link href="#">Profesor</Navbar.Link> */}
        </Navbar.Text>
        <Navbar.Text pullRight>
          Buen Día!
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    {this.props.children}
  </div>
);
}
}

export default Home;
