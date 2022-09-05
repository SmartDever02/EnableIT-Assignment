import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUsersFromAPI } from '../../../redux/slices/dataSlice';
import { RootState, AppDispatch } from '../../../redux/store';

import THeaderRow from '../../../components/dashboard/usertable/THeaderRow';
import TRow from '../../../components/dashboard/usertable/TRow';
import LoadingCircle from '../../../components/loader/LoadingCircle';

// import table header names
import theaders from '../../../data/tableheader';

import './style.css';

const UsersTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((root: RootState) => root.data);

  useEffect(() => {
    if (!data.users[data.page]) {
      dispatch(getUsersFromAPI(data.page));
    }
  }, [data.page]);

  return (
    <div className='users-table'>
      <THeaderRow names={theaders} />

      <div className='table-body'>
        {data.users[data.page]?.map((user, index) => (
          <TRow index={index} data={user} />
        ))}
      </div>

      {/* Blurry table body for loading state */}
      {!data.users[data.page] && (
        <div className='table-body-blur'>
          {data.users[data.page - 1]?.map((user, index) => (
            <TRow index={index} data={user} />
          ))}
        </div>
      )}

      {/* Showing Loader*/}
      {!data.users[data.page] && (
        <div className='table-body-loader'>
          <LoadingCircle />
        </div>
      )}
    </div>
  );
};

export default UsersTable;
