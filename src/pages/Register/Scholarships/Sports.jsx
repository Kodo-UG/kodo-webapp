import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import StepperElementOne from "./sports/StepperElementOne";

const Sports = () => {

  const [step, setStep] = useState(1);

  const dispatch = useDispatch();

  const params = useParams();
  const userId = params.userId;

  const nextStep = () =>
    setStep((step) => (step < 4 && step > 0 ? step + 1 : 1));
  const prevStep = () =>
    setStep((step) => (step < 4 && step > 0 ? step - 1 : 1));

  // useEffect(() => {
  //   dispatch(updateFormData({ field: "refer", value: userId }));
  // }, []);

  return (
    <div
      style={{
        height: "90vh",
        width: "100%",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#E6E6E6",
      }}
    >
      <div
        id="school-search-container"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StepperElementOne/>
      </div>
    </div>
  );
};

export default Sports;
