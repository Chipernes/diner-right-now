import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { homeRoute } from '../../basics/constants/routes.constants';
import NotFound from './NotFound/NotFound';
import Home from './Home/Home';

const AuthenticatedApp: FC = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={ <NotFound /> } />
        <Route path={ homeRoute } element={ <Home /> } />
      </Routes>
    </>
  );
};

export default AuthenticatedApp;
