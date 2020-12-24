import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import style from './App.module.css';
import HomePage from '../../pages/HomePage';
import Navigation from '../Navigation/Navigation';
import SearchPage from '../../pages/SearchPage';
import ArtistPage from '../../pages/ArtistPage';

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className={style.mainWrapper}>
          <Navigation />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/artist/:artistId" component={ArtistPage} />
          </Switch>
        </div>
      </Suspense>
    </>
  );
};

export default App;
