import React from "react";
import { Link } from "react-router-dom";
import ProgressCircle from "../../baseUI/progress-circle";
import Ellipsis from "../../baseUI/ellipsis";

const getPosterUrl = (posterpath) => {
  return `https://media.themoviedb.org/t/p/w220_and_h330_face${posterpath}`;
};

const MovieCards = ({
  vote_average,
  poster_path,
  name,
  title,
  first_air_date,
  release_date,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(name || title); // Pass the name or title to the onClick function
    }
  };

  return (
    <div className="movieCard">
      <div className="movieimg">
        <img
          src={getPosterUrl(poster_path)}
          alt={name}
          className="cardImg"
          onClick={handleClick}
        />
        <div className="imgcircle">
          <ProgressCircle percent={vote_average *10} />
        </div>
        <div className="imgdots">
          <Ellipsis/>
          </div>
      </div>
      <div className="cardContent">
        <h1 className="cardtitle">{name || title}</h1>
        <p className="carddate">{first_air_date || release_date}</p>
      </div>
    </div>
  );
};

export default MovieCards;
