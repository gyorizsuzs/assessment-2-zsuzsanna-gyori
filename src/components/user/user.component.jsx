import React, { useState } from 'react';

import Button from '@mui/material/Button';
import './user.styles.css';

function User({ user }) {
  const [editName, setEditName] = useState(false);

  return (
    <div className='user'>
      <h2>
        Name: {user.first_name} {user.last_name}
      </h2>
      <p className='created'>Created at: {user.created_at}</p>
      <Button variant='contained' onClick={() => setEditName(!editName)}>
        {editName ? 'Save' : 'Edit'}
      </Button>
    </div>
  );
}

export default User;
