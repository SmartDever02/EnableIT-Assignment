import UsersTable from './components/UsersTable';
import NavigationGroup from './components/NavigationGroup';

import './style.css';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <main className='dashboard-page'>
      <div className='container'>
        <h1 className='heading'>Users from API</h1>

        <UsersTable />
        <NavigationGroup />
      </div>
      <NavLink className='btn-back' to='/'>
        Back
      </NavLink>
    </main>
  );
};

export default Dashboard;
