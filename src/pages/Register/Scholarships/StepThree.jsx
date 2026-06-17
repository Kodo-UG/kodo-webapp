/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../toolkit/formReducer";
import "./stp3.css";
import { Link } from "react-router-dom";
import { Select } from "antd";
import { AiOutlineDown } from "react-icons/ai";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../../api/axiosInstance";
const { Option } = Select;

const StepThree = ({ nextStep, prevStep, formData, setFormData }) => {
  const { scholarshipcategory } = useSelector((state) => state.formData);
  const [data, setData] = useState();
  const [selectedOption, setSelectedOption] = useState("select a subject");
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to track the dropdown open/close state

  const history = useHistory();
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const { data } = await axiosInstance.get(
        `/scholarship/categories/${scholarshipcategory}`
      );
      setData(data.data.categories);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData, scholarshipcategory]);

  const selectStyle = {
    border: "none",
    boxShadow: "none",
    width: "100%",
  };
  const handleChange = (value) => {
    dispatch(updateFormData({ field: "subject", value: value }));
  };

  const handleList = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleOptionChange = (selected) => {
    setSelectedOption(selected);
    dispatch(updateFormData({ field: "subject", value: selected }));
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100vw",
        margin: "2rem",
        padding: "1rem",
      }}
    >
      {" "}
      <div
        className="searchDiv"
        style={{
          transform: "none",
          transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
          width: "40rem",
        }}
      >
        <h2
          style={{
            paddingTop: "0px",
            paddingBottom: "0px",
            color: "#00234a",
            fontFamily: "Lexend Deca, Helvetica, Arial, sans-seri",
          }}
        >
          What subject do you want to study?
        </h2>
        <div className="dropdown-containe bg-secondary">
          <button
            className="dropdow "
            style={{
              backgroundColor: "#fff",
              border: "1px solid #e9e9e9",

              padding: "20px 10px",
              textTransform: "none",
              width: "100%",
            }}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "auto",
                width: "90%",
              }}
            >
              <div
                className=""
                style={{
                  color: "#424242",
                  fontSize: "16px",
                  fontWeight: "500",
                  height: "28px",
                  letterSpacing: "0",
                  lineHeight: "28px",
                }}
              >
                <p>{selectedOption}</p>
              </div>
              <div className="icon" onClick={handleList}>
                {dropdownOpen ? (
                  <AiOutlineDown size={20} color="red" />
                ) : (
                  <MdOutlineKeyboardArrowUp size={20} color="red" />
                )}
              </div>
            </div>

            <div
              className="dropdown-break-line"
              style={{
                backgroundColor: "#c11b94",
                height: "2px",
                margin: "auto",
                width: "90%",
              }}
            ></div>
          </button>
          {dropdownOpen ? (
            <div
              id="dropdown-lst"
              className="dropdown-lis"
              style={{
                background: "white", // Glass morphism background color
                boxShadow: "0 2px 2px 0 rgba(31, 38, 135, 0.37)", // Glass morphism shadow
                backdropFilter: "blur(5px)", // Glass morphism blur effect
                padding: "20px", // Padding around the div
                height: "25rem",
                overflowY: "scroll",
              }}
            >
              {data?.map((option, index) => (
                <button
                  onClick={() => {
                    handleOptionChange(option);
                  }}
                  type="button"
                  className="option-button"
                  style={{
                    border: "none",
                    borderRadius: "2rem",
                    display: "block",
                    fontWeight: "500",
                    letterSpacing: "0",
                    padding: "5px",
                    textAlign: "left",
                    textTransform: "capitalize",
                    width: "100%",
                  }}
                >
                  <h4
                    style={{ color: "#00234a", borderRadius: "2rem" }}
                    className="text"
                  >
                    <Link to="/educationlevel">{option}</Link>
                  </h4>
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default StepThree;
