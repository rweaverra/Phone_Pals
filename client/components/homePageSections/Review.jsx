import React from 'react';
import {
  Container, Col, Row
} from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';


function Review() {

  return (
    <Container className="raw-individual-review">
      <Row>
        <Col className="no-left-padding">
          <Box component="fieldset" mb={1} borderColor="transparent" className="no-left-padding">
            <Rating name="read-only" value="5" precision={0.25} readOnly />
          </Box>
        </Col>
        <Col>
          8/14/2020
        </Col>
      </Row>
      <Row>
        <h5>Monae | Lakewood</h5>
      </Row>

      <Row>
      "He was awesome very professional quick and easy to work with I will return if I ever have a issue with my phone!"
      </Row>
      <Row>


      </Row>
        <Divider />

    </Container>

  );
}

export default Review;
