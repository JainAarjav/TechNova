import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="contact-us py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 text-primary">Contact Us</h2>
        <p className="text-center mb-5">
          We would love to hear from you. Please fill out the form below, and we will get back to you as soon as possible.
        </p>
        <form className="row g-4">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" className="form-control" placeholder="Your Name" />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" placeholder="Your Email" />
          </div>
          <div className="col-12">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" className="form-control" rows={4} placeholder="Your Message"></textarea>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary mt-3 px-4 py-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
