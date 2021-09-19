import React from 'react';
import { css } from '@emotion/react';

import PulseLoader from 'react-spinners/PulseLoader';

const Loader = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 50vh;
      `}
    >
      <p> loading</p>
      <PulseLoader color="#000000" />
    </div>
  );
};

export default Loader;
