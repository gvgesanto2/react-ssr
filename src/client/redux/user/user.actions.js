import axios from 'axios';
import UserActionTypes from './user.types';

export const fetchUsers = () => async dispatch => {
  const res = await axios.get("http://react-ssr-api.herokuapp.com/users");

  dispatch({
    type: UserActionTypes.FETCH_USERS,
    payload: res
  });
};