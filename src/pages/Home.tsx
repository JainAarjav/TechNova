import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <header className="hero-section text-center py-5 text-white" style={{ background: 'linear-gradient(135deg, #0062cc, #00c6ff)' }}>
        <div className="container">
          <h1 className="display-3 fw-bold">Welcome to TechNova Innovations</h1>
          <p className="lead mb-4">
            Innovating the future with cutting-edge technology solutions.
          </p>
          <button className="btn btn-light btn-lg mt-3 hover-effect">Learn More</button>
        </div>
      </header>

      {/* Testimonials Section */}
      <section className="testimonials-slider py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">What Our Clients Say</h2>
          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000"> {/* Faster interval (2 seconds) */}
                <div className="d-flex justify-content-center">
                  <div className="testimonial-card text-center p-4 bg-white shadow-lg rounded">
                    <p className="fs-5 mb-4">
                      "TechNova's solutions transformed our business operations. Highly recommend!"
                    </p>
                    <footer className="blockquote-footer">John Doe, CEO</footer>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000"> {/* Faster interval (2 seconds) */}
                <div className="d-flex justify-content-center">
                  <div className="testimonial-card text-center p-4 bg-white shadow-lg rounded">
                    <p className="fs-5 mb-4">
                      "Excellent customer service and innovative technology. A game-changer!"
                    </p>
                    <footer className="blockquote-footer">Jane Smith, CTO</footer>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
