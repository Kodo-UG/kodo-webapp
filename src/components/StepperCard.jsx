import React from "react";

import "./stepperFourCss.css";


function StepperCard({ item, handleClick, selectedCard }) {
	

	return (

		<div 
		 	className="_selected_9bife_44  _option_9bife_5 "
		>
                  <div className="_optionInner_9bife_23 ">
                    <input
                      id="Associate"
                      type="checkbox"
                      className="_optionCheckmark_9bife_94"
                      data-testid="educationlevel-associates"
                      value="associates"
                    />
                    <label htmlFor="Associate" className="_optionBody_9bife_90">
                      <span className="_optionIcon_9bife_48">
                        <div style={{ height: "1.5rem", width: "1.5rem" }}>
                          <img
                            loading="lazy"
                            src="https://res.cloudinary.com/highereducation/image/upload/co_rgb:e22944,e_colorize:100,f_auto,fl_lossy,q_auto,h_48,w_48/v1/Voyager/signal2"
                            alt="signal2"
                          />
                        </div>
                      </span>
                      <div>
                        <span className="_optionLabel_9bife_106 _normal_9bife_137">
                         {item}
                        </span>
                      </div>
                    </label>
                  </div>
                </div>


								
		
	);
}

export default StepperCard;
