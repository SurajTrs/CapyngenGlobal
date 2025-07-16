import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style.css';
import { BsCheckCircle, BsGem, BsBarChartLine, BsLightning } from 'react-icons/bs';
import analyticsImage from '../assets/analytics-team.jpg'; // Make sure the path is correct

const reasons = [
  {
    icon: <BsCheckCircle className="reason-icon" />,
    text: 'End-to-end digital transformation support tailored to your unique business needs.',
  },
  {
    icon: <BsGem className="reason-icon" />,
    text: 'Unparalleled expertise in full-stack IT solutions and cutting-edge digital marketing.',
  },
  {
    icon: <BsBarChartLine className="reason-icon" />,
    text: 'Data-driven strategies that ensure measurable growth and strong ROI.',
  },
  {
    icon: <BsLightning className="reason-icon" />,
    text: 'Agile methodologies and rapid deployment for quick, impactful results.',
  },
];

const WhyChoose = () => {
  return (
    <div className="why-section-back">
      <section className="why-section-card">
        <Container>
          <h2 className="why-title">Why Choose Capyngen?</h2>
          <p className="why-subtitle">
            We are committed to delivering excellence, innovation, and measurable results.
            Our approach is designed to propel your business forward in the digital landscape.
          </p>
          <Row className="why-row">
            <Col md={6}>
              <ul className="why-list">
                {reasons.map((item, index) => (
                  <li key={index} className="why-list-item">
                    {item.icon}
                    <span className="reason-text">{item.text}</span>
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={6}>
              <div className="why-image-wrapper">
                <img src={analyticsImage} alt="Analytics Team" className="why-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default WhyChoose;
