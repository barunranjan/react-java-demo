import React from 'react';
import User from '../register/User';
import UserFilter from './UserFilter';

const UserList = () => {
  return (
    <div>
      <UserFilter />
      <User />
    </div>
  );
};

export default UserList;
