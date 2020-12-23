import axios from 'axios';
import topTracksActions from '../actions/topTracksActions';

axios.defaults.baseURL = ' http://ws.audioscrobbler.com/2.0/';

const API_KEY = `b6f1d80b3f168a5082c8f16b176efe99`;
// Shared secret	f98bd3b44001ea648c79bc6294821d14

const getTopTracks = () => async (dispatch, getState) => {
  dispatch(topTracksActions.topTracksRequest());
  try {
    const res = await axios.get(
      `/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`,
    );
    dispatch(topTracksActions.topTracksSuccess(res.data.tracks.track));
  } catch (error) {
    console.log('error', error.message);
  }
};

export default { getTopTracks };
