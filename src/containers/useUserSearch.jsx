import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { listUsers } from '../actions/userActions';

const useUserSearch = (pageNo) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUsers(pageNo));
  }, [pageNo]);
};

export default useUserSearch;
