import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import useReduxState from '../../hooks/useReduxState';
import SearchListItem from '../SearchListItem/SearchListItem';

const SearchList = () => {
  const { searchList } = useReduxState();

  return (
    <>
      {searchList.length > 0
        ? searchList.map(item => (
            <SearchListItem
              key={uuidv4()}
              track={item.name}
              artist={item.artist}
            />
          ))
        : 'No tracks found'}
    </>
  );
};

export default SearchList;
