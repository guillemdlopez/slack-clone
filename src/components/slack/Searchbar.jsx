import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';

import { startLogout } from '../../actions/auth';

const Searchbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div className="searchbar__main-div">
      <div className="searchbar__input-icon">
        <input
          type="text"
          placeholder="sarch something..."
          autoComplete="on"
          className="searchbar__input"
        />
        <SearchIcon className="searchbar__bar-icon" />
      </div>
      <p className="searchbar__logout-btn" onClick={handleLogout}>
        Log out
      </p>
      <img
        src="https://www.nintenderos.com/wp-content/uploads/2019/01/new-super-mario-bros-u-deluxe.jpg6_.jpg"
        alt="user-avatar"
        className="avatar-md"
      />
    </div>
  );
};

export default Searchbar;
