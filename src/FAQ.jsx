import React, { useState } from 'react';
import './FAQ.css'; // Import the CSS file for styling
const FAQ = () => {
  // State to manage the active index. null means none are open.
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    // If the clicked item is already active, close it. Otherwise, open the new one.
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'What is GDG?',
      answer: 'Google Developer Groups (GDG) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.',
    },
    {
      question: 'How can you become a part of GDG?',
      answer: 'We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It’s a two step process involving form filling and personal interview. Students acing both rounds are selected to be the part of the core team.',
    },
    {
      question: 'What does a GDG Lead do?',
      answer: 'A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.',
    },
    {
      question: 'How is DSC related to Google?',
      answer: 'Developer Student Clubs (DSC) are community groups supported by Google Developers. They aim to help students bridge the gap between theory and practice by working on real-world projects and collaborating with local businesses.',
    },
    {
      question: 'How to reach us?',
      answer: 'Mail us at "dsc.rknec@gmail.com "',
    },
  ];

  return (
    <div className="faq-container">
      <h1>FAQs</h1>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <button
              className="faq-question"
              onClick={() => handleToggle(index)}
            >
              {item.question}
              <span className="faq-icon">&#x25BC;</span>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;