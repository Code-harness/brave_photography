import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { routes } from './Routes.jsx';

const AppRouter = () => (
  <Router>
    <Navbar />
    <div className="min-h-[80vh] bg-green-50">
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default AppRouter;
