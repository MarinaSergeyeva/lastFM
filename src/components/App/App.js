import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Navigation from './Navigation/Navigation';
// import MoviesPage from '../pages/MoviesPage';
// import MovieDetailsPage from '../pages/MovieDetailsPage';
import './App.css';
import Home from '../../pages/Home';
import { useDispatch } from 'react-redux';
import topTracksOperations from '../../redux/operations/topTracksOperations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(topTracksOperations.getTopTracks());
  }, [dispatch]);
  return (
    <>
      {/* <Navigation /> */}
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} /> */}
          {/* <Route path="/movies/:movieId/cast" component={<Cast />} /> */}
          {/* <Route path="/movies/:movieId/reviews" component={<Reviews />} /> */}
        </Switch>
      </div>
    </>
  );
};

export default App;
