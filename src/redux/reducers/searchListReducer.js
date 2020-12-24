import searchListConstants from '../constants/searchListConstants';

const initialState = {
  searchList: [],
  searchQuery: '',
};

const searchList = (state = initialState.searchList, { type, payload }) => {
  switch (type) {
    case searchListConstants.GET_SEARCH_TRACKS_SUCCESS:
      return [...state, ...payload];

    case searchListConstants.RESET_SEARCH_TRACKS_SUCCESS:
      return initialState.searchList;

    default:
      return state;
  }
};

const searchQuery = (state = initialState.searchQuery, { type, payload }) => {
  switch (type) {
    case searchListConstants.SET_SEARCH_SUCCESS:
      return payload;

    default:
      return state;
  }
};

export default {
  searchList,
  searchQuery,
};
