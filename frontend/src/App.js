import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Chat from './Components/Chat';
import NotFound from './Components/NotFound';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Chat />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
