import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import About from './Pages/About';

export const routes = [
  { path: '/', name: 'Home', element: <Home />, showInNavbar: true },
  { path: '/gallery/', name: 'Gallery', element: <Gallery />, showInNavbar: true },
  { path: '/services', name: 'Services', element: <Services />, showInNavbar: true },
  {path:'/about-us' ,name:'About',element:<About/>,showInNavbar:true},
  { path: '/contact', name: 'Contact', element: <Contact />, showInNavbar: true },
  { path: '*', name: 'NotFound', element: <NotFound />, showInNavbar: false },
];
