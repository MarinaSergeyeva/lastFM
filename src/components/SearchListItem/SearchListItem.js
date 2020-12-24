import React from 'react';
import style from './SearchListItem.module.css';

const SearchListItem = ({ track, artist }) => {
  return (
    <div className={style.songWrapper}>
      <p className={style.trackInfo}>{track}</p>
      <span>-</span>
      <p className={style.artistInfo}>{artist}</p>
    </div>
  );
};

export default SearchListItem;
