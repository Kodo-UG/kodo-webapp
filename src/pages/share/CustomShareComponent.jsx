import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  RedditShareButton,
} from "react-share";

const CustomShareComponent = ({ url, title }) => {
  return (

      <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
      }}
      >
        <div
          style={{
            borderRadius: "50%",
            background: "white",
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FacebookShareButton url={url} quote={title}>
            <img
              src="/images/fb.png"
              alt="Facebook Share"
            />
          </FacebookShareButton>
        </div>
        <div
          style={{
            borderRadius: "50%",
            background: "white",
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
             <TwitterShareButton url={url} title={title}>
          <img
            src="/images/x.png"
            alt="Twitter Share"
          />
        </TwitterShareButton>
        </div>
   

        <div
          style={{
            borderRadius: "50%",
            background: "white",
            // padding: "0.5rem",
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
            <WhatsappShareButton url={url} title={title} separator=":: ">
          <img
            src="/images/wh.png"
            alt="WhatsApp Share"
          />
        </WhatsappShareButton>
        </div>
        <div
          style={{
            borderRadius: "50%",
            background: "white",
            padding: "0.5rem",
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
           <EmailShareButton url={url} subject={title}>
          <img
            src="/images/em.png"
            alt="Email Share"
          />
        </EmailShareButton>
        </div>

        <div
          style={{
            borderRadius: "50%",
            background: "white",
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
         <LinkedinShareButton url={url} title={title}>
          <img
            src="/images/linkd.png"
            alt="LinkedIn Share"
          />
        </LinkedinShareButton>
        </div>
        <div
          style={{
            borderRadius: "50%",
            background: "white",
            // padding: "0.5rem",
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
         <TelegramShareButton url={url} title={title}>
          <img
            src="/images/tel.png"
            alt="Telegram Share"
          />
        </TelegramShareButton>
        </div>
       

        {/* Add more social media icons and buttons as needed */}
      </div>

  );
};

export default CustomShareComponent;
