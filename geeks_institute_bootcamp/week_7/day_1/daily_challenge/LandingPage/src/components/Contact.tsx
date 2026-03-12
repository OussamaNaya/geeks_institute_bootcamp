import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent from ${email}`);
    setEmail("");
    setComment("");
  };

  return (
    <section className="contact-section">
      <div className="contact-inner">
        <h2>Contact us</h2>
        <div className="contact-body">
          <div className="contact-info">
            <p>Contact us and we will get back to you within 24 hours.</p>
            <p><i className="fa fa-map-marker"></i> Company Name</p>
            <p><i className="fa fa-phone"></i> +256 778 800 900</p>
            <p><i className="fa fa-envelope"></i> company.gmail.com</p>
          </div>
          <div className="contact-form">
            <p>Contact</p>
            <input
              type="email"
              placeholder="email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={8}
            />
            <button onClick={handleSubmit}>Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;