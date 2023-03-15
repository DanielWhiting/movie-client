import React from "react";
// import "./hero.css";
import { Carousel } from "react-material-ui-carousel";
import { Paper } from "@mui/material";

const Hero = ({ movies }) => {
  return (
    <div>
      {/* <Carousel> */}
      {movies?.map((movie) => {
        return (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
            <div>
                <img src={movie.poster} />
             </div>
          </div>
        );
      })}
      {/* </Carousel> */}
    </div>
  );
};

export default Hero;
