import { Hero } from '../model/Hero';
import HeroeCard from './HeroCard';

type ResultsProps = {
  heroes: Hero[];
};

const Results = ({ heroes }: ResultsProps) => {
  return heroes.length > 0 ? (
    <div className="heroes">
      <h3>Here are your heroes</h3>
      <div className="heroCards">
        {heroes.map((heroe) => (
          <HeroeCard hero={heroe} />
        ))}
      </div>
    </div>
  ) : null;
};

export default Results;
