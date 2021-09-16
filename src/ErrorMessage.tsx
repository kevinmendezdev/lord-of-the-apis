import brokenSword from './broken-sword.png';

const ErrorMessage = ({ error }: { error: string }) => {
  return (
    <div className="status error-Message">
      <img
        style={{ height: '220px' }}
        src={brokenSword}
        alt="broken sword"
      />
      <p>Oops!</p>
      <p>{error}</p>
      <p>Try again with other deck id!</p>
    </div>
  );
};

export default ErrorMessage;
