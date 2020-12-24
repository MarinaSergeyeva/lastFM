import axios from 'axios';
import artistInfoActions from '../actions/artistInfoActions';

const API_KEY = `b6f1d80b3f168a5082c8f16b176efe99`;

const getArtistInfo = artistName => async (dispatch, getState) => {
  dispatch(artistInfoActions.artistInfoRequest());
  try {
    const res = await axios.get(
      `/?method=artist.getinfo&artist=${artistName}&api_key=${API_KEY}&format=json`,
    );
    dispatch(artistInfoActions.artistInfoSuccess(res.data.artist));
  } catch (error) {
    dispatch(artistInfoActions.artistInfoError(error));
    console.log('error', error.message);
  }
};

export default { getArtistInfo };
