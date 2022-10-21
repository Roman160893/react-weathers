import React from 'react';

import ContentLoader from "react-content-loader"
import loaded from '../../assets/img/loaded.gif'

const SceletonMainMobile = () => {
   return (
      <div className='loaded'>
         <img src={loaded}></img>
      </div>
   );
};

export default SceletonMainMobile;   