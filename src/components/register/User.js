import React, { Fragment, useContext, useState } from 'react';
import UserTable from './UserTable';
import RegisterContext from '../../context/register/registerContext';
import Pagination from '../pagination/Pagination';

const User = () => {
  const registerContext = useContext(RegisterContext);

  const { users } = registerContext;

  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(7);

  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Fragment>
      <UserTable key={currentUser.id} users={currentUser} />
      <Pagination
        userPerPage={userPerPage}
        totalUser={users.length}
        paginate={paginate}
      />
    </Fragment>
  );
};

export default User;
