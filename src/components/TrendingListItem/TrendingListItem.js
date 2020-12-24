import React from 'react';
import { useHistory } from 'react-router-dom';
import style from './TrendingListItem.module.css';

const TrendingListItem = ({ name, artist, image, url }) => {
  const picture = image[3][`#text`];
  const history = useHistory();

  const redirectToArtistPage = () => {
    history.push(`/artist/${artist}`);
  };

  return (
    <div className={style.trendingListItem}>
      <div className={style.infoWrapper}>
        <p> {name}</p>
        <p className={style.artistName} onClick={redirectToArtistPage}>
          {artist}
        </p>
      </div>
      <img src={picture} alt="artist pic" width="200" />
      <a
        href={url}
        target="_blank "
        rel="noopener noreferrer"
        className={style.trackLink}
      >
        Listen to me now
      </a>
    </div>
  );
};

export default TrendingListItem;
