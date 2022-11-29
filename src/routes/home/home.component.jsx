import React, { Fragment, useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';
import { Button } from '@mui/material';

import LoadingMask from '../../components/loading/loading.component';
import User from '../../components/user/user.component';

import './home.styles.css';

function Home() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  /* const [page, setPage] = useState(); */

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
        console.log(data);
        setUsers(data);
        setLoading(false);
      });
  }, []);

  /* function Users({ users }) {
    return (
      <Fragment>
        {users && users.map((user, index) => <User key={index} user={user} />)}
      </Fragment>
    );
  }

  function PaginatedUsers({ usersPerPage }) {
    const [userOffset, setUserOffset] = useState(0);
    const endOffset = userOffset + usersPerPage;
    const currentUsers = users.slice(userOffset, endOffset);
    const pageCount = Math.ceil(users.length / usersPerPage);

    const handlePageChange = (event) => {
      const newOffset = (event.selected * usersPerPage) % users.length;
      setUserOffset(newOffset);
    };

    return (
      <Fragment>
        <Users currentUsers={currentUsers} />
        <ReactPaginate
          breakLabel='...'
          nextLabel='next >'
          onPageChange={handlePageChange}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel='< previous'
          renderOnZeroPageCount={null}
        />
      </Fragment>
    );
  } */

  /*   const pages = [
    users
      .slice([0], [10])
      .map((user, index) => <User key={index} user={user} />),
    users
      .slice([11], [20])
      .map((user, index) => <User key={index} user={user} />),
    users
      .slice([21], [30])
      .map((user, index) => <User key={index} user={user} />),
    users
      .slice([31], [40])
      .map((user, index) => <User key={index} user={user} />),
    users
      .slice([41], [50])
      .map((user, index) => <User key={index} user={user} />),
    users
      .slice([51], [60])
      .map((user, index) => <User key={index} user={user} />),
    users
      .slice([61], [70])
      .map((user, index) => <User key={index} user={user} />),
    users
      .slice([71], [80])
      .map((user, index) => <User key={index} user={user} />),
    users
      .slice([81], [90])
      .map((user, index) => <User key={index} user={user} />),
  ]; */

  /*   function handlePrev() {
    setPage(0);
  }
  function handleNext() {
    setPage(1);
  } */

  let first = 0;
  let last = 10;

  function handlePrev() {
    if (first > 0) {
      return (first - 10) & (last - 10);
    }
  }

  function handleNext() {
    return (first + 10) & (last + 10);
  }

  return (
    <div className='App'>
      <h1 className='title'>Users</h1>
      <div className='main-container'>
        <div className='inner-container'>
          {!users ? (
            <LoadingMask />
          ) : (
            users
              .slice(first, last)
              .map((user, index) => <User key={index} user={user} />)
            /* pages[0] */
          )}
        </div>
        <div className='button-container'>
          {/* <Pagination count={9} /> */}
          <Button onClick={handlePrev}>prev</Button>
          <Button onClick={handleNext}>next</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
