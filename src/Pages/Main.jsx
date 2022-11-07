import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { slickSliderSettings } from '../assets/consts';

import { SceletonMain, WeathersNow, WeathersFuture } from '../components/index';
import SceletonMainMobile from '../components/sceleton/SceletonMainMobile';
import { getWeatherSelector } from '../redux/reducers/weathers.reducer';

const Main = () => {
  const [onWindowWidth, setOnWindowWidth] = React.useState(0);
  const { weathers, isLoaded, dateNow } = useSelector(getWeatherSelector);

  const resizeHandler = () => {
    setOnWindowWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener('resize', resizeHandler);
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
        <>{onWindowWidth > 960 ? <SceletonMain /> : <SceletonMainMobile />}</>
      )}
    </div>
  );
};

export default Main;
