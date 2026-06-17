import React, { useState } from "react";
import "../stepperElement.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "../../../../utils/Toast";
import axiosInstance from "../../../../api/axiosInstance";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMediaQuery } from "@uidotdev/usehooks";
import {
  selectSportsData,
  updateSportsData,
  clearFormData
} from "../../../../toolkit/sportsReducer";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  password: Yup.string().required("Password is required"),
});

function FinalStepperElement() {

  const formData = useSelector(selectSportsData);
  // console.log("Sports Registration Data:", formData);

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
    dispatch(updateSportsData({ field: "email", value: value }));
  };

  const handleDobChange = (date) => {
    setSelectedDate(date);

    const dateString = date ? date.toISOString().split("T")[0] : "";
    dispatch(updateSportsData({ field: "dob", value: dateString }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateSportsData({ field: "password", value: value }));
  };
  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateSportsData({ field: "phone", value: value }));
  };
  const handleFirstNameChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateSportsData({ field: "fname", value: value }));
  };
  const handleLastNameChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateSportsData({ field: "lname", value: value }));
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
        displaySuccessMessage("Registration successful");
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
    dispatch(updateSportsData({ field: "sex", value: e.target.value }));
  };

  return (
    <main
      role="main"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "gray-50",
      }}
    >
      <header
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "4px",
          backgroundColor: "white",
        }}
      >
        <Link to="/">
          <style type="text/css">
            {`svg.icon-component.icon-component--logo-horizontal:hover {
fill: var(--secondary-700);
}`}
          </style>
          <img
            className="icon-component icon-component--logo-horizontal"
            src="https://res.cloudinary.com/itgenius/image/upload/v1688989573/logo-header_jm6s82.svg"
            width="232"
            height="36"
            fill="var(--secondary-600)"
            role="img"
            viewBox="0 0 232 37"
            alt=""
          />
        </Link>
      </header>
      <div
        id="voyager"
        data-basename="/voyager/experience"
        className="flex-1 relative"
      >
        <section id="voyager-blocks">
          <section>
            <section className="">
              <div data-testid="progress-bar" className="_progressBar_63yfq_1">
                <div
                  className="_progress_63yfq_1"
                  style={{ width: "50%" }}
                ></div>
              </div>
              <Link to="/route2">
                <button
                  data-testid="button-previous"
                  type="button"
                  className="_buttonPrevious_pmptr_34"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    className="_buttonChevron_pmptr_37"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                  </svg>
                  <span className="_buttonText_pmptr_41">Back</span>
                </button>
              </Link>
              <div className="_notAnimated_pmptr_10">
                <span className="_headingContainer_1fpvz_1">
                  <h2 className="_soloHeading_1fpvz_8">Create Your Account</h2>
                </span>
                <form onSubmit={register}>
                  <div>
                    <div className="_fieldGroup_1g3ja_1">
                      <input
                        className="_textField_fwd9c_1"
                        onChange={handleEmailChange}
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <div className="_fieldGroup_1g3ja_1">
                      <input
                        className="_textField_fwd9c_1"
                        onChange={handleFirstNameChange}
                        name="fname"
                        type="text"
                        id="fname"
                        placeholder="First Name"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="_fieldGroup_1g3ja_1">
                      <input
                        className="_textField_fwd9c_1"
                        onChange={handleLastNameChange}
                        name="lname"
                        type="text"
                        id="lname"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <div className="_fieldGroup_1g3ja_1">
                      <input
                        className="_textField_fwd9c_1"
                        onChange={handlePhoneChange}
                        name="phone"
                        type="text"
                        id="phone"
                        label="Phone Number"
                        placeholder="Phone"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="_fieldGroup_1g3ja_1">
                      <DatePicker
                        className={` ${isSm ? "date-pic" : "date-picker"}`}
                        selected={selectedDate}
                        onChange={handleDobChange} // Call the modified function here
                        placeholderText="Select date of birth"
                        maxDate={new Date(2009, 11, 31)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="_fieldGroup_1g3ja_1">
                      <select
                        className="_textField_fwd9c_1"
                        value={gender}
                        onChange={handleGenderChange}
                        required
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <div className="_fieldGroup_1g3ja_1">
                      <input
                        className="_textField_fwd9c_1"
                        onChange={handlePasswordChange}
                        name={showPassword ? "text" : "password"}
                        type="password"
                        id="password"
                        label="password"
                        placeholder="Password"
                        required
                      />
                    </div>
                  </div>

                  <div className="_pageActions_pmptr_26">
                    <button
                      type="submit"
                      className="_buttonContinue_pmptr_46 _button_pmptr_30"
                      data-testid="continue"
                    >
                      <span>{loading ? "loading.." : "Register"}</span>
                      <svg
                        width="26"
                        height="16"
                        viewBox="0 0 26 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.6774 0.468629C17.3023 -0.15621 18.3153 -0.15621 18.9402 0.468629L25.3402 6.86863C25.965 7.49347 25.965 8.50653 25.3402 9.13137L18.9402 15.5314C18.3153 16.1562 17.3023 16.1562 16.6774 15.5314C16.0526 14.9065 16.0526 13.8935 16.6774 13.2686L20.346 9.6H1.80879C0.925131 9.6 0.208786 8.88366 0.208786 8C0.208786 7.11634 0.925131 6.4 1.80879 6.4H20.346L16.6774 2.73137C16.0526 2.10653 16.0526 1.09347 16.6774 0.468629Z"
                          fill="white"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </form>
                <div className="_pageActions_pmptr_26"></div>
                <p className="_disclaimer_icov9_1">
                  <svg
                    width="18"
                    height="20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.024 8.8V6.4a6 6 0 0 1 12 0v2.4a2.4 2.4 0 0 1 2.4 2.4v6a2.4 2.4 0 0 1-2.4 2.4h-12a2.4 2.4 0 0 1-2.4-2.4v-6a2.4 2.4 0 0 1 2.4-2.4Zm9.6-2.4v2.4h-7.2V6.4a3.6 3.6 0 0 1 7.2 0Z"
                      fill="#e22944"
                    ></path>
                  </svg>
                  We safeguard your information with 256-bit encryption, the
                  same method employed by most banks and one of the most secure
                  encryption solutions available.
                </p>
              </div>
            </section>
          </section>
        </section>
      </div>
      <footer className="flex justify-center items-center bg-primary-900 mt-4 py-5">
        <div className="flex flex-col items-center justify-center md:flex-row flex-wrap">
          <Link to="/">
            <img
              className="icon-component icon-component--logo-stacked-horizontal"
              style={{ color: "#fff" }}
              src="https://res.cloudinary.com/itgenius/image/upload/v1688989573/logo-header_jm6s82.svg"
              width="76"
              height="76"
              fill="#fff"
              role="img"
              viewBox="0 0 350 105"
              alt=""
            />
          </Link>
          <div className="py-2 divide-x px-4 flex flex-wrap justify-center">
            <Link
              className="px-2 text-xs text-white font-bold hover:text-white"
              to="/policy"
              target="_blank"
            >
              Privacy Policy
            </Link>
            <Link
              className="px-2 text-xs text-white font-bold hover:text-white"
              to="#"
              target="_blank"
            >
              Advertising Disclosure
            </Link>
            <Link
              className="px-2 text-xs text-white font-bold hover:text-white"
              to="#"
              target="_blank"
            >
              Do Not Sell My Info
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default FinalStepperElement;
