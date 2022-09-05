import ReactDOM from 'react-dom';
import LoadingCircle from './LoadingCircle';

import './style.css';

const Loader = () => {
  return ReactDOM.createPortal(
    <div className='page-loader'>
      <LoadingCircle />
      <p className='applicant-info'>Applicant: James Jin</p>
    </div>,
    document.body
  );
};

export default Loader;
