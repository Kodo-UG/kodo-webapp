import CustomContainer from "../ShredComponents/CustomerContainer";
import './hero.css';

export default function TestimonialHero() {
    return (
      <div className="">
        <CustomContainer className="py-4 relative lg-min-h-500 min-h"
        >
           <div className="mx-auto w-full img-fix"> 
              <img
                src="https://res.cloudinary.com/digrh1wj1/image/upload/v1742429778/Frame_69_rmvczb.png" alt="Students studying"
                // width={1016}
                // height={534}
                className="object-contain"
                // objectFit="contain"
                // objectPosition="bottom"
              />
            </div>
        </CustomContainer>
     </div>
    )
  }
  
  