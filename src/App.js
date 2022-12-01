import React from "react";
import {
  Route,
  Routes,
} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Menu from "./components/Menu/Menu";
import Women from "./pages/Women/Women";
import Men from "./pages/Men/Men";
import Kids from "./pages/Kids/Kids";
import Outlet from "./pages/Outlet/Outlet";
import Blog from "./pages/Blog/Blog";
import "./scss/main.scss";

const NotFound = () => <h1 className="error_404">error 404 - page not found</h1>

const App = () => {


  return (
      <div>
            <Menu/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="women" element={<Women />} />
          <Route path="men" element={<Men />} />
          <Route path="kids" element={<Kids />} />
            <Route path="outlet" element={<Outlet />} />
            <Route path="blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
  );
}

export default App;
