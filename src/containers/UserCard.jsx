import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveUserDetails } from '../actions/userActions';
import UserModal from './UserModal';

const UserCard = ({ user, refProps }) => {
  const [responseMsg, setResponseMsg] = useState('');
  const dispatch = useDispatch();
  const modalRef = React.useRef();
  const userEditDetailsModalRef = React.useRef();
  const openModal = () => {
    modalRef.current.openModal();
  };

  const submitUserDetails = (event) => {
    const userForm = event.target;
    event.preventDefault();
    const request = {
      first_name: userForm.first_name,
      last_name: userForm.last_name,
      email: userForm.email,
    };
    dispatch(
      saveUserDetails(request, user.id, (response) => {
        setResponseMsg(response);
        modalRef.current.close();
        userEditDetailsModalRef.current.openModal();
      })
    );
  };
  return (
    <>
      <li key={user.id} ref={refProps} onClick={openModal}>
        <div className="user">
          <img className="user-image" src={user.avatar} alt={user.first_name} />
          <div className="user-price">{user.first_name}</div>
          <div className="user-brand">{user.last_name}</div>
          <div className="user-rating">{user.email}</div>
        </div>
      </li>
      <UserModal ref={modalRef}>
        <h1>Edit Details</h1>
        <form onSubmit={submitUserDetails}>
          <label htmlFor="first_name">FirstName</label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            defaultValue={user.first_name}
          />
          <label htmlFor="last_name">Last Name</label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            defaultValue={user.last_name}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            defaultValue={user.email}
          />
          <button type="submit" className="button">
            Save
          </button>
          <button onClick={() => modalRef.current.close()} className="button">
            Cancel
          </button>
        </form>
      </UserModal>
      <UserModal ref={userEditDetailsModalRef}>
        <h3>{responseMsg}</h3>
        <button
          className="button"
          onClick={() => userEditDetailsModalRef.current.close()}
        >
          Cancel
        </button>
      </UserModal>
    </>
  );
};

export default UserCard;
