import React, { Component } from 'react';

import {Navbar } from 'react-bootstrap';

class Home extends Component {
  render() {

    return (
      <div >
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Instituto Angelitos Alegres</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Text>
              Signed in as: <Navbar.Link href="#">A. Santos</Navbar.Link>
            </Navbar.Text>
            <Navbar.Text pullRight>
              Have a great day!
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default Home;
