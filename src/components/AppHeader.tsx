import { css } from '@emotion/react';

type AppHeaderProps = {
  title: string;
};
const AppHeader = ({ title }: AppHeaderProps) => {
  return (
    <header>
      <h1
        css={css`
          font-size: 3em;
          @media (max-width: 600px) {
            & {
              font-size: 2.8em;
              text-align: center;
            }
          }
        `}
      >
        Lord of the APIS
      </h1>
    </header>
  );
};

export default AppHeader;