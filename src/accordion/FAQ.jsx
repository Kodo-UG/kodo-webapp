import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./faq.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-container">
      <h2 className="faq-title">FAQ's</h2>
      {Array(4)
        .fill(null)
        .map((_, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="faq-item">
              {/* ✅ Bordered section includes number, heading, and dropdown icon */}
              <button
                className={`faq-button ${isOpen ? "open" : ""}`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex gap-6 items-center">
                  {/* ✅ Number with dynamic background */}
                  <span className="faq-number">{String(index + 1).padStart(2, "0")}</span>

                  {/* ✅ Question heading with background highlight */}
                  <span className="faq-question">When is the best time to apply for a scholarship?</span>
                </div>

                {/* ✅ Dropdown icon with dynamic color */}
                {isOpen ? <FaChevronUp className="faq-icon" /> : <FaChevronDown className="faq-icon" />}
              </button>

              {/* ✅ Answer without border */}
              {isOpen && (
                <p className="faq-answer">
                  Did the scholarship provider provide any format? If they did, you should follow that. If they have
                  not specified a specific format, then you can follow this simple outline when making your
                  application/motivation letter: (1) Background/Key Qualifications, (2) Intentions for studying, (3)
                  Expectations of the Course, and (4) your plans during and after the study...
                </p>
              )}
            </div>
          );
        })}
    </div>
  );
}
