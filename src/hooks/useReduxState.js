import { useSelector } from 'react-redux';
import { topTracksSelector } from '../redux/selectors';

const useReduxState = () => {
  const topTracks = useSelector(topTracksSelector.getTopTracks);

  return {
    topTracks,
  };
};

export default useReduxState;
