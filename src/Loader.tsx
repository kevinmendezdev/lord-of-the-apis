import PulseLoader from 'react-spinners/PulseLoader';
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loader = () => {
  return (
    <div className="status loading">
      <p> loading</p>
      <PulseLoader color="#000000" css={override} />
    </div>
  );
};

export default Loader;
