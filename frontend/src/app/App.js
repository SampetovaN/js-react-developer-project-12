import React from 'react';
// import {
//   BrowserRouter as Router, Route, createRoutesFromElements, useRoutes,
// } from 'react-router-dom';
import AppRouter from './routers/appRouter';
// import Login from '../pages/login/ui/Login';
// import Chat from '../pages/chat/ui/Chat';
// import NotFound from '../pages/notFound/ui/NotFound';
// import Layout from './layout/Layout';

const App = () => (
  // <Router>
  //   <AppRoutes />
  // </Router>
  <AppRouter />
);

export default App;

// const AppRouter = () => {
//   const routes = createRoutesFromElements(
//     <Route
//       path="/"
//       element={<Layout />}
//     >
//       <Route index element={<Chat />} />
//       <Route path="login" element={<Login />} />
//       <Route path="*" element={<NotFound />} />
//     </Route>,
//   );

//   return (
//     <Router>
//       <Routes>{routes}</Routes>
//     </Router>
//   );
// };

// const App = () => (
//   <AppRouter />
// );

// export default App;
