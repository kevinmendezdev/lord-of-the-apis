import PulseLoader from 'react-spinners/PulseLoader';
import Center from './layout/Center';

const Loader = () => {
  return (
    <Center>
      <p> loading</p>
      <PulseLoader color="#000000" />
    </Center>
  );
};

export default Loader;
