import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import ArtistInfo from '../components/ArtistInfo/ArtistInfo';
import artistInfoOperations from '../redux/operations/artistInfoOperations';

const ArtistPage = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const artistName = match.params.artistId;

  useEffect(() => {
    dispatch(artistInfoOperations.getArtistInfo(artistName));
  }, [dispatch, artistName]);
  return (
    <>
      <ArtistInfo />
    </>
  );
};

export default ArtistPage;
