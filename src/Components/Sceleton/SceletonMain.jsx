import React from 'react';

import ContentLoader from "react-content-loader"

const SceletonMain = () => {
   return (
      <ContentLoader
         speed={2}
         width={970}
         height={650}
         viewBox="0 0 970 650"
         backgroundColor="#606cc3"
         foregroundColor="#656d95"
      >
         <rect x="0" y="0" rx="10" ry="10" width="350" height="300" />
         <rect x="370" y="26" rx="10" ry="10" width="280" height="60" />
         <rect x="670" y="26" rx="10" ry="10" width="280" height="60" />
         <rect x="370" y="110" rx="10" ry="10" width="280" height="60" />
         <rect x="670" y="110" rx="10" ry="10" width="280" height="60" />
         <rect x="370" y="200" rx="10" ry="10" width="280" height="60" />
         <rect x="670" y="200" rx="10" ry="10" width="280" height="60" />
         <rect x="0" y="320" rx="10" ry="10" width="220" height="270" />
         <rect x="250" y="320" rx="10" ry="10" width="220" height="270" />
         <rect x="500" y="320" rx="10" ry="10" width="220" height="270" />
         <rect x="750" y="320" rx="10" ry="10" width="220" height="270" />
      </ContentLoader>
   );
};

export default SceletonMain;   