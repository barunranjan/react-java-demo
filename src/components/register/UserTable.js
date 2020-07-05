import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RegisterContext from '../../context/register/registerContext';

const UserTable = ({ users }) => {
  const registerContext = useContext(RegisterContext);
  const {
    setCurrent,
    getUser,
    deleteUser,
    sortByNameAsc,
    sortByNameDsc,
    sortByEmailDsc,
    sortByEmailAsc,
  } = registerContext;
  const { filtered } = registerContext;

  useEffect(() => {
    getUser();
  }, []);

  const onnameSortAsc = () => {
    sortByNameAsc(users);
  };

  const onnameSortDsc = () => {
    sortByNameDsc(users);
  };
  const onemailSortAsc = () => {
    sortByEmailAsc(users);
  };
  const onemailSortDsc = () => {
    sortByEmailDsc(users);
  };

  return (
    <table style={{ width: '100%' }}>
      <tbody>
        <tr>
          <th>
            <i className='fa fa-caret-up' onClick={onnameSortAsc}></i>
            First Name
            <i className='fa fa-caret-down' onClick={onnameSortDsc}></i>
          </th>
          <th>Last Name</th>
          <th>
            <i className='fa fa-caret-up' onClick={onemailSortAsc}></i>Email
            <i className='fa fa-caret-down' onClick={onemailSortDsc}></i>
          </th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </tbody>
      {filtered !== null
        ? filtered.map((user) => {
            return (
              <tbody>
                <tr>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td onClick={() => setCurrent(user)}>
                    <Link to='/'>
                      <i className='fas fa-edit'></i>
                    </Link>
                  </td>
                  <td>
                    <a href='/user-data'>
                      <i
                        className='fas fa-trash'
                        onClick={() => {
                          deleteUser(user.id);
                        }}
                      ></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            );
          })
        : users.map((user) => {
            return (
              <tbody>
                <tr>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td onClick={() => setCurrent(user)}>
                    <Link to='/'>
                      <i className='fas fa-edit'></i>
                    </Link>
                  </td>
                  <td>
                    <a href='/user-data'>
                      <i
                        className='fas fa-trash'
                        onClick={() => {
                          deleteUser(user.id);
                        }}
                      ></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            );
          })}
    </table>
  );
};

export default UserTable;
