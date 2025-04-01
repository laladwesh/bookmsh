import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const CombinedPosterSlider = (props) => {
  const { title, subtitle, posters, isDark } = props;

  // Poster component defined within this file
  const Poster = ({ id, poster_path, original_title, isDark }) => (
    <Link to={`/concerts/${id}`}>
      <div className="flex flex-col items-start gap-2 px-1 md:px-3">
        <div className="h-40 md:h-80">
          <img
            src={`${poster_path}`}
            alt="poster"
            className="w-full h-full rounded-md"
          />
        </div>
        <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-black"}`}>
          {original_title}
        </h3>
      </div>
    </Link>
  );

  // Slider settings for react-slick
  const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col items-start sm:ml-3 my-2">
        <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-black"}`}>
          {title}
        </h3>
        <p className={`text-sm ${isDark ? "text-white" : "text-black"}`}>
          {subtitle}
        </p>
      </div>
      <Slider {...settings}>
        {posters.map((each, index) => (
          <Poster key={index} {...each} isDark={isDark} />
        ))}
      </Slider>
    </>
  );
};

export default CombinedPosterSlider;
