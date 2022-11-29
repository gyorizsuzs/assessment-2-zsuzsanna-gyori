import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.css';

const Navigation = () => {
  return (
    <Fragment>
      <nav className='navigation'>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/home'>
            Home
          </Link>
          <Link className='nav-link' to='/new'>
            New User
          </Link>
          <Link className='nav-link' to='/edit'>
            Edit User
          </Link>
        </div>
      </nav>
      <div className='main'>
        <Outlet />
      </div>
      <footer>This is the Footer component.</footer>
    </Fragment>
  );
};

export default Navigation;
