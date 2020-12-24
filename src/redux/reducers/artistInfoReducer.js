import artistInfoConstants from '../constants/artistInfoConstants';

const initialState = {
  artistInfo: {},
};

const artistInfo = (state = initialState.artistInfo, { type, payload }) => {
  switch (type) {
    case artistInfoConstants.GET_ARTIST_INFO_SUCCESS:
      return { ...payload };

    default:
      return state;
  }
};

export default artistInfo;
