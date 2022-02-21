import React from "react";
import "./style.css";
import { BsFillStarFill } from "react-icons/bs";

const Card = ({ photo, superHost, type, beds, rating, title }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={photo} />
      </div>
      <div className="card__info">
        {superHost && (
          <span className="card__info__super-host">super host</span>
        )}

        <span className="card__info__type">
          {type}, {beds} beds
        </span>
        <div className="card__info__rating">
          <BsFillStarFill className="icon" />
          <span className="number">{rating}</span>
        </div>
      </div>
      <p className="card__title">{title}</p>
    </div>
  );
};

export default Card;
