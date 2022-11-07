import React, { useEffect, useMemo, useRef, useState } from 'react';

import './FallOutStyle.scss';

const FallOut = ({ pop }) => {
  const svgRef = useRef();

  const [radius, setRadius] = useState(0);

  const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);
  const percent = useMemo(() => Math.floor(pop && pop * 100), [pop]);

  const setProgress = (percent) => circumference - (percent / 100) * circumference;

  useEffect(() => {
    setRadius(svgRef.current.r.baseVal.value);
  }, []);

  return (
    <div className="fallout">
      <div className="fallout__title">
        Ймовірність <br></br> опадів {percent}%
      </div>
      <svg className="fallout__progress" width="150px" height="150px">
        <circle
          ref={svgRef}
          className="fallout__progress-circl"
          stroke="white"
          strokeWidth="10px"
          cx="74"
          cy="74"
          r="67"
          fill="transparent"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={setProgress(percent)}
        />
      </svg>
    </div>
  );
};

export default FallOut;
