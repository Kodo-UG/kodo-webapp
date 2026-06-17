import React, { useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import {
  displaySuccessMessage,
  displaySuccessNotification,
} from "../../utils/Toast";

const CustomForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (setState) => (event) => {
    setState(event.target.value);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("/user/contactus", {
        email,
        phone,
        name,
        message,
      });

      console.log(res.status);

      if (res.status == 201 || res) {
        displaySuccessNotification(res.data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="contact-area after-none contact-bg pt-120 pb-120 p-relative fix"
        style={{ background: "#e7f0f8" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 order-2">
              <div className="contact-bg">
                <div className="section-title center-align text-center mb-50">
                  <h2>Inquiry Form</h2>
                </div>
                <form
                  onSubmit={formSubmit}
                  className="contact-form mt-30 text-center"
                >
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="contact-field p-relative c-name mb-30">
                        <input
                          type="text"
                          id="firstn"
                          name="name"
                          placeholder="Name"
                          onChange={handleInputChange(setName)}
                          required
                        />
                        <i className="icon fal fa-user" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="contact-field p-relative c-subject mb-30">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Email"
                          onChange={handleInputChange(setEmail)}
                          required
                        />
                        <i className="icon fal fa-envelope" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="contact-field p-relative c-subject mb-30">
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          placeholder="Phone No."
                          onChange={handleInputChange(setPhone)}
                          required
                        />
                        <i className="icon fal fa-phone" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-message mb-30">
                        <textarea
                          name="message"
                          id="message"
                          cols={30}
                          rows={50}
                          placeholder="Write comments"
                          style={{ resize: "none" , padding: "5px" }} // Add this style attribute
                          onChange={handleInputChange(setMessage)}
                          defaultValue={""}
                        />
                        <i className="icon fal fa-edit" />
                      </div>
                      <div className="slider-btn  text-center">
                        <button
                          style={{
                            color: "#fff",
                            fontWeight: "bold",
                            padding: "1rem",
                          }}
                          className="btn ss-btn"
                          data-animation="fadeInRight"
                          data-delay=".8s"
                          type="submit"
                        >
                          {loading ? "loading..." : "Make A Request"}
                          <i className="fal fa-long-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomForm;
