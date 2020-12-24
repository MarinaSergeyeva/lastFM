import React from 'react';
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import artistInfoOperations from '../../redux/operations/artistInfoOperations';
import style from './TrendingListItem.module.css';

const TrendingListItem = ({ name, artist, image, url, mbid }) => {
  const picture = image[3][`#text`];
  const history = useHistory();

  const redirectToArtistPage = () => {
    history.push(`/artist/${artist}`);
  };

  return (
    <div className={style.trendingListItem}>
      <div className={style.infoWrapper}>
        <p>Track: {name}</p>
        <p className={style.artistName} onClick={redirectToArtistPage}>
          Artist: {artist}
        </p>
      </div>
      <img src={picture} alt="artist pic" width="200" />
      <a href={url} target="_blank " rel="noopener noreferrer">
        Listen to me now
      </a>
    </div>
  );
};

export default TrendingListItem;
