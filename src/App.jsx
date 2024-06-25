import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Resume from './pages/Resume';
import Works from './pages/Works';
import Blogs from './pages/Blogs';
import Contacts from './pages/Contacts';
import LayoutOne from './Layout/LayoutOne';
import About from './pages/About';

function App() {
  const shanto = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<LayoutOne />}>
        <Route index element={<Home />} />
        <Route path='Resume' element={<Resume />} />
        <Route path='About' element={<About />} />
        <Route path='Works' element={<Works />} />
        <Route path='Blogs' element={<Blogs />} />
        <Route path='Contact' element={<Contacts />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={shanto} />
    </>
  );
}

export default App;
