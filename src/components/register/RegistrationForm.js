import React, { useState, useContext, useEffect } from 'react';
import RegisterContext from '../../context/register/registerContext';

const RegistrationForm = () => {
  const registerContext = useContext(RegisterContext);

  const {
    addUser,
    current,
    updateUser,
    clearCurrent,
    clearFilter,
  } = registerContext;

  useEffect(() => {
    if (current != null) {
      setUser(current);
    } else {
      setUser({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
      });
    }
  }, [registerContext, current]);

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const { firstname, lastname, email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addUser(user);
    } else {
      updateUser(user);
      clearFilter();
      clearCurrent();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Firstname'
        name='firstname'
        value={firstname}
        onChange={onChange}
        required
      />
      <input
        type='text'
        placeholder='Lastname'
        name='lastname'
        value={lastname}
        onChange={onChange}
        required
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
        required
      />
      <input
        type='password'
        placeholder='Password'
        name='password'
        value={password}
        onChange={onChange}
        required
        maxLength='10'
        minLength='6'
      />

      <div>
        <input
          type='submit'
          value={current !== null ? 'Update User' : 'Register User'}
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default RegistrationForm;
