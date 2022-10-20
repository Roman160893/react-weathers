import React from 'react';
import { useSelector } from 'react-redux';
import Slider from "react-slick";

import { SceletonMain, WeathersNow, WeathersFuture } from '../Components/index'

const Main = () => {

   const { weathers, isLoaded, dateNow } = useSelector(({ weathers }) => weathers)

   const settings = {
      className: "center",
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 6,
      swipeToSlide: true,
      responsive: [
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
               initialSlide: 1
            }
         }
      ]
   };
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
               <SceletonMain />
         }
      </div>
   );
};

export default Main;