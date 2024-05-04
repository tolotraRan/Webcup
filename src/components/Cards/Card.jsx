import React from 'react';
import { Link } from 'react-router-dom';
import "../../style/card.css";
import "../../style/swiper-bundle.min.css";

export default function Card({ header, title, text }) {
  return (
    <div className="slide-container swiper">
      <div className="slide-content">
        <div className="card-wrapper swiper-wrapper">
          <div className="card swiper-slide">
            <div className="image-content">
              <span className="overlay">{header}</span>
            </div>
            <div className="card-content">
              <h2 className="name"></h2>
              <p className="description">{text}</p>
              <Link to={`/services/${header}`} className="button">View</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
