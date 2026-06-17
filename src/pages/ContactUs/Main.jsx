import React from "react";
import FindScholarships from "../../components/about/FindScholarships";
import CustomContainer from "../../components/ShredComponents/CustomerContainer";
import mapImage from "./map.jpg";
import { motion } from "framer-motion";
import "./main.css"; // Import CSS file
import { useMediaQuery } from "@uidotdev/usehooks";

export default function Main() {
  const contactInfo = [
    {
      title: "Phone Number",
      icon: "https://res.cloudinary.com/digrh1wj1/image/upload/v1742433873/ic_baseline-phone_dcixhz.png",
      value: "+447853711603",
    },
    {
      title: "Email Address",
      icon: "https://res.cloudinary.com/digrh1wj1/image/upload/v1742433873/mynaui_envelope-solid_l1mphe.png",
      value: "Info@kodoscholarship.com",
    },
    {
      title: "Office Address",
      icon: "https://res.cloudinary.com/digrh1wj1/image/upload/v1742433873/mage_pin-fill_mlegus.png",
      value: "Oppegårdsstråket 5 A, lgh 1B04, 191 60 Sollentuna",
    },
  ];

  const dropDownAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const isSm = useMediaQuery("only screen and (max-width : 700px)");
  const isMd = useMediaQuery("only screen and (min-width: 750px)");
  const isLg = useMediaQuery("only screen and (min-width: 1024px)");
  const isXlg = useMediaQuery("only screen and (min-width: 1280px)");

  return (
    <div className="min-h-screen flex flex-col justify-center bg-eee">
      <CustomContainer className="bg-eeeef7  rounded-4xl  relative -mb-16">
          <div className="absolute top-0 right-0 h-64 w-64">
            <div className="relative w-full h-full"><img src="https://res.cloudinary.com/digrh1wj1/image/upload/v1742433295/Kodo-image-2-2we_1_op5x1b.png" 
          alt="vector" fill objectFit="contain" objectPosition="right"/></div>
          </div>
            <div className="contact-header-fix-error">
              <h1 className="mb-8 text-[32px] font-bold leading-tight text-[#1A1060]"
                style={{
                  textAlign: 'center'
                }}
              >Reach Out to us</h1>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <div className="mb-16 grid gap-6 md-grid-cols-3 z-20"
                    style={{
                      display: "grid",
                      gap: "1.5rem", // gap-6
                      gridTemplateColumns: isSm ? "1fr" : "repeat(3, 1fr)",
                      maxWidth: "1200px",
                      width: "100%",
                    }}
                >
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center rounded-4xl bg-white text-center p-8 motion"
                      initial="hidden"
                      animate="visible"
                      variants={dropDownAnimation}
                      transition={{ delay: index * 0.1 }} // Adds a stagger effect
                      style={{
                        width: isXlg ? 370 : "100%",
                        margin: "0 auto",
                      }}
                    >
                      <div
                        className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-kodo-cyan"
                        style={{
                          marginTop: 20,
                        }}
                      >
                        <img src={item.icon} alt="" width={24} height={24} />
                      </div>
                      <h3 className="mb-2 text-base font-medium text-[#1A1060]">{item.title}</h3>
                      <p className="text-sm text-[#666666]">{item.value}</p>
                    </motion.div>
                  ))}
                </div>;
              </div>
            </div>
          </CustomContainer>
              <div className="form-section">
		<div
			className="form-section-container"
		>
			<CustomContainer>
			<h2 className="contact-header">Send us a message</h2>

			<form className="form-container">
				<div className="input-grid">
				<input className="input-field" placeholder="Name" />
				<input className="input-field" placeholder="Phone" type="tel" />
				</div>
				<input className="input-field" placeholder="Email Address" type="email" />
				<textarea className="input-field" placeholder="Message or inquiry" />
				<button className="send-button">Send Message</button>
			</form>

			</CustomContainer>
		</div>
      </div>
              <div className='map'>
                  <h2 className="mb-8 text-center text-[28px] font-bold leading-tight text-[#1A1060]">
                    Scholarships all around the world
                  </h2>
                  <div className="relative aspect-[1.85/1] w-full overflow-hidden rounded-[32px] ">
                    <img src={mapImage} alt="World Map" fill className="object-cover  rounded-lg" />
                  </div>
              </div>

              <section className="" style={{
                width: '90%',
                margin: 'auto'
              }}>
                <div className=" rounded-4xl pb-24  relative">
                  <FindScholarships />
                </div>
                <div className="h-60 w-full"/>
              </section>
        </div>
  );
}
