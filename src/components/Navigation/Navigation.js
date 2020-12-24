import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={style.navigation}>
      <li className={style.navigationItem}>
        <NavLink
          to="/"
          exact
          className={style.navigationItemLink}
          activeClassName={style.navigationItemLinkActive}
        >
          Trends
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/search"
          className={style.navigationItemLink}
          activeClassName={style.navigationItemLinkActive}
        >
          Search
        </NavLink>
      </li>
    </ul>
  );
};
export default Navigation;
