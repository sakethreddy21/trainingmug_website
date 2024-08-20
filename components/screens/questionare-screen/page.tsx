"use client"

import React, { useState } from 'react'

const QuestionareScreen = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: 'What is Proactic?', answer: 'Proactic is ...' },
    { question: 'How does Proactic work?', answer: 'Proactic works by ...' },
    { question: 'Which social media platforms does Proactic support?', answer: 'Proactic supports ...' },
    { question: 'How much does Proactic cost?', answer: 'Proactic costs ...' },
    { question: 'How can I get started with Proactic?', answer: 'To get started with Proactic, ...' },
    { question: 'How can I contact Proactic?', answer: 'You can contact Proactic by ...' },
    { question: 'How can I cancel my Proactic subscription?', answer: 'To cancel your Proactic subscription, ...' },
    { question: 'How can I get a refund for Proactic?', answer: 'To get a refund for Proactic, ...' },
    { question: 'How can I change my Proactic plan?', answer: 'To change your Proactic plan, ...' },
    { question: 'How can I delete my Proactic account?', answer: 'To delete your Proactic account, ...' },
  ];

  return (
    <div className='w-full h-full bg-black z-10 pt-0 flex justify-center items-center'>
      <div className="bg-black text-white flex flex-col justify-center items-center max-w-3xl mx-auto py-20 px-4">
        <h2 className="text-center text-5xl font-medium mb-20 w-[1024pxl mx-auto">Frequently asked questions</h2>
        <div className="flex flex-col justify-center items-center w-full space-y-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`cursor-pointer p-4 bg-neutral-900 rounded-[15px] text-[16px] font-bold w-[754px] ${
                openIndex === index ? 'bg-gray-700' : ''
              }`}
              onClick={() => toggleFaq(index)}
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <p className="mt-4 text-base font-normal text-neutral-400 opacity-100 h-auto">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestionareScreen;
