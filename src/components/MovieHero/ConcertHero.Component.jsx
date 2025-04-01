import React, { useContext, useEffect } from "react";
// import { MovieContext } from "../../context/Movie.context";
// import MovieInfo from "./MovieInfo.Component";
import { useParams } from "react-router-dom";

const MovieHero2 = () => {
//   const { movie } = useContext(MovieContext);
//   // const { movie } = useContext(MovieContext)
//   const genres = movie.genres?.map(({ name }) => name).join(", ");
//   // console.log(genres);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
const {id} = useParams();

  return (
    <>
    <h1>faboubgo , {id}</h1>
        {/* mobile or tab screen size */}
            </>
  );
};

export default MovieHero2;
