import React from 'react';
import Home from '../containers/Home';
import escudo from '../escudo.jpg';
import {Grid,Row,Col,Jumbotron,Label} from 'react-bootstrap';

const Welcome = (props) => {
  return (
    <div>
      <Home>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <Jumbotron>
                <div className="welcome" >
                  <h3><Label bsStyle="primary">ANGELITOS ALEGRES</Label></h3>
                  <img className="escudo"  src={escudo} alt="Escudo"></img>
                </div>
              </Jumbotron>
            </Col>
          </Row>
        </Grid>
      </Home>



    </div>
  )
}

export default Welcome;
