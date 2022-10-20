import React, { useEffect, useRef, useState } from 'react';

import './FallOutStyle.scss'

const FallOut = ({ pop }) => {

   const svgRef = useRef()

   const [radius, setRadius] = useState(0)

   useEffect(() => {
      setRadius(svgRef.current.r.baseVal.value)
   }, [])

   const circumference = 2 * Math.PI * radius
   const percent = Math.floor(pop && pop * 100)

   function setProgress(percent) {
      const offset = circumference - percent / 100 * circumference
      return offset;
   }

   return (
      <div className='fallout'>
         <div className='fallout__title'>Ймовірність <br></br> опадів {percent}%</div>
         <svg className='fallout__progress' width='150px' height='150px' >
            <circle
               ref={svgRef}
               className='fallout__progress-circl'
               stroke="white"
               strokeWidth="10px"
               cx='74'
               cy='74'
               r='67'
               fill='transparent'
               strokeDasharray={`${circumference} ${circumference}`}
               strokeDashoffset={setProgress(percent)}
            >
            </circle>
         </svg>
      </div>
   );
};

export default FallOut;