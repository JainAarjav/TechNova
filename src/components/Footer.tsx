import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container d-flex flex-wrap justify-content-between">
        <div className="col-md-4 mb-3">
          <h5 className="text-xl font-semibold">About TechNova</h5>
          <p>
            At TechNova Innovations, we strive to deliver cutting-edge solutions
            to transform businesses and enhance lives through technology.
          </p>
        </div>
        <div className="col-md-2 mb-3">
          <h5 className="text-xl font-semibold">Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="/" className="text-white hover:text-gray-400">Home</a></li>
            <li><a href="/services" className="text-white hover:text-gray-400">Services</a></li>
            <li><a href="/about" className="text-white hover:text-gray-400">About Us</a></li>
            <li><a href="/contact" className="text-white hover:text-gray-400">Contact Us</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5 className="text-xl font-semibold">Contact Us</h5>
          <p>123 Tech Street, San Francisco, CA</p>
          <p>+1 (123) 456-7890</p>
          <p>support@technovainnovations.com</p>
        </div>
      </div>
      <div className="text-center mt-3">
        &copy; {new Date().getFullYear()} TechNova Innovations. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
