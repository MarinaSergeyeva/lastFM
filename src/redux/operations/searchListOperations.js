import axios from 'axios';
import searchListActions from '../actions/searchListActions';

const API_KEY = `b6f1d80b3f168a5082c8f16b176efe99`;

const getSearchList = (query, page) => async (dispatch, getState) => {
  console.log('pageOP', page);
  console.log('queryOP', query);
  // if (!page) return;
  dispatch(searchListActions.searchTracksRequest());
  try {
    const res = await axios.get(
      `/?method=track.search&track=${query}&api_key=${API_KEY}&limit=3&page=${page}&format=json`,
    );
    if (!res.data) return;
    const searchQuery = res.data.results.trackmatches.track;
    dispatch(searchListActions.searchTracksSuccess(searchQuery));
  } catch (error) {
    dispatch(searchListActions.searchTracksError(error));
    console.log('error', error.message);
  }
};

export default { getSearchList };
