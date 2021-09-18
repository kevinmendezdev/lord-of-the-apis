import { css } from '@emotion/react';
import { FormEvent } from 'react';

type SearchBarProps = {
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  value: number;
};
const SearchBar = ({ onChange, value }: SearchBarProps) => {
  return (
    <form>
      <label
        css={css`
          display: flex;
          flex-direction: column;
          max-width: 250px;
          justify-content: space-between;
          height: 50px;
          font-size: 18px;
          & input {
            width: 198px;
            margin-top: 8px;
            font-size: 18px;
          }
        `}
        className="hero-search"
      >
        Search for a decklist here:
        <input
          type="number"
          name="deck-search"
          onChange={(e) => onChange(e)}
          value={value}
        />
      </label>
    </form>
  );
};

export default SearchBar;
