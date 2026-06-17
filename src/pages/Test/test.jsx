import React from 'react'
import Experience from "../../components/about/Experience";
import FindScholarships from "../../components/about/FindScholarships";
import CustomContainer from "../../components/ShredComponents/CustomerContainer";
import TestimonialHeader from "../../components/testimonials/TestimonialHeader";
import TestimonialHero from "../../components/testimonials/TestimonialHero";
import { data } from "../../data/testimonials";

export default function Test(){
  return (
    <div>
         <div className="min-h-screen bg-white">
		<main className="">
		  <div className="">
			<TestimonialHero />
		  </div>
		  <div className="bg-white rounded-t-4xl">
				 <CustomContainer py="py-4">  <div className="pt-16 mb-16 md:pt-20 md:pb-30">
  
				 <TestimonialHeader />
				 </div>
  
  <div className="pt-16 md:pt-20 md:pb-30">
  <Experience background="bg-[#eeeef7]"/>
  
  </div>
  
		  <section className="py-20 ">
		  <div className="container mx-auto px-6 flex items-center justify-center flex-col mb-12">
			<div className="grid md:grid-cols-3 gap-8">
			  {data.map((d, i) => (
				<div key={i} className="bg-white shadow-lg rounded-[24px]">
				  <div className="p-8">
					<img
					  src="https://res.cloudinary.com/dfdswxx7x/image/upload/v1740086145/h0edbkykpylvisrmbzvg.png"
					  alt="quotes"
					  className="object-contain mb-4"
					  width={35}
					  height={35}
					/>
					<p className="text-gray-600 mb-6 text-[11px]">
					{d.description}
					</p>
					<div className="flex items-center gap-4">
					  <img
										src={d.image}  // No need to convert to string
										width={100}
										height={100}
										className="object-cover rounded-full"
										alt="Scholarship student"
									  />
					  <div>
						<p className="font-semibold">{d.name}</p>
						<p className="text-sm text-gray-600">{d.school}</p>
					  </div>
					</div>
				  </div>
				</div>
			  ))}
			</div>
		  </div>
		</section>
		  <div className=" rounded-2xl md:rounded-4xl">
			<FindScholarships />
			  </div>
			  <div className="h-64 w-full"/>
	
			</CustomContainer>
				</div>
	  </main>
	  </div>
    </div>
  )
}

