import axios from 'axios';
import topTracksActions from '../actions/topTracksActions';

axios.defaults.baseURL = ' https://ws.audioscrobbler.com/2.0/';

const API_KEY = `b6f1d80b3f168a5082c8f16b176efe99`;

const getTopTracks = page => async (dispatch, getState) => {
  dispatch(topTracksActions.topTracksRequest());
  try {
    const res = await axios.get(
      `/?method=chart.gettoptracks&api_key=${API_KEY}&limit=10&page=${page}&format=json`,
    );
    dispatch(topTracksActions.topTracksSuccess(res.data.tracks.track));
  } catch (error) {
    dispatch(topTracksActions.topTracksError(error));
    console.log('error', error.message);
  }
};

export default { getTopTracks };
