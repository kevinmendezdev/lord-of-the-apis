import { css } from '@emotion/react';

type CloseButtonProps = {
  onClick: any;
};

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <div
      css={css`
        position: absolute;
        right: 38px;
        top: 10px;
        font-size: 46px;
      `}
      className="close-button"
      onClick={onClick}
    >
      x
    </div>
  );
};

export default CloseButton;
