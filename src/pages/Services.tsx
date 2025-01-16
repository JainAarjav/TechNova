import React from 'react';
import webDevelopmentImage from '../images/web-development.jpg';
import cloudSolutionsImage from '../images/cloud-solutions.jpg';
import aiMlServicesImage from '../images/ai-ml-services.jpg';

const Services: React.FC = () => {
  return (
    <div className="services py-5 min-h-screen bg-light">
      <h2 className="text-center mb-5 text-primary">Our Services</h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card shadow-sm border-light rounded h-100">
              <img
                src={webDevelopmentImage}
                className="card-img-top"
                alt="Web Development"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">
                  Building responsive and engaging websites with a focus on user experience and performance.
                </p>
                <a href="#" className="btn btn-primary mt-auto">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm border-light rounded h-100">
              <img
                src={cloudSolutionsImage}
                className="card-img-top"
                alt="Cloud Solutions"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Cloud Solutions</h5>
                <p className="card-text">
                  Scalable and secure cloud-based applications to meet the growing demands of your business.
                </p>
                <a href="#" className="btn btn-primary mt-auto">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm border-light rounded h-100">
              <img
                src={aiMlServicesImage}
                className="card-img-top"
                alt="AI/ML Services"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">AI/ML Services</h5>
                <p className="card-text">
                  Harnessing AI/ML to transform businesses through automation, predictive analytics, and more.
                </p>
                <a href="#" className="btn btn-primary mt-auto">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
