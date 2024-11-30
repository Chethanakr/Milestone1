import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert('Message sent!');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={form.name} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={form.email} onChange={handleChange} />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" value={form.message} onChange={handleChange} />

      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
