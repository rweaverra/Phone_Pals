import React from 'react';
import Intro from './homePageSections/Intro.jsx';
import HowitWorks from './homePageSections/HowitWorks.jsx';
import WhyPhonePals from './homePageSections/WhyPhonePals.jsx';
import Reviews from './homePageSections/Reviews.jsx';
import WriteUp from './homePageSections/WriteUp.jsx';
import Footer from './homePageSections/Footer.jsx';
import {
  Container, Col, Row
} from 'react-bootstrap';


function Body() {

  return (
    <div>
      <Intro />
      <HowitWorks />
      <WhyPhonePals />
      <Row>
        <Col>
          <Reviews />
        </Col>
        <Col>
        <WriteUp />
        </Col>
      </Row>

      <Footer />
    </div>
  )
}

export default Body;