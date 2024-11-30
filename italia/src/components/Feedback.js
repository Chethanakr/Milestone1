import React, { useState } from 'react';
import './Feedback.css'; // Importing the external CSS file

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => setFeedback(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
  };

  return (
    <section className="feedback">
      <h2>Feedback</h2>
      <textarea
        value={feedback}
        onChange={handleChange}
        placeholder="Leave your feedback here..."
      />
      <button onClick={handleSubmit}>Submit</button>
    </section>
  );
};

export default Feedback;
