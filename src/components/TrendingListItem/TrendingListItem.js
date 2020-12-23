import React from 'react';
import { Link } from 'react-router-dom';
import style from './TrendingListItem.module.css';

const TrendingListItem = ({ name, artist, image, url }) => {
  console.log('image', image[0][`#text`]);
  const picture = image[3][`#text`];
  return (
    <div className={style.trendingListItem}>
      <p>Track: {name}</p>
      <p>Artist: {artist}</p>
      <p>Image: </p>
      <img src={picture} alt="artist pic" />
      <Link to={url}>{url}</Link>
    </div>
  );
};

export default TrendingListItem;
