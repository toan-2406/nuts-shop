import React from "react";
import { Link } from "react-router-dom";
import banner from '../assets/images/banner.jpg'
const HeroSlider = () => {

  return (
    <div className="hero-slider ">
      <img src={banner} alt="banner"/>
      <div className="hero-slider__item__btn">
        <Link to="/catalog">
          <span>Shop now</span> <i className="bx bxs-cart-alt"></i>
        </Link>
      </div>
    </div>
  );
};
export default HeroSlider;
