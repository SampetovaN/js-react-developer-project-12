import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <header>
      <h1>My App</h1>
      {/* Add navigation links here if needed */}
    </header>
    <main>
      <Outlet />
      {' '}
      {/* This will render the matched child route */}
    </main>
    <footer>
      <p>© 2023 My App</p>
    </footer>
  </div>
);

export default Layout;
