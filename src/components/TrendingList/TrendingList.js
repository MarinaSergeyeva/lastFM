import React from 'react';
import useReduxState from '../../hooks/useReduxState';
import TrendingListItem from '../TrendingListItem/TrendingListItem';
import style from './TrendingList.module.css';

const TrendingList = () => {
  const { topTracks } = useReduxState();

  return (
    topTracks.length > 0 && (
      <>
        <div className={style.trendingList}>
          {topTracks.map(topTrack => (
            <TrendingListItem
              key={topTrack.name}
              name={topTrack.name}
              artist={topTrack.artist.name}
              mbid={topTrack.artist.mbid}
              image={topTrack.image}
              url={topTrack.url}
            />
          ))}
        </div>
      </>
    )
  );
};

export default TrendingList;
