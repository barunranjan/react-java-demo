import React, { useContext, useRef, useEffect } from 'react';
import RegisterContext from '../../context/register/registerContext';

const UserFilter = () => {
  const registerContext = useContext(RegisterContext);
  const { filterUser, clearFilter, filtered, getuser } = registerContext;
  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });
  const onChange = (e) => {
    if (text.current.value !== '') {
      filterUser(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter User...'
        onChange={onChange}
      />
    </form>
  );
};

export default UserFilter;
