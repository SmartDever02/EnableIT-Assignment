import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../../redux/slices/dataSlice';
import { AppDispatch, RootState } from '../../../redux/store';

import './style.css';

const NEXT = 'NEXT';
const PREV = 'PREV';

const NavigationGroup = () => {
  const page = useSelector((root: RootState) => root.data.page);
  const pageLength = useSelector((root: RootState) => root.data.users.length);
  const dispatch = useDispatch<AppDispatch>();

  const navigateHandler = (dir: string) => {
    dispatch(setPage(dir === NEXT ? page + 1 : page === 0 ? 0 : page - 1));
  };

  return (
    <div className='button-group'>
      <button
        onClick={() => navigateHandler(PREV)}
        className='btn btn-prev'
        disabled={page === 0}
      >
        Prev
      </button>
      <p className='page-info'>
        Page: {page + 1} / {Math.max(pageLength, page + 1)}
      </p>
      <button onClick={() => navigateHandler(NEXT)} className='btn btn-next'>
        Next
      </button>
    </div>
  );
};

export default NavigationGroup;
