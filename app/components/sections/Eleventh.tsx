import React from 'react';

const FAQs = () => {
  const faqData = [
    {
      question: 'How much does it cost to develop an AI-based app?',
      answer: `The average cost to develop an AI app ranges from $40,000 to $300,000, depending on the features and complexity.`,
    },
    {
      question: 'How long does it take to build an AI-based product?',
      answer: `Highly complex AI solutions can take 10 to 18 months, while simple solutions take 3 to 6 months.`,
    },
    {
      question: 'How to choose the best AI app development company?',
      answer: `Look for expertise in AI technologies and track record of successful projects.`,
    },
  ];

  return (
    <div className="faq_gap">
      <div className="container">
        <h2 className="heading2 text-center blk">Frequently Asked Questions</h2>
        <div className="faq_grid_panel">
          {faqData.map((faq, index) => (
            <div className="faq_col" key={index}>
              <h3 className="head">
                {faq.question}
                <span className="arrow-link">➤</span>
              </h3>
              <div className="faq-content-wrap">
                <p className="para">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
