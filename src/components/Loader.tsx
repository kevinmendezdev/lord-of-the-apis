import PulseLoader from 'react-spinners/PulseLoader';
import { css } from '@emotion/react';

const Loader = () => {
  return (
    <div className="status">
      <p> loading</p>
      <PulseLoader color="#000000" />
    </div>
  );
};

export default Loader;
