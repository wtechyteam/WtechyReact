import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";

const FAQs = (props) => {

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='faqWrapper mt-5'>
      {props.faqList.map((faq, index) => (
        <div key={index} className='faqWrap'>
          <h4 onClick={() => handleToggle(index)} className={`title title-sm fw-semibold mb-0 ${openIndex === index && 'active'}`}>
            {faq.question}
            <div className="faqIcon">{openIndex === index ? <FaMinus /> : <FaPlus />}</div>
          </h4>
          {openIndex === index &&
            <p className='description'>{faq.answer}</p>
          }

        </div>
      ))}
    </div>
  );
};

export default FAQs;