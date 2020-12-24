import constants from '../constants/topTracksConstants';

const topTracksRequest = () => ({
  type: constants.TOP_TRACKS_REQUEST,
});

const topTracksSuccess = topTracks => ({
  type: constants.TOP_TRACKS_SUCCESS,
  payload: topTracks,
});

const topTracksError = error => ({
  type: constants.TOP_TRACKS_ERROR,
  payload: error,
});

export default {
  topTracksRequest,
  topTracksSuccess,
  topTracksError,
};
