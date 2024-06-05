import React from 'react';
import {
  BrowserRouter as Router, Route, createRoutesFromElements, useRoutes,
} from 'react-router-dom';
import Login from '../../pages/login/ui/Login';
import Chat from '../../pages/chat/ui/Chat';
import NotFound from '../../pages/notFound/ui/NotFound';
import Layout from '../layout/Layout';

const AppRoutes = () => {
  const routes = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Chat />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  );

  return useRoutes(routes);
};

const AppRouter = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default AppRouter;
