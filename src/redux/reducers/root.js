import { combineReducers } from 'redux';
import topTracksReducer from '../reducers/topTracksReducer';

const root = combineReducers({
  topTracks: topTracksReducer,
});

export default root;
