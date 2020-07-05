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

export default (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case SEND_EMAIL:
      return {
        ...state,
        email: [action.payload],
      };
    case GET_USER:
      return {
        ...state,
        users: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== action.payload),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };
    case SORT_NAME_ASC:
      return {
        ...state,
        users: state.users.sort((a, b) =>
          a.firstname.toLowerCase() > b.firstname.toLowerCase() ? 1 : -1
        ),
      };
    case SORT_NAME_DSC:
      return {
        ...state,
        users: state.users.sort((a, b) =>
          b.firstname.toLowerCase() > a.firstname.toLowerCase() ? 1 : -1
        ),
      };
    case SORT_EMAIL_ASC:
      return {
        ...state,
        users: state.users.sort((a, b) =>
          a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1
        ),
      };
    case SORT_EMAIL_DSC:
      return {
        ...state,
        users: state.users.sort((a, b) =>
          b.email.toLowerCase() > a.email.toLowerCase() ? 1 : -1
        ),
      };
    case USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case UPLOAD_IMAGE:
      return {
        ...state,
        fileName: [action.payload],
      };
    case FILTER_USER:
      return {
        ...state,
        filtered: state.users.filter((user) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return user.firstname.match(regex) || user.email.match(regex);
        }),
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        filtered: null,
      };

    default:
      return state;
  }
};
