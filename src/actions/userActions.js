import axios from 'axios';
import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from '../constants/UserConstants';

export const listUsers = (pageNo) => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const { data } = await axios.get(
      `https://reqres.in/api/users?page=${pageNo}`
    );
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_LIST_FAIL, payload: error });
  }
};

export const saveUserDetails = (requestObj, userId, callback) => async (
  dispatch
) => {
  try {
    const { data } = await axios.put(
      `https://reqres.in/api/users/${userId}, ${requestObj}`
    );
    callback('success');
  } catch (error) {
    callback(error);
  }
};
