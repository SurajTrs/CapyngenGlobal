import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style.css';

const CustomerExperience = () => {
  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <section
        className="position-relative d-flex align-items-center justify-content-center text-center"
        style={{
          background: `linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(11,42,76,0.8)), url('/background.jpg') center/cover no-repeat`,
          minHeight: '90vh'
        }}
      >
        <div className="container">
          <h1 className="display-2 fw-bold mb-4">Transforming Customer Experience</h1>
          <p className="lead text-light mb-5 w-75 mx-auto">
            Drive loyalty, engagement, and growth by placing your customer at the heart of innovation.
          </p>
          <button className="btn btn-outline-light btn-lg">Start Your Journey →</button>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-5 bg-gradient text-center" style={{ background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)' }}>
        <div className="container">
          <h2 className="fw-bold text-white mb-4 display-5">We Engineer Experience</h2>
          <p className="text-light fs-5 w-75 mx-auto">
            Capyngen crafts immersive and unified customer journeys by blending data, human empathy, and cutting-edge technology. Our strategies ensure lasting engagement, loyalty, and satisfaction.
          </p>
          <div className="d-flex justify-content-center mt-4 gap-3 flex-wrap">
            <span className="badge bg-info text-dark px-3 py-2 fw-semibold">Human-Centric Design</span>
            <span className="badge bg-warning text-dark px-3 py-2 fw-semibold">Real-Time Insights</span>
            <span className="badge bg-success text-dark px-3 py-2 fw-semibold">Cross-Platform Consistency</span>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="container py-5">
        <div className="row g-5">
          {[...Array(4)].map((_, i) => {
            const items = [
              {
                title: 'Customer Journey Mapping',
                desc: 'From awareness to advocacy, track and refine touchpoints.',
                icon: '📍'
              },
              {
                title: 'Omnichannel Strategy',
                desc: 'Deliver consistent experiences across digital and offline platforms.',
                icon: '🌐'
              },
              {
                title: 'Sentiment & Feedback Analysis',
                desc: 'Use AI to decode emotions and improve responsiveness.',
                icon: '📊'
              },
              {
                title: 'Personalization at Scale',
                desc: 'Leverage segmentation and machine learning to engage every customer uniquely.',
                icon: '🧠'
              }
            ];
            return (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="p-4 bg-dark rounded-4 shadow h-100 text-center">
                  <div className="display-4 mb-3">{items[i].icon}</div>
                  <h5 className="fw-semibold mb-2">{items[i].title}</h5>
                  <p className="text-secondary small">{items[i].desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* More Services Section */}
      <section className="py-5 bg-dark text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">More Ways We Enhance Experience</h2>
          <div className="row g-4">
            {[...Array(4)].map((_, i) => {
              const items = [
                {
                  title: 'Conversational Interfaces',
                  desc: 'Build intuitive AI-powered chatbots for instant, 24/7 customer engagement.',
                  icon: '💬'
                },
                {
                  title: 'Behavioral Analytics',
                  desc: 'Uncover hidden patterns in customer behavior to tailor experiences.',
                  icon: '📈'
                },
                {
                  title: 'Loyalty Programs',
                  desc: 'Create dynamic loyalty initiatives with gamified rewards and insights.',
                  icon: '🎁'
                },
                {
                  title: 'Voice of Customer Programs',
                  desc: 'Gather, analyze, and act on customer insights to drive continuous improvement.',
                  icon: '🗣️'
                }
              ];
              return (
                <div className="col-md-6 col-lg-3" key={i}>
                  <div className="p-4 bg-secondary rounded-4 shadow h-100 text-white">
                    <div className="display-5 mb-3">{items[i].icon}</div>
                    <h6 className="fw-semibold mb-2">{items[i].title}</h6>
                    <p className="small">{items[i].desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real Customer Reviews Section */}
      <section className="py-5 bg-black border-top border-secondary-subtle">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">What Our Customers Say</h2>
          <div className="row g-4">
            {[...Array(4)].map((_, i) => {
              const items = [
                {
                  name: 'Ankita Sharma',
                  role: 'CMO, FintechNova',
                  review: 'Capyngen completely redefined our digital presence. The personalized journey helped us grow retention by 30%.',
                  avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
                },
                {
                  name: 'Rahul Mehta',
                  role: 'Founder, ShopHub India',
                  review: 'Excellent team with a strong vision for customer-centric platforms. Highly recommended!',
                  avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
                },
                {
                  name: 'Meera Krishnan',
                  role: 'VP Customer Success, EduCloud',
                  review: 'Their omnichannel strategy was spot on. We’ve seen consistent engagement across all platforms.',
                  avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
                },
                {
                  name: 'Arjun Verma',
                  role: 'CTO, MedTech Pulse',
                  review: 'The data-driven personalization tools Capyngen provided helped increase our user engagement dramatically.',
                  avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
                }
              ];
              return (
                <div className="col-md-6 col-lg-3" key={i}>
                  <div className="p-4 bg-gradient rounded-4 shadow-lg h-100 position-relative review-card border border-secondary">
                    <div className="d-flex align-items-center mb-3">
                      <img src={items[i].avatar} alt={items[i].name} className="rounded-circle me-3 border border-light shadow" width="55" height="55" />
                      <div>
                        <h6 className="mb-0 text-white fw-bold">{items[i].name}</h6>
                        <small className="text-secondary fst-italic">{items[i].role}</small>
                      </div>
                    </div>
                    <p className="text-light fst-italic small">"{items[i].review}"</p>
                    <div className="text-warning fs-5 mt-3">★★★★★</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emphasis Quote */}
      <section className="text-center py-5 bg-black border-top border-secondary-subtle">
        <div className="container">
          <blockquote className="fs-4 fw-light text-info">
            “Every touchpoint is an opportunity to connect, engage, and inspire.”
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ backgroundColor: '#0e0e0e' }}>
        <div className="container text-center">
          <h3 className="fw-bold mb-3">Let’s Elevate Your Customer Experience</h3>
          <p className="text-secondary mb-4">
            Discover how Capyngen can redefine your customer journey with innovation, empathy, and intelligence.
          </p>
          <button className="btn btn-primary px-5 py-2">Let’s Talk</button>
        </div>
      </section>

    </div>
  );
};

export default CustomerExperience;