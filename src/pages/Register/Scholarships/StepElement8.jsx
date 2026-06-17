import React, { useState } from "react";
import "./stepperElement.css";
import { useDispatch, useSelector } from "react-redux";
import { clearFormData, updateFormData } from "../../../toolkit/formReducer";
import { useHistory } from "react-router-dom";
import NavHeader from "../../../components/Layout/NavHeader";
import { ClipLoader } from "react-spinners"; 
import { Link } from "react-router-dom";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "../../../utils/Toast";
import axiosInstance from "../../../api/axiosInstance";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMediaQuery } from "@uidotdev/usehooks";
import './stepper8.css';
import logologin from '../../../assets/logo-login.jpg';



const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  password: Yup.string().required("Password is required"),
});

function StepElement8() {
  const formData = useSelector((state) => state.formData);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const isSm = useMediaQuery("only screen and (max-width : 900px)");

  const isMd = useMediaQuery(
    "only screen and (min-width : 900px) and (max-width : 1250px)"
  );
  const isLg = useMediaQuery(
    "only screen and (min-width : 1250px) and (max-width : 2250px)"
  );

  const dispatch = useDispatch();
  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ field: "email", value: value }));
  };

  const handleDobChange = (date) => {
    setSelectedDate(date);

    const dateString = date ? date.toISOString().split("T")[0] : "";
    dispatch(updateFormData({ field: "dob", value: dateString }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ field: "password", value: value }));
  };
  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ field: "phone", value: value }));
  };
  const handleFirstNameChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ field: "fname", value: value }));
  };
  const handleLastNameChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ field: "lname", value: value }));
  };

  const register = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await validationSchema.validate(formData, { abortEarly: false });

      const res = await axiosInstance.post("/auth/user/signup", formData);
      console.log(res.data.id);
      localStorage.setItem("userID", res.data.id);

      if (res.data.id) {
        displaySuccessMessage("Registration successful ");
        clearFormData();
        history.push("/signin");
      } else {
        displayErrorMessage(res.data.message);
      }
    } catch (validationError) {
      const errorMessages = validationError.inner.map((error) => error.message);
      displayErrorMessage(errorMessages.join("\n"));
    } finally {
      setLoading(false);
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    dispatch(updateFormData({ field: "sex", value: e.target.value }));
  };

  return (
    <div>
      <NavHeader />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <main className="signup-page">
        <div className="auth-container">
        <div
                       style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <img 
                        src={logologin}
                        width={100}
                        height={100}
                      />
                      <h3
                        style={{
                          color: '#1d2855',
                          fontSize: 40,
                          fontWeight: 'bold',
                        }}
                      >
                        Sign up
                      </h3>
                    </div>
          <form className="auth-form" onSubmit={register}
            style={{
              marginTop: 30
            }}
          >
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Email" 
                required 
                onChange={handleEmailChange}
                name="email"
                id="email"
              />
            </div>

            <div className="form-group">
              <input type="text" placeholder="First Name" required 
                 onChange={handleFirstNameChange}
                 name="fname"
                 id="fname"
              />
            </div>

            <div className="form-group">
              <input type="text" placeholder="Last Name" required 
                 onChange={handleLastNameChange}
                 name="lname"
                 id="lname"
              />
            </div>

            <div className="form-group">
              <input type="text" placeholder="Phone Number" required 
                 onChange={handlePhoneChange}
                 name="phone"
                 id="phone"
                 label="Phone Number"
              />
            </div>

            <div className="form-group">
              <DatePicker
                className={` ${isSm ? "date-pic" : "date-picker"}`}
                selected={selectedDate}
                onChange={handleDobChange} // Call the modified function here
                placeholderText="Select date of birth"
                maxDate={new Date(2009, 11, 31)}
                required
              />
            </div>

            <div className="form-group"
              style={{
                border: '1px solid #cccccc',
                borderRadius: 10,
                padding: 14,
                color: '#666666'
              }}
            >
              <select 
                value={gender}
                onChange={handleGenderChange}
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="form-group">
              <input
                onChange={handlePasswordChange}
                name={showPassword ? "text" : "password"}
                type="password"
                id="password"
                label="password"
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                ⋯
              </button>
            </div>

            <button type="submit" className="auth-button"
              style={{
                backgroundColor: '#00d6dd',
                color: '#1d2855'
              }}
            >
              {loading ? <ClipLoader size={20} color="#fff" /> : "Create account"}
              <span className="arrow">→</span>
            </button>
          </form>

          <div className="auth-prompt">
            Already have an account?{" "}
            <Link  to={{ pathname: "/signin", state: { ref: "final" } }} className="auth-link">
              Sign in!
            </Link>
          </div>
        </div>
        </main>
      </div>
    </div>
  );
}

export default StepElement8;
