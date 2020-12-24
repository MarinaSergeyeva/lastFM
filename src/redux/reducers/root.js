import { combineReducers } from 'redux';
import topTracksReducer from '../reducers/topTracksReducer';
import artistInfoReducer from '../reducers/artistInfoReducer';
import searchListReducer from '../reducers/searchListReducer';

const root = combineReducers({
  topTracks: topTracksReducer,
  artistInfo: artistInfoReducer,
  searchList: searchListReducer.searchList,
  searchQuery: searchListReducer.searchQuery,
});

export default root;
