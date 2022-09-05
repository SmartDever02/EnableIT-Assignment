import './style.css';

const LoadingCircle = () => {
  return (
    <div className='lds-roller'>
      {new Array(8).fill(1).map((_, index) => (
        <div key={'loader-ball-' + index} />
      ))}
    </div>
  );
};

export default LoadingCircle;
