import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar,NavItem,Nav } from 'react-bootstrap';

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
                Ir a Planillas
              </Link>
            </NavItem>
            <NavItem  >
              <Link to={'/boletines'}>
              Ir a Boletines
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
