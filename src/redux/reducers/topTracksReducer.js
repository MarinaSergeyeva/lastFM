import topTracksConstants from '../constants/topTracksConstants';

const initialState = {
  topTracks: [],
};

const topTracks = (state = initialState.topTracks, { type, payload }) => {
  switch (type) {
    case topTracksConstants.TOP_TRACKS_SUCCESS:
      return payload;

    default:
      return state;
  }
};

export default topTracks;
