import { useSelector } from 'react-redux';
import { topTracksSelector } from '../redux/selectors';
import artistInfoSelector from '../redux/selectors/artistInfoSelector';
import searchListSelector from '../redux/selectors/searchListSelector';

const useReduxState = () => {
  const topTracks = useSelector(topTracksSelector.getTopTracks);
  const artistInfo = useSelector(artistInfoSelector.getArtistInfo);
  const searchList = useSelector(searchListSelector.getSearchList);
  const searchQuery = useSelector(searchListSelector.getSearchQuery);

  return {
    topTracks,
    artistInfo,
    searchList,
    searchQuery,
  };
};

export default useReduxState;
