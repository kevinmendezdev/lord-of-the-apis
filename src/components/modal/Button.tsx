import { css } from '@emotion/react';

type ButtonProps = {
  href: string;
  title: string;
};

const Button = ({ href, title }: ButtonProps) => {
  return (
    <a
      css={css`
        background-color: #000;
        border-radius: 7px;
        border: none;
        color: white;
        padding: 7px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        margin-bottom: 20px;
        display: block;
        margin: 20px auto;
        max-width: 60px;
      `}
      className="button"
      href={href}
    >
      Open
    </a>
  );
};

export default Button;
