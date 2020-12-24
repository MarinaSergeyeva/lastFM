import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import MoviesPage from '../pages/MoviesPage';
// import MovieDetailsPage from '../pages/MovieDetailsPage';
import style from './App.module.css';
import HomePage from '../../pages/HomePage';
// import { useDispatch } from 'react-redux';
// import topTracksOperations from '../../redux/operations/topTracksOperations';
import Navigation from '../Navigation/Navigation';
import SearchPage from '../../pages/SearchPage';
import ArtistPage from '../../pages/ArtistPage';

const App = () => {
  return (
    <div className={style.mainWrapper}>
      <Navigation />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/artist/:artistId" component={ArtistPage} />
        {/* <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} /> */}
        {/* <Route path="/movies/:movieId/cast" component={<Cast />} /> */}
        {/* <Route path="/movies/:movieId/reviews" component={<Reviews />} /> */}
      </Switch>
    </div>
  );
};

export default App;
