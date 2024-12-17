import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import SearchPosts from '../pages/SearchPosts/SearchPosts';
import Login from '../pages/Login/Login';
import PrivateRoute from './PrivateRoute';


const MainRouter = () => {

  return (
    <Router>
      <Routes>
        {/* Rotas Públicas */}
         {/* Rotas Públicas */}
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<SearchPosts/>} />
        <Route path="/post/:id" element={<h1>Read Post</h1>} />
        <Route path="/login" element={<Login/>} />
       
        {/* Rotas Privadas */}
        <Route
          path="/manage"
          element={
            <PrivateRoute>
              <h1>Post Manager</h1>
            </PrivateRoute>
          }
        />
        <Route
          path="/save"
          element={
            <PrivateRoute>
              <h1>Post Editor</h1>
            </PrivateRoute>
          }
        />

        {/* Rota para páginas não encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
