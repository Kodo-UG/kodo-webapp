import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function CollapsibleInput() {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="input-wrapper">
      <div className="input-container">
        <input type="text" placeholder="Search" className="input-field shadow-md" style={{
          border: "none"
        }}/>
        <IoMdArrowDropdown
          className={`dropdown-icon ${showOptions ? "open" : ""}`}
          onClick={toggleOptions}
        />
      </div>

      {showOptions && (
        <div className="options-container" style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          {/* Collapsible options */}
          <input type="text" placeholder="Option 1" className="option-field shadow-md" style={{
          border: "none"
        }}/>
          <input type="text" placeholder="Option 2" className="option-field shadow-md" style={{
          border: "none"
        }}/>
          
        </div>
      )}
    </div>
  );
}

export default CollapsibleInput;
