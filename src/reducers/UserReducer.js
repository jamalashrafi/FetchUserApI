import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from '../constants/UserConstants';

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { ...state, loading: true };
    case USER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, ...action.payload.data],
        total_pages: action.payload.total_pages,
      };
    case USER_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
