import React from "react";
import MyHeader from "../Header";
import Menu from "../Menu";
import ScholarshipDetails from "./ScholarshipDetails";
import Footer from "../Footer";

const ScholarshipDetailsPage = () => {

  return (
    <>
      <div style={{ background: "#f4f6f9" }} className="wrapper">
        <MyHeader />
        <Menu />
        <div
          className="w-100 "
          style={{
            // background: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            height: "auto",
          }}
        >
          <ScholarshipDetails />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ScholarshipDetailsPage;
/* eslint-disable jsx-a11y/anchor-is-valid */

