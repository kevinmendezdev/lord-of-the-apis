import React from 'react';
import { css } from '@emotion/react';

import brokenSword from '../assets/broken-sword.png';

const ErrorMessage = ({ error }: { error: string }) => {
  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 68vh;
          & > p {
            font-size: 20px;
            text-align: center;
            padding: 0;
            margin: 4px;
          }
        `}
      >
        <img
          css={css`
            width: 100%;
            height: auto;
            max-width: 320px;
            @media (max-width: 400px) {
              & {
                max-width: 160px;
              }
          `}
          src={brokenSword}
          alt="broken sword"
        />
        <p>Oops!</p>
        <p>{error}</p>
        <p>Try again with other deck id!</p>
      </div>
    </>
  );
};

export default ErrorMessage;
