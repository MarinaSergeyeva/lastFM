import React from 'react';
import { useDispatch } from 'react-redux';
import useReduxState from '../../hooks/useReduxState';
import searchListOperations from '../../redux/operations/searchListOperations';
import style from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ page, setPage }) => {
  const dispatch = useDispatch();
  const { searchQuery } = useReduxState();

  const handlePageChange = () => {
    dispatch(searchListOperations.getSearchList(searchQuery, page));
    setPage(page + 1);
  };

  return (
    <button
      type="submit"
      className={style.loadMoreBtn}
      onClick={handlePageChange}
    >
      Load More...
    </button>
  );
};

export default LoadMoreBtn;
