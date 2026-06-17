import React from 'react';
import './header.css';
import image1 from '../../assets/tes1.jpg';
import image2 from '../../assets/tes2.jpg';

const Testimonial = ({ quote, name, university, imageSrc }) => {
  return (
    <div className="rounded-3xl bg-custom p-8 md-p-10">
      <div className="mb-4">
        <img
          src="https://res.cloudinary.com/dfdswxx7x/image/upload/v1740086145/h0edbkykpylvisrmbzvg.png"
          alt="quotes"
          width={35}
          height={35}
          className="object-contain"
        />
      </div>
      <p className="mt-2 text-base md-text-lg">{quote}</p>
      <div className="mt-6 flex items-center">
        <div className="relative h-14 w-14 overflow-hidden rounded-full">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={`${name}'s profile picture`}
            sizes="50px"
            className="object-cover"
          />
        </div>
        <div className="ml-4">
          <h3 className="text font-bold">{name}</h3>
          <p className="text-sm">{university}</p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "I believe kodo  Scholarship is the easiest website to search for a multitude of different scholarships. They provide accurate deadlines and make it easy to submit scholarships through their platform",
      name: "Abraham Eskender",
      university: "Ethiopia",
      imageSrc: image1,
    },
    {
      quote:
        "I heard about kodo  scholarship through my mom! When I saw that I won I was so surprised, thankful, and happy! I go to college and study nursing and plan on being a nurse practitioner as a career! I’m so grateful for this scholarship!",
      name: "Mandla Lethokuhle",
      university: "South Africa",
      imageSrc: image2,
    },
  ]

  return (
    <section className="header-fix">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center"
         
        >
          <h2 className="mb-4 text-responsive-4xl"
          >
            Dont take our word for it
          </h2>
          <p className="mx-auto max-w-2xl text-base md:text-lg">
            We've supported so many students on their path to a degree. Their stories inspire what we do every day.
          </p>
        </div>

        <div className="grid gap-6 md-grid-cols-2 lg-gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

