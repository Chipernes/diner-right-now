import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { dishCreate, homeRoute } from '../../basics/constants/routes.constants';
import NotFound from './NotFound/NotFound';
import Home from './Home/Home';
import DishCreate from './DishCreate/DishCreate';

const AuthenticatedApp: FC = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={ <NotFound /> } />
        <Route path={ homeRoute } element={ <Home /> } />
        <Route path={ dishCreate } element={ <DishCreate /> } />
      </Routes>
    </>
  );
};

export default AuthenticatedApp;
