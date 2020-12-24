import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import LoadMoreBtn from '../components/LoadMoreBtn/LoadMoreBtn';
import TrendingList from '../components/TrendingList/TrendingList';
import useReduxState from '../hooks/useReduxState';
import topTracksOperations from '../redux/operations/topTracksOperations';

const HomePage = () => {
  const { topTracks } = useReduxState();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(topTracksOperations.getTopTracks(page));
  }, [dispatch, page]);
  return (
    <>
      <TrendingList />
      {topTracks.length > 0 && <LoadMoreBtn page={page} setPage={setPage} />}
    </>
  );
};

export default HomePage;
