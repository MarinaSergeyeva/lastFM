import constants from '../constants/artistInfoConstants';

const artistInfoRequest = () => ({
  type: constants.GET_ARTIST_INFO_REQUEST,
});

const artistInfoSuccess = artistInfo => ({
  type: constants.GET_ARTIST_INFO_SUCCESS,
  payload: artistInfo,
});

const artistInfoError = error => ({
  type: constants.GET_ARTIST_INFO_ERROR,
  payload: error,
});

export default {
  artistInfoRequest,
  artistInfoSuccess,
  artistInfoError,
};
