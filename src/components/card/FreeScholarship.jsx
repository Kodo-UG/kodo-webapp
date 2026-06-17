import React from "react";
import truncateText from "../../utils/truncate";
import { BsBookmark, BsThreeDotsVertical } from "react-icons/bs";
import './fontstyle.css';

export default function FreeScholarship({
  cardTitle,
  award,
  deadline,
  link,
  about,
  id,
  days,
  type,
  handleRoute,
}) {
  const date = new Date(deadline);
  const formattedDate = date.toLocaleDateString();
  const today = new Date();
  const deadlineDate = new Date(deadline);
  const timeDifference = deadlineDate.getTime() - today.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
  return (
    <div
      onClick={handleRoute}
      className="shadow-md"
      style={{
        width: "24rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "white",
        borderRadius: "0.5rem",
        cursor: "pointer",
        marginBottom: "3rem",
        fontFamily: "Archivo, sans-serif",
        boxShadow: "0 5px 10px rgba(0,0,0,0.10)",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          width: "100%",
          color: "#1D2754",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTopLeftRadius: "0.5rem",
          borderTopRightRadius: "0.5rem",
          padding: ".7rem",
        }}
      >
        <div
          style={{
            paddingTop: ".4rem",
            marginLeft: "1rem",
            marginBottom: "2rem",
          }}
        >
          <h2
            style={{
              marginLeft: "0.4rem",
              fontWeight: "normal",
              fontFamily: "Archivo, sans-serif",
              letterSpacing: "1px",
              fontSize: "1.31rem",
              color: '#1d2855'
            }}
          >
            {cardTitle}
          </h2>
          <p
            style={{
              letterSpacing: "1.3px",
              textAlign: "left",
              fontFamily: "Archivo,san-serif",
              marginLeft: ".1rem",
              color: "#1d2855",
              fontSize: "12.5px",
              lineHeight: "22px",
              fontWeight: 500,
            }}
          >
            {truncateText(about, 100)}
          </p>
        </div>
        <div
          style={{
            width: "25%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            fontWeight: "bold",
          }}
        >
          <span
            style={{
              fontSize: ".2rem",
              lineBreak: "auto",
              fontFamily: "Poppins",
              letterSpacing: "2px",
            }}
          >
            {days}
          </span>
          <BsBookmark
            style={{
              height: "20px",
              width: "20px",
              fontWeight: "bolder",
            }}
          />
          <BsThreeDotsVertical
            style={{ height: "20px", width: "20px", opacity: "0.5" }}
          />
        </div>
      </div>

      <div
        className="card-body"
        style={{
          height: "6rem",
          fontFamily: "Archivo, sans-serif",
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column align-items-center">
            <p className="mb-1" style={{ color: "#a0a3bd" }}>
              {type}
            </p>
            <p
              style={{
                color: "#1d2855",
                fontWeight: "normal",
                padding: ".1rem",
                lineHeight: "1.5rem",
                fontFamily: "Archivo, sans-serif",
                letterSpacing: "1px",
                fontSize: "1.3rem",
              }}
            >
              {award}
            </p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <p
              className="mb-1"
              style={{ color: "#a0a3bd", lineHeight: "1.5rem" }}
            >
              Deadline
            </p>
            <p
              style={{
                color: "#1d2855",
                fontWeight: "normal",
                padding: ".1rem",
                lineHeight: "1.5rem",
                fontFamily: "Poppins",
                letterSpacing: "2px",
                fontSize: "1.3rem",
                fontFamily: "Archivo,sans-serif"
              }}
            >
              {formattedDate}
            </p>
          </div>
          <div
            style={{ marginTop: "-1.5rem" }}
            className="d-flex flex-column align-items-center"
          >
            <p className="mb-1" style={{ color: "#a0a3bd" }}>
              Effort
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="17"
              fill="none"
            >
              <path
                d="M29.961 13.783a16.45 16.45 0 0 0-1.52-4.985 16.05 16.05 0 0 0-4.38-5.482C17.505-1.992 7.604-.834 2.694 6.118a14.45 14.45 0 0 0-2.31 5.105c-.43 1.84-.499 3.749-.202 5.616-.21-3.603 1.06-7.31 3.444-9.954 4.753-5.419 13.292-5.827 18.264-.562a11.999 11.999 0 0 1 3.298 7.91v.008c-.006.325.051.649.17.952.118.302.294.578.518.81a2.371 2.371 0 0 0 3.437 0A2.483 2.483 0 0 0 30 14.24a2.531 2.531 0 0 0-.039-.458"
                fill="#1D2754"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="14"
              fill="none"
              deg="-90"
              style={{
                position: "absolute",
                marginLeft: "-2px",
                marginTop: "25px",
                transform: "rotate(-90deg)",
                height: "22px",
              }}
            >
              <path
                d="M2.416.288S.992 11.25.993 11.753c.002.394.156.772.43 1.05a1.442 1.442 0 0 0 2.068-.003 1.49 1.49 0 0 0 .427-1.053c0-.52-1.502-11.459-1.502-11.459Z"
                fill="#1D2754"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "0.9rem",
          paddingLeft: "1rem",
        }}
      >
        {daysDifference === -1 ? (
          <div
            style={{
              // width: "8.2rem",
              background: "#F79720",
              paddingLeft: "0.3rem",
              color: "white",
              borderRadius: "3px",
              fontWeight: "bold",
            }}
          >
            Past Deadline
          </div>
        ) : daysDifference === 1 ? (
          <div
            style={{
              // width: "8.2rem",
              background: "#F79720",
              paddingLeft: "0.3rem",
              color: "white",
              borderRadius: "3px",
            }}
          >
            Deadline Today
          </div>
        ) : daysDifference === 2 ? (
          <div
            style={{
              width: "8.2rem",
              background: "#F79720",
              paddingLeft: "0.3rem",
              color: "white",
              borderRadius: "3px",
              fontWeight: "bold",
            }}
          >
            {daysDifference} days left
          </div>
        ) : null}
      </div>
    </div>
  );
}
