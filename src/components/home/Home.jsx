"use client";
import React from "react";
import "./Home.css";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <div className="homeContainer">
      <div className="spaceContainer">
        <h5 className="heading5">SO, YOU WANT TO TRAVEL TO</h5>
        <h1 className="heading1">SPACE</h1>
        <p className="bodyText">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="explore" onClick={() => router.push("/destination")}>
        <h4 className="heading4">EXPLORE</h4>
      </div>
    </div>
  );
};

export default Home;
