import React, { useReducer } from 'react';
import axios from 'axios';
import RegisterContext from './registerContext';
import registerReducer from './registerReducer';

import {
  GET_USER,
  ADD_USER,
  DELETE_USER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_USER,
  FILTER_USER,
  CLEAR_FILTER,
  SORT_NAME_ASC,
  SORT_NAME_DSC,
  SORT_EMAIL_ASC,
  SORT_EMAIL_DSC,
  USER_ERROR,
  UPLOAD_IMAGE,
  SEND_EMAIL,
} from '../type';

const RegisterState = (props) => {
  const initialState = {
    users: [],
    current: null,
    error: null,
    email: null,
    fileName: 'Choose Image',
    filtered: null,
  };
  const [state, dispatch] = useReducer(registerReducer, initialState);

  const getUser = async () => {
    try {
      const res = await axios.get('http://localhost:8080/Users');

      dispatch({ type: GET_USER, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async (user) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      console.log(user);
      const res = await axios.post('http://localhost:8080/Users', user, config);
      alert('user added successfuly');

      dispatch({ type: ADD_USER, payload: res.data });
    } catch (error) {
      alert(error);
      dispatch({ type: USER_ERROR, payload: error.response });
    }
  };

  const deleteUser = async (id) => {
    alert('are you sure');
    try {
      await axios.delete(`http://localhost:8080/Users/${id}`);
      alert('User Deleted Sucessfully');

      dispatch({ type: DELETE_USER, payload: id });
    } catch (error) {
      alert(error);
      dispatch({ type: DELETE_USER, payload: error.response });
    }
  };
  const updateUser = async (user) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.put(
        `http://localhost:8080/Users/${user.id}`,
        user,
        config
      );
      alert('user update sucessfully');
      dispatch({ type: UPDATE_USER, payload: res.data });
    } catch (error) {
      alert(error);
      dispatch({ type: UPDATE_USER, payload: error.response });
    }
  };
  const uploadImage = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = axios.post('http://localhost:8080/upload', formData, config);
      dispatch({ type: UPLOAD_IMAGE, payload: res.data });
    } catch (error) {
      dispatch({ type: UPLOAD_IMAGE, payload: error.response });
    }
  };

  const sendEmail = async (email) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(
        'http://localhost:8080/Send-mail',
        email,
        config
      );

      dispatch({ type: SEND_EMAIL, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  const setCurrent = (user) => {
    dispatch({ type: SET_CURRENT, payload: user });
  };
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  const sortByNameAsc = (users) => {
    dispatch({ type: SORT_NAME_ASC, payload: users });
  };
  const sortByNameDsc = (users) => {
    dispatch({ type: SORT_NAME_DSC, payload: users });
  };
  const sortByEmailAsc = (users) => {
    dispatch({ type: SORT_EMAIL_ASC, payload: users });
  };
  const sortByEmailDsc = (users) => {
    dispatch({ type: SORT_EMAIL_DSC, payload: users });
  };
  const filterUser = (text) => {
    dispatch({ type: FILTER_USER, payload: text });
  };
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <RegisterContext.Provider
      value={{
        users: state.users,
        current: state.current,
        error: state.error,
        fileName: state.fileName,
        email: state.email,
        filtered: state.filtered,
        getUser,
        addUser,
        deleteUser,
        setCurrent,
        clearCurrent,
        updateUser,
        uploadImage,
        sortByNameAsc,
        sortByNameDsc,
        sortByEmailAsc,
        sortByEmailDsc,
        sendEmail,
        filterUser,
        clearFilter,
      }}
    >
      {props.children}
    </RegisterContext.Provider>
  );
};
export default RegisterState;
