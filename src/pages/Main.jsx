import React, { useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

import { slickSliderSettings, deviceSizes } from "../assets/consts";
import { SceletonMain, WeathersNow, WeathersFuture } from "../components/index";
import SceletonMainMobile from "../components/sceleton/SceletonMainMobile";
import { getWeatherSelector } from "../redux/reducers/weathers";

const Main = () => {
  const [onWindowWidth, setOnWindowWidth] = useState(0);

  const { weathers, isLoaded, dateNow } = useSelector(getWeatherSelector);

  const resizeHandler = () => {
    setOnWindowWidth(window.innerWidth);
  };

  React.useEffect(() => {
    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="main-content">
      {isLoaded ? (
        <>
          <WeathersNow weatherNow={weathers.list[0]} dateNow={dateNow} />
          <div className="others-block ">
            <Slider {...slickSliderSettings} arrows={false} res>
              {weathers.list.slice(1).map((obj, index) => (
                <WeathersFuture key={index} obj={obj} />
              ))}
            </Slider>
          </div>
        </>
      ) : (
        <>
          {onWindowWidth > deviceSizes.lg ? (
            <SceletonMain />
          ) : (
            <SceletonMainMobile />
          )}
        </>
      )}
    </div>
  );
};

export default Main;
