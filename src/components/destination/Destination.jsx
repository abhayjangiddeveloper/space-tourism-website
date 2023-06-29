"use client";
import { useState } from "react";
import "./Destination.css";
import Header from "@/common/header";
import Image from "next/image";
import { destinationSlider } from "@/utils/data";

const Destination = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigateToTabs = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="destinationContainer">
      <div className="destinationHeader">
        <Header title={"Pick your destination"} count={"01"} />
      </div>
      <div className="renderDestinationContentContainer">
        <div className="left">
          <Image
            src={destinationSlider[currentIndex].image}
            alt={destinationSlider[currentIndex].name}
            className="destinationImage"
          />
        </div>
        <div className="right">
          <div className="destinationNavBar">
            <ul>
              {destinationSlider.map((links, index) => {
                return (
                  <li
                    key={index + links.id}
                    onClick={() => {
                      navigateToTabs(index);
                    }}
                    className={`navText ${
                      currentIndex === index ? "destinationActive" : ""
                    }`}
                  >
                    {links.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <h2 className="heading2">{destinationSlider[currentIndex].name}</h2>

          <p
            className="bodyText"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {destinationSlider[currentIndex].pera}
          </p>
          <div className="distanceAndTime">
            <div className="distance">
              <p className="Subheading2">avg. distance</p>
              <h5 className="heading4">
                {destinationSlider[currentIndex].distance}
              </h5>
            </div>
            <div className="time">
              <p className="Subheading2">est. travel time</p>
              <h5 className="heading4">
                {destinationSlider[currentIndex].time}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
