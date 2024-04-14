import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupForm from './Components/SignupForm';
import Chat from './Components/Chat';
import NotFound from './Components/NotFound';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<SignupForm />} />
      <Route path="/" element={<Chat />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
