import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
function PreviousNextMethods() {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1716767947902-9852aa9ec04d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvc3RlbHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Lovely Professional University",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1552312994-c9e517c23bd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvc3RlbHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Coventry University",
    },
  ];

  return (
    <div className="slider-container  px-8">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-2">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex justify-end items-center mt-4 space-x-4">
        <button
          className="flex items-center justify-center border border-red-500 text-white h-[50px] w-[50px] rounded-full hover:bg-red-600"
          onClick={previous}
        >
          <GoChevronLeft className="text-red-500 text-xl" />
        </button>
        <div className=" flex items-center ">
                <p className="text-red-500 ">Next: Covenant University</p>
        <button
          className="bg-red-500 text-white  h-[50px] w-[50px]  flex items-center justify-center rounded-full hover:bg-red-600"
          onClick={next}
        >
          <GoChevronRight className="text-500 text-xl" />
        </button>
        </div>

      </div>
    </div>
  );
}

export default PreviousNextMethods;
