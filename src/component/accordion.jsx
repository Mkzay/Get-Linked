// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

export default function Accordion() {
  // Define an array of FAQ items with questions and answers
  const faqs = [
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "No, you may not.",
    },
    {
      question: "What happens if I need help during the hackathon?",
      answer: "Surpass your limits.",
    },
    {
      question: "What happens if I don't have an idea for a project?",
      answer: "Omo, go and make research o!",
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer: "You can join a team, or do it alone.",
    },
    {
      question: "What happens after the hackathon ends?",
      answer: "The prizes are given to the winners, and God bless the others.",
    },
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "I don't know mehn, I think so.",
    },
  ];

  // Define state to track which FAQ items are open or closed
  const [openItems, setOpenItems] = useState({});

  // Function to toggle the open/close state of an FAQ item
  const toggleItem = (index) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="flex items-center justify-center flex-col pt-16 pb-12 gap-[86px] border-b border-white w-full md:flex-row md:gap-0">
      <div>
        <div className="flex items-center justify-center flex-col md:items-start">
          <h2 className="flex items-center flex-col text-xl font-bold text-white pb-[9px] md:text-[32px]/0px md:items-start">
            Frequently Asked
            <span className="text-first-3">Questions</span>
          </h2>
          <p className="text-center text-white text-[13px]/[27.5px] font-normal w-60 md:w-[342px] md:text-left md:text-sm/[27.5px]">
            We got answers to the questions that you might want to ask about
            <span className="font-bold"> getlinked Hackathon 1.0</span>
          </p>
        </div>
        <div className="flex items-center justify-center flex-col md:items-start">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div className="flex items-center border-b border-first-3 w-full pt-4">
                <div
                  className="text-white text-xs/[18px] font-normal w-[270px] h-10 pb-2 md:text-sm/[27.5px] md:w-[390px] cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  {faq.question}
                </div>
                <button
                  className={`relative -bottom-1 transform ${
                    openItems[index] ? "rotate-0" : "rotate-90"
                  } transition-transform`}
                  onClick={() => toggleItem(index)}
                >
                  <img src="./images/plus.png" alt="Toggle Icon" />
                </button>
              </div>
              {openItems[index] && (
                <div className="text-white text-xs/[18px] font-normal w-72  h-10 py-2 md:w-96">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          className="md:hidden"
          src="./images/cwok-casual-211.png"
          alt="Mobile Image"
        />
        <img
          className="hidden md:block"
          src="./images/cwok-casual-211-desktop.png"
          alt="Desktop Image"
        />
      </div>
    </div>
  );
}
