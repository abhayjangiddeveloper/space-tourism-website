"use client";
import React, { useState } from "react";
import "./Crew.css";
import Header from "@/common/header";
import { crewSlider } from "@/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";

const Crew = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderHandel = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="crewContainer">
      <div className="crewHeader">
        <Header title={"Meet your crew"} count={"02"} />
      </div>
      <div className="crewSlider">
        <div className="crewLeft">
          <div className="crewTop">
            <h3 className="heading4">{crewSlider[currentIndex].name}</h3>
            <h1 className="heading3">{crewSlider[currentIndex].title}</h1>
            <p className="bodyText">{crewSlider[currentIndex].pera}</p>
          </div>
          <div className="crewList">
            <>
              {crewSlider.map((item, index) => {
                return (
                  <li
                    key={index + item.id}
                    className={`crewSliderDot ${
                      currentIndex === index ? "crewActive" : ""
                    }`}
                    onClick={() => sliderHandel(index)}
                  ></li>
                );
              })}
            </>
          </div>
        </div>
        <div className="crewRight">
          <Image
            src={crewSlider[currentIndex].image}
            alt={crewSlider[currentIndex].name}
            className="crewImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
