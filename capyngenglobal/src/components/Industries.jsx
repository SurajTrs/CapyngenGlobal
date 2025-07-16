import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style.css'; 
import {
  BsBank,
  BsBroadcast,
  BsMortarboard,
  BsHeartPulse,
  BsFuelPump,
  BsTools,
  BsCart,
  BsImage,
  BsBoxSeam,
  BsLightning,
  BsCpu,
  BsController,
  BsBuilding,
  BsAirplane
} from 'react-icons/bs';


const industries = [
  { icon: <BsBank />, title: 'Banking & Capital Markets' },
  { icon: <BsBroadcast />, title: 'Communications, Media & Information Services' },
  { icon: <BsMortarboard />, title: 'Education & EdTech' },
  { icon: <BsHeartPulse />, title: 'Healthcare & Fitness' },
  { icon: <BsFuelPump />, title: 'Oil & Gas' },
  { icon: <BsTools />, title: 'Manufacturing' },
  { icon: <BsCart />, title: 'Retail & E-Commerce' },
  { icon: <BsImage />, title: 'Real Estate' },
  { icon: <BsBoxSeam />, title: 'Consumer Goods & Distribution' },
  { icon: <BsLightning />, title: 'Energy, Resources & Utilities' },
  { icon: <BsCpu />, title: 'High-Tech & Blockchain' },
  { icon: <BsController />, title: 'Gaming' },
  { icon: <BsBuilding />, title: 'Public Sector' },
  { icon: <BsAirplane />, title: 'Travel & Logistics' },
];

const Industries = () => {
  return (
   
    <section className=" industries-section-back" >
         <div className="py-5 px-5 industries-section">
      <Container>
        <h3 className="text-center text-white mb-5">
          Select your industry. Discover our impact.
        </h3>
        <Row>
          <Col md={6}>
            {industries.slice(0, 7).map((item, index) => (
              <div key={index} className="industry-item mb-3 d-flex align-items-center">
                <div className="industry-icon">{item.icon}</div>
                <div className="industry-text">{item.title}</div>
              </div>
            ))}
          </Col>
          <Col md={6}>
            {industries.slice(7).map((item, index) => (
              <div key={index} className="industry-item mb-3 d-flex align-items-center">
                <div className="industry-icon">{item.icon}</div>
                <div className="industry-text">{item.title}</div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
      </div>
    </section>
  );
};

export default Industries;
