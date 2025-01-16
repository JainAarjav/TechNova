import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 text-primary">About Us</h2>
        <p className="text-center mb-5 lead">
          TechNova Innovations is dedicated to pushing the boundaries of technology and delivering innovative solutions to our clients.
        </p>
        
        <div className="row justify-content-center">
          {/* Team Member 1 */}
          <div className="col-md-4 text-center mb-4">
            <img
              src="https://picsum.photos/200" 
              alt="John Doe"
              className="rounded-circle img-fluid mb-3"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
            <h5 className="font-weight-bold">John Doe</h5>
            <p className="text-muted">CEO</p>
          </div>

          {/* Team Member 2 */}
          <div className="col-md-4 text-center mb-4">
            <img
              src="https://picsum.photos/200" 
              alt="Jane Smith"
              className="rounded-circle img-fluid mb-3"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
            <h5 className="font-weight-bold">Jane Smith</h5>
            <p className="text-muted">CTO</p>
          </div>
        </div>

        <div className="text-center mt-5">
          <p className="lead">
            Our team of experts is committed to providing top-tier services that cater to your unique business needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;