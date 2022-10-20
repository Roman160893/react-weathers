import React from 'react';
import bg from '../../assets/video/bg.mp4'

const Background = () => {
   return (
      <video
         className='video'
         autoPlay
         loop
         muted
      >
         <source src={bg} />
      </video>
   );
};

export default Background;