import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Forgot = () => {
  return (
    <div>
      <section className="contact-area pt-60 pb-120 p-relative fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card custom-card">
                <div className="card-header d-flex align-items-center justify-content-center">
                  <span className="card-title">Forgot Password</span>
                </div>
                <div className="card-body">
                  <form>
                    <div style={{ paddingBottom: 30 }} className="form-group">
                      <input
                        style={{ border: "none" }}
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        autofocus
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Reset Password
                    </button>
                  </form>
                </div>
                <div className="card-footer text-center">
                  <Link href="/login">Back to Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Forgot;
