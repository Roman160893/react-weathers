import React from 'react';
import bg from '../../assets/video/bg1.mp4'

const Background = () => {
   return (
      <video
         className='video'
         autoPlay
         loop
         muted
         playsInline
      >
         <source src={bg} />
      </video>
   );
};

export default Background;