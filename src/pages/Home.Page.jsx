import React, { useEffect, useState } from "react";
import axios from "axios";

// HOC
import DefaultlayoutHoc from "../layout/Default.layout";

// Components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import CombinedPosterSlider from "../components/PosterSlider2";

const HomePage = () => {
  const [recommendedMovies, setrecommendedMovies] = useState([]);
  const [premierMovies, setpremierMovies] = useState([]);
  const [onlineStreamEvents, setonlineStreamEvents] = useState([]);

  const [upcomingConcerts, setupcomingConcerts] = useState([
    {
      "original_language": "Hindi",
      "original_title": "SANAM Live In Concert Mumbai",
      "overview": "Bollywood, Indian Pop",
      "poster_path": "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sanam-live-in-concert-0-2025-1-21-t-7-13-1.jpg",
      "release_date": "Sat, 15 March 2025",
      "venue": "Courtyard, R City Mall: Ghatkopar",
      "time": "7:00 PM",
      "duration": "2hrs",
      "price": "₹ 9999 onwards",
      "id":1
    },
    {
      "original_language": "English",
      "original_title": "MARTIN GARRIX - World's Biggest Holi",
      "overview": "EDM, DJ",
      "poster_path": "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-martin-garrix-world-s-biggest-holi-0-2025-3-7-t-8-52-11.jpg",
      "release_date": "Fri, 14 March 2025",
      "venue": "D.Y. Patil Stadium: Navi Mumbai",
      "time": "2:00 PM",
      "duration": "8hrs",
      "price": "₹ 499 onwards",
      "id":2
    },
    {
      "original_language": "Hindi",
      "original_title": "Splendor of Masters",
      "overview": "Ghazal, Indian Classical",
      "poster_path": "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-splendor-of-masters-0-2025-3-7-t-12-4-41.jpg",
      "release_date": "Thu, 27 March 2025",
      "venue": "Jamshed Bhabha Theatre: NCPA",
      "time": "6:15 PM",
      "duration": "3hrs",
      "price": "₹ 500 onwards",
      "id":3
    },
    {
      "original_language": "Hindi",
      "original_title": "Amit Trivedi Live - Mumbai",
      "overview": "Bollywood",
      "poster_path": "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-amit-trivedi-live-0-2025-2-5-t-6-58-50.jpg",
      "release_date": "Sun, 25 May 2025",
      "venue": "Shanmukhananda Hall: Mumbai",
      "time": "6:30 PM",
      "duration": "2hrs 30mins",
      "price": "₹ 1499 onwards",
      "id":4
    },
    {
      "original_language": "Hindi, Gujrati",
      "original_title": "Sachin - Jigar Live",
      "overview": "Bollywood, Indian Pop, Regional",
      "poster_path": "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sachin-jigar-live-0-2025-3-3-t-9-51-13.jpg",
      "release_date": "Sat, 19 April 2025",
      "venue": "Grand Theatre, Nita Mukesh Ambani Cultural Centre",
      "time": "7:30 PM",
      "duration": "2hrs 55mins",
      "price": "₹ 1250 onwards",
      "id":5
    },
    {
      "original_language": "Hindi, Gujrati, English",
      "original_title": "Womens Day Weekender 2025",
      "overview": "Bollywood",
      "poster_path": "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-women-s-day-weekender-2025-largest-women-s-day-0-2025-2-6-t-12-30-39.jpg",
      "release_date": "Sun, 9 March 2025",
      "venue": "Inorbit Mall: Malad",
      "time": "4:00 PM",
      "duration": "6hrs",
      "price": "₹ 800 onwards",
      "id":6
    },
    {
      "original_language": "Hindi",
      "original_title": "Kumar Sanu Live in Concert",
      "overview": "Bollywood",
      "poster_path": "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-kumar-sanu-live-in-concert-0-2025-2-28-t-8-3-27.jpg",
      "release_date": "Sat, 2 Aug 2025",
      "venue": "Shanmukhananda Hall: Mumbai",
      "time": "7:00 PM",
      "duration": "2hrs 30mins",
      "price": "₹ 699 onwards",
      "id":7
    },
    {
      "original_language": "Hindi",
      "original_title": "Adnan Sami Live In Concert - Mumbai",
      "overview": "Bollywood, Sufi",
      "poster_path": "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-adnan-sami-live-in-concert-0-2025-2-28-t-6-49-31.jpg",
      "release_date": "Sat, 7 Jun 2025",
      "venue": "Shanmukhananda Hall: Mumbai",
      "time": "7:00 PM",
      "duration": "2hrs 30mins",
      "price": "₹ 699 onwards",
      "id":8
    },
    {
      "original_language": "Hindi",
      "original_title": "Abhijeet Bhattacharya live in concert",
      "overview": "Bollywood",
      "poster_path": "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-abhijeet-bhattacharya-live-in-concert-0-2024-12-17-t-6-41-20.jpg",
      "release_date": "Fri, 21 Mar 2025",
      "venue": "Shanmukhananda Hall: Mumbai",
      "time": "7:00 PM",
      "duration": "2hrs",
      "price": "₹ 750 onwards",
      "id":9
    },
    {
      "original_language": "English",
      "original_title": "The Manasi Scott Experience",
      "overview": "Indie, Pop",
      "poster_path": "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-the-manasi-scott-experience-0-2025-2-21-t-11-6-18.jpg",
      "release_date": "Fri, 21 Mar 2025",
      "venue": "Studio Theatre, Nita Mukesh Ambani Cultural Centre",
      "time": "8:00 PM",
      "duration": "1hr 30mins",
      "price": "₹ 750 onwards",
      "id":10
    }
  ]
  );
  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setrecommendedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setpremierMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setonlineStreamEvents(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);

  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 my-3">
          The Best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of Recommended Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <CombinedPosterSlider
          title="Upcoming Concerts"
          subtitle="List of Upcoming Concerts"
          posters={upcomingConcerts}
          isDark={false}
        />
      </div>
      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <PosterSlider
            title="Premiers"
            subtitle="Brand new release every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
        <PosterSlider
          title="Online Streaming Events"
          subtitle="Online Streaming Events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultlayoutHoc(HomePage);
