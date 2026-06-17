import React from "react";
import { PlayIcon } from "lucide-react";
import './experience.css';
import '../../components/videosection.css';

export default function Experience({background}) {
  const handleClick = () => {
    window.open("https://youtu.be/pxUEaxAH27c?feature=shared", "_blank");
  };

  return (
    <div className={`container mx-auto ${background? 'bg': "bg-kodo-cyan"} rounded-2xl md-rounded-3xl relative`}
    >
      <div className="grid grid-cols-1 md-grid-cols-2 items-center">
        <div className="relative p-6 md-p-12">
          <div className="inline-block bg-white px-3 md-px-4 py-1 text-sm mb-4 md-mb-6"
            style={{
              borderRadius: 100
            }}
          >
            Experience
          </div>
          <h2 className="text-responsive-4xl mb-3">
            25+ years and counting
          </h2>
          <p className="text-custom text-base md-text-lg mb-6 md-mb leading-1 w-full md-w" 
            style={{
              lineHeight: 1
            }}
          >
            It is our aim to help you find opportunities for higher education
            and become agents of development in your own countries and the rest
            of the world.
          </p>
          <button
            className="bg-white text-custom px-4 md-px-6 py-2 md-py-3 flex items-center gap-2 bg-hover transition-all"
            aria-label="Play video reel"
            style={{
              borderRadius: 200,
              width: 200
            }}
            onClick={handleClick}
          >
            <div className="bg-[#FF3366] text-white p-1.5 md:p-2 rounded-full hover:bg-[#E62E5C]">
              <PlayIcon className="w-3 h-3 md:w-4 md:h-4" />
            </div>
            Play Reel
          </button>
        </div>
        <div className="flex items-end">
          <div className="sm:absolute sm:bottom-0 ">
            <img
              src="https://res.cloudinary.com/digrh1wj1/image/upload/v1742426394/portrait-student-black-woman-with-backpack-blue-background-studying-happy-face-girl-young-person-with-bag-university-education-scholarship-opportunity-learning-college_1_qwaldy.png"alt="Student with backpack"
            
              width={903}
              height={760}
            
              className="rounded-2xl object-cover  lg:flex img-size"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute right-0 bottom-0 w-48 h-48 ">
            <div className=" w-48 h-48" style={{ position: "relative" }}>
                <img
              src="https://res.cloudinary.com/digrh1wj1/image/upload/v1742426393/Kodo-image-2-2wewe_3_vsbofv.png"
              alt="Decorative pattern"
              fill
              // width={200}
              // height={200}
              className="object-fit w-full h-full"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
