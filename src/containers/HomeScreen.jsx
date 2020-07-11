import React, { useState, useRef, useCallback } from 'react';

import { useSelector } from 'react-redux';
import useUserSearch from './useUserSearch';

import UserCard from './UserCard';

const HomeScreen = (props) => {
  const [pageNo, setPageNo] = useState(1);
  const userList = useSelector((state) => state.userList);
  const { users, loading, error, total_pages } = userList;
  const observer = useRef();

  const lastUserElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && pageNo < total_pages) {
          setPageNo((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [total_pages, loading]
  );

  useUserSearch(pageNo);

  return (
    <>
      <ul className="users">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          users.map((user, index) => {
            if (users.length === index + 1) {
              return (
                <UserCard
                  user={user}
                  key={user.id}
                  refProps={lastUserElementRef}
                />
              );
            } else {
              return <UserCard key={user.id} user={user} />;
            }
          })
        )}
      </ul>
    </>
  );
};

export default HomeScreen;
