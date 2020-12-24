import React, { useState } from 'react';
import LoadMoreBtn from '../components/LoadMoreBtn/LoadMoreBtn';
import SearchField from '../components/SearchField/SearchField';
import SearchList from '../components/SearchList/SearchList';
import useReduxState from '../hooks/useReduxState';
import style from './SearchPage.module.css';

const SearchPage = () => {
  const [page, setPage] = useState(0);
  const { searchList } = useReduxState();

  return (
    <div className={style.searchPageWrapper}>
      <SearchField page={page} setPage={setPage} />
      <SearchList searchList={searchList} />
      {console.log('page', page)}
      {page > 0 && <LoadMoreBtn page={page} setPage={setPage} />}
    </div>
  );
};

export default SearchPage;
