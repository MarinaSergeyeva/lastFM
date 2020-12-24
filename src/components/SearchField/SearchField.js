import React from 'react';
import { useDispatch } from 'react-redux';
import useReduxState from '../../hooks/useReduxState';
import searchListActions from '../../redux/actions/searchListActions';
import searchListOperations from '../../redux/operations/searchListOperations';
import style from './SearchField.module.css';

const SearchField = ({ page, setPage }) => {
  const { searchQuery } = useReduxState();
  const dispatch = useDispatch();

  const search = e => {
    if (!searchQuery) return;
    setPage(1);
    dispatch(searchListActions.resetSearchSuccess());
    dispatch(searchListOperations.getSearchList(searchQuery, page));

    e.preventDefault();
  };

  const handleSearchChange = e => {
    dispatch(searchListActions.setSearchSuccess(e.target.value));
  };

  return (
    <div className={style.searchFieldWrapper}>
      <h2 className={style.searchTitle}>Find your favorite song</h2>

      <form className={style.searchForm} onSubmit={search}>
        <input
          type="text"
          name="search"
          placeholder="Enter song ..."
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchField;
