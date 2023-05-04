/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Slider from "../../Components/Slider/Slider";
import { useLoaderData } from "react-router-dom";
import Card from "../../Components/Card/Card";
import PopularChef from "../../Components/PopularChef/PopularChef";
import LatestRecipes from "../../Components/LatestRecipes/LatestRecipes";
import RandomChef from "../../Components/RandomChef/RandomChef";
import Tabs from "../../Components/Tabs/Tabs";
import CountdownTimer from "../../Components/CountdownTimer/CountdownTimer";
import "./Home.css";

const Home = () => {
  const loadData = useLoaderData();
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Slider></Slider>
      <div className="homeFist">
        <div className="chef-card">
          {loadData &&
            loadData.map((data, idx) => <Card data={data} key={idx}></Card>)}
        </div>

        <div className="HomeSecond">
          <div
            style={{ backgroundColor: "#cbd5e1" }}
            className="bgcOnHomeRightSide"
          >
            <PopularChef></PopularChef>
          </div>
          <div
            style={{ backgroundColor: "#64748b" }}
            className="bgcOnHomeRightSide"
          >
            <LatestRecipes></LatestRecipes>
          </div>
          <div
            style={{ backgroundColor: "#cbd5e1" }}
            className="bgcOnHomeRightSide"
          >
            <RandomChef></RandomChef>
          </div>
        </div>
      </div>
      <div className="HomeThird">
        <div className="HomeFourth">
          <Tabs></Tabs>
        </div>
        <div className="HomeFive">
          <CountdownTimer></CountdownTimer>
        </div>
      </div>
    </div>
  );
};

export default Home;
