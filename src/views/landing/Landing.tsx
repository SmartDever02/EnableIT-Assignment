import { NavLink } from 'react-router-dom';
import Avatar from '../../assets/Avatar.jfif';

import './style.css';

const Landing = () => {
  return (
    <main className='landing'>
      <div className='container'>
        <h1>EnableIT - Assignment</h1>
        <div className='overview'>
          <div className='applicant'>
            <img
              className='avatar'
              src={Avatar}
              width={250}
              height={250}
              draggable={false}
            />
            <p>Name: James Jin</p>
            <p>(Full-Stack developer mainly focusing on Frontend)</p>
          </div>

          <p className='description'>
            <b>Requirements:</b>
            <br />
            <desc>
              {`Use this "give-me-users-forever.herokuapp.com/api/users/0/next" and
          render 10 users at a time, and a button which when clicked give the
          next 10 users, and there should be a previuos button as well, style it
          in any way you want "impress us" , do not use any library for
          styling(can use sass) or component. api/users/{num}/next gives next
          ten users with ID num+1 and use CRA with typescript if used before
          otherwise just simple CRA`}
            </desc>
            <br />
            <br />
            <br />
            <b>Tech Used:</b>
            <desc>
              React(Typescript), Redux/Redux Tool Kit, Axios, PureCSS, Vite
            </desc>
          </p>
        </div>
        <div className='get-started'>
          <NavLink className='navbutton' to='/dashboard'>
            Get Started
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default Landing;
