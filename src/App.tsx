import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import components
import Loader from './components/loader';

// lazy loading
const Landing = lazy(() => import('./views/landing'));
const Dashboard = lazy(() => import('./views/dashboard'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
