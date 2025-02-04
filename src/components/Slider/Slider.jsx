import React, { useState } from "react";
import  style from "./Slider.module.css"; // Para estilos
import Carousel from 'react-bootstrap/Carousel';


const Slider = () => {
  return (
    <div className={style.sliderContainer}>
    <Carousel>
      <Carousel.Item>
        <img className={style.sliderImage} src="https://media.revistaad.es/photos/61eac5eab1c878ef07447154/16:9/w_2560%2Cc_limit/52235738" alt="" />
        <Carousel.Caption>
          <h3>Destinos</h3>
          <p>Descripcion de destinos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className={style.sliderImage} src="https://i.pinimg.com/1200x/51/d7/25/51d72561872ee2bc1d3ecef8ed52058e.jpg" alt="" />
        <Carousel.Caption>
          <h3>Eventos</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className={style.sliderImage} src="https://i.pinimg.com/1200x/72/64/b2/7264b244b377c6bd003e07cdde82c374.jpg" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Slider;
