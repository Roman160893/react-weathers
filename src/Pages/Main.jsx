import React from 'react';
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import { settings } from '../assets/consts';

import { SceletonMain, WeathersNow, WeathersFuture } from '../Components/index'
import SceletonMainMobile from '../Components/Sceleton/SceletonMainMobile';

const Main = () => {

   const [onWindowWidth, setOnWindowWidth] = React.useState(0)
   const { weathers, isLoaded, dateNow } = useSelector(({ weathers }) => weathers)

   const resizeHandler = () => {
      setOnWindowWidth(window.innerWidth)
   }

   React.useEffect(() => {
      window.addEventListener("resize", resizeHandler);
      resizeHandler();
      return () => {
         window.removeEventListener("resize", resizeHandler);
      };
   }, [])

   return (
      <div className='main-content'>
         {
            isLoaded ?
               <>
                  <WeathersNow
                     weatherNow={weathers.list[0]}
                     dateNow={dateNow}
                  />
                  <div className='others-block '>
                     <Slider {...settings} arrows={false} res>
                        {
                           weathers.list.slice(1).map((obj, index) =>
                              <WeathersFuture
                                 key={index}
                                 obj={obj} />
                           )
                        }
                     </Slider>
                  </div>
               </>
               :
               <>
                  {
                     onWindowWidth > 960 ? <SceletonMain /> : <SceletonMainMobile />
                  }
               </>
         }
      </div>
   );
};

export default Main;