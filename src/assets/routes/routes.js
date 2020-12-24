import { lazy } from 'react';

export const routes = [
  {
    path: '/',
    label: 'HomePage',
    exact: true,
    component: lazy(() => import('../../pages/HomePage')),
    private: false,
    restricted: false,
  },
  {
    path: '/search',
    label: 'SearchPage',
    exact: true,
    component: lazy(() => import('../../pages/SearchPage')),
    private: false,
    restricted: false,
  },
  {
    path: '/',
    label: 'ArtistPage',
    exact: true,
    component: lazy(() => import('../../pages/ArtistPage')),
    private: false,
    restricted: false,
  },
];

export const homeRoute = routes.find(route => route.label === 'HomePage');
export const searchRoute = routes.find(route => route.label === 'SearchPage');
export const artistRoute = routes.find(route => route.label === 'ArtistPage');
