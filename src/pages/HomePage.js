import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import LoadMoreBtn from '../components/LoadMoreBtn/LoadMoreBtn';
import TrendingList from '../components/TrendingList/TrendingList';
import topTracksOperations from '../redux/operations/topTracksOperations';

const HomePage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(topTracksOperations.getTopTracks(page));
  }, [dispatch, page]);
  return (
    <>
      <TrendingList />
      <LoadMoreBtn page={page} setPage={setPage} />
    </>
  );
};

export default HomePage;
