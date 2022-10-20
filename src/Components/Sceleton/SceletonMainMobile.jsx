import React from 'react';

import ContentLoader from "react-content-loader"

const SceletonMainMobile = () => {
   return (
      <ContentLoader
         speed={2}
         width={390}
         height={600}
         viewBox="0 0 390 600"
         backgroundColor="#606cc3"
         foregroundColor="#656d95"
      >
         <rect x="0" y="0" rx="20" ry="10" width="140" height="350" />
         <rect x="155" y="0" rx="10" ry="10" width="210" height="50" />
         <rect x="155" y="60" rx="10" ry="10" width="210" height="50" />
         <rect x="155" y="120" rx="10" ry="10" width="210" height="50" />
         <rect x="155" y="180" rx="10" ry="10" width="210" height="50" />
         <rect x="155" y="240" rx="10" ry="10" width="210" height="50" />
         <rect x="155" y="300" rx="10" ry="10" width="210" height="50" />
         <rect x="0" y="360" rx="10" ry="10" width="82" height="200" />
         <rect x="93" y="360" rx="10" ry="10" width="82" height="200" />
         <rect x="186" y="360" rx="10" ry="10" width="82" height="200" />
         <rect x="279" y="360" rx="10" ry="10" width="82" height="200" />
      </ContentLoader>
   );
};

export default SceletonMainMobile;   