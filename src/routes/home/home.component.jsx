import React, { useEffect, useState } from 'react';

import { Button } from '@mui/material';

import LoadingMask from '../../components/loading/loading.component';
import User from '../../components/user/user.component';

import './home.styles.css';

function Home() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [firstUser, setFirstUser] = useState(0);
  const [lastUser, setLastUser] = useState(10);

  useEffect(() => {
    fetch(`https://assessment-users-backend.herokuapp.com/users.json`, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        /* console.log(data); */
        setUsers(data);
        setLoading(false);
      });
  }, [firstUser, lastUser]);

  function handlePrev() {
    if (firstUser > 1) {
      setFirstUser(firstUser - 10);
      setLastUser(lastUser - 10);
    } else {
      setFirstUser(0);
      setLastUser(10);
    }
  }

  function handleNext() {
    if (lastUser < 90) {
      setFirstUser(firstUser + 10);
      setLastUser(lastUser + 10);
    } else {
      setFirstUser(80);
      setLastUser(90);
    }
  }

  return (
    <div className='App'>
      <h1 className='title'>Users</h1>
      <div className='main-container'>
        <div className='inner-container'>
          {loading ? (
            <LoadingMask />
          ) : (
            users
              .slice(firstUser, lastUser)
              .map((user, index) => <User key={index} user={user} />)
          )}
        </div>
        <div className='button-container'>
          <Button onClick={handlePrev}>prev</Button>
          <Button onClick={handleNext}>next</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
