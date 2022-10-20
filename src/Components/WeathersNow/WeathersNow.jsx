import React from 'react';
import { faDroplet, faWind, faGaugeHigh, faCloud, faEyeSlash, faMeteor } from '@fortawesome/free-solid-svg-icons'

import { getImage } from '../../assets/functions'
import FallOut from '../FallOut/FallOut';
import { WeatherDescription } from '../';

const WeathersNow = ({ weatherNow, dateNow }) => {

   const weatherNowArr = [
      { value: weatherNow.clouds.all, icon: faCloud, description: 'Хмарність', unit: "%" },
      { value: weatherNow.wind.speed, icon: faWind, description: 'Швидкість вітру', unit: "м/с" },
      { value: weatherNow.main.humidity, icon: faDroplet, description: 'Вологість', unit: "%" },
      { value: Math.ceil(weatherNow.main.feels_like), icon: faGaugeHigh, description: 'Відчувається як', unit: "°C" },
      { value: weatherNow.main.pressure, icon: faMeteor, description: 'Атмосферний тиск', unit: "hPa" },
      { value: weatherNow.visibility * 0.001, icon: faEyeSlash, description: 'Видимість', unit: "км." }
   ]

   return (
      <div className='main-page'>
         <div className='main-content__main big'>
            <div>
               {
                  weatherNow.weather.map((el, index) => {
                     return (
                        <div className='main-content__icon' key={index}>
                           <img src={getImage(el.icon)}></img>
                           <p>{`${el.description[0].toUpperCase()}${el.description.slice(1).toLowerCase()}`}</p>
                        </div>
                     )
                  })
               }
               <div className='main-content__temperature'>
                  <div>
                     <span>{Math.ceil(weatherNow.main.temp)}</span>
                     <span className='degree'>°C</span>
                  </div>
               </div>
               <div className='main-content__date'>
                  {dateNow.date}
               </div>
               <div className='main-content__day'>
                  {dateNow.days} | {dateNow.hours}
               </div>
            </div>
            <FallOut pop={weatherNow.pop}></FallOut>
         </div>
         <div className='main-content__other'>
            {
               weatherNowArr.map((obj, index) =>
                  <WeatherDescription
                     key={index}
                     {...obj}
                  />
               )
            }
         </div>
      </div>
   );
};

export default WeathersNow;