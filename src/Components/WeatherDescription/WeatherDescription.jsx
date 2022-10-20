import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WeatherDescription = ({ icon, value, description, unit }) => {
   return (
      <div className='main-content__other-block other-block'>
         <FontAwesomeIcon icon={icon} />
         <div className='other-block__content'>
            <span className='other-block__content-current'>{value}{unit}</span>
            <span className='other-block__content-text'> <b>{description}</b></span>
         </div>
      </div>
   );
};

export default WeatherDescription;