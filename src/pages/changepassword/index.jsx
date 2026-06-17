import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { displayErrorMessage, displaySuccessMessage } from "../../utils/Toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosInstance from "../../api/axiosInstance";
import "../Login/custom.css";
import NavHeader from "../../components/Layout/NavHeader";
import { useMediaQuery } from "@uidotdev/usehooks";
import logologin from "../../assets/logo-login.jpg";
import ClipLoader from "react-spinners/ClipLoader";

export default function ChangePassword() {
  const history = useHistory();
  const location = useLocation();
  const email = location.state?.email || "";

  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const isSm = useMediaQuery("only screen and (max-width : 700px)");
  const isMd = useMediaQuery("only screen and (min-width : 700px) and (max-width : 1000px)");
  const isLg = useMediaQuery("only screen and (min-width : 1000px)");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setConfirmShowPassword(!confirmShowPassword);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().min(8, "Password must be at least 8 characters").required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axiosInstance.post("/auth/change-password", {
          email,
          password: values.password,
        });
        console.log(response);

        const data = response.data;

        if (data.statusCode == 200) {
          displaySuccessMessage("Password changed successfully");
          history.push("/login");
        } else {
          setLoading(false);
          displayErrorMessage("Something went wrong");
        }
      } catch (error) {
        setLoading(false);
        displayErrorMessage("Failed to change password");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div>
      <NavHeader />
      <section style={{ height: "auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            width: isSm ? "90%" : "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img src={logologin} width={100} height={100} />
            <h3 style={{ color: "#1d2855", fontSize: 40, fontWeight: "bold" }}>Change password</h3>
          </div>
          <form
            className="login-form"
            onSubmit={formik.handleSubmit}
            style={{
              width: isSm ? "100%" : isMd ? "50%" : isLg ? "30%" : "",
              marginTop: "50px",
            }}
          >
            <div className="form-group">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="New password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
                <span>⋯</span>
              </button>
              {formik.touched.password && formik.errors.password && (
                <div className="error">{formik.errors.password}</div>
              )}
            </div>

            <div className="form-group">
              <input
                type={confirmShowPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <button type="button" className="toggle-password" onClick={toggleConfirmPasswordVisibility}>
                <span>⋯</span>
              </button>
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div className="error"
                  style={{
                    color: 'red',
                    border: '1px solid red',
                    padding: 5,
                    borderRadius: 10,
                    marginTop: 10
                  }}
                >{formik.errors.confirmPassword}</div>
              )}
            </div>

            <button type="submit" className="sign-in-button" style={{ color: "#1d2855" }}>
              {loading ? <ClipLoader size={20} color="#1d2855" /> : <>Change password <span className="arrow">→</span></>}
            </button>

            <div className="signup-prompt">
              <div className="signup-link" style={{ cursor: "pointer" }} onClick={() => history.goBack()}>
                Back to login
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
