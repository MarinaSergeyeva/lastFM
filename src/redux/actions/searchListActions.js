import constants from '../constants/searchListConstants';

const searchTracksRequest = () => ({
  type: constants.GET_SEARCH_TRACKS_REQUEST,
});

const searchTracksSuccess = tracksList => ({
  type: constants.GET_SEARCH_TRACKS_SUCCESS,
  payload: tracksList,
});

const searchTracksError = error => ({
  type: constants.GET_SEARCH_TRACKS_ERROR,
  payload: error,
});

const setSearchRequest = () => ({
  type: constants.SET_SEARCH_REQUEST,
});

const setSearchSuccess = query => ({
  type: constants.SET_SEARCH_SUCCESS,
  payload: query,
});

const setSearchError = error => ({
  type: constants.SET_SEARCH_ERROR,
  payload: error,
});

const resetSearchRequest = () => ({
  type: constants.RESET_SEARCH_TRACKS_REQUEST,
});

const resetSearchSuccess = () => ({
  type: constants.RESET_SEARCH_TRACKS_SUCCESS,
});

const resetSearchError = error => ({
  type: constants.RESET_SEARCH_TRACKS_ERROR,
  payload: error,
});

export default {
  searchTracksRequest,
  searchTracksSuccess,
  searchTracksError,

  setSearchRequest,
  setSearchSuccess,
  setSearchError,

  resetSearchRequest,
  resetSearchSuccess,
  resetSearchError,
};
