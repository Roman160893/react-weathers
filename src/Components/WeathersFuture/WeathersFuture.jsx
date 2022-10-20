import React from 'react';
import { getImage } from '../../assets/functions';

const WeathersFuture = ({ obj }) => {

   return (
      <div className='main-content__main main-small'>
         {
            obj.weather.map((el, index) => {
               return (
                  <div className='main-content__icon main-small__icon' key={index}>
                     <img src={getImage(el.icon)}></img>
                     <p>{`${el.description[0].toUpperCase()}${el.description.slice(1).toLowerCase()}`}</p>
                  </div>
               )
            })
         }
         <div className='main-content__temperature main-small__temperature'>
            <div>
               <span>{Math.ceil(obj.main.temp)}</span>
               <span className='degree small-degree'>°C</span>
            </div>
         </div>
         <div className='main-content__date main-small__date'>
            {obj.dt_txt}
         </div>
      </div>
   );
};

export default WeathersFuture;