import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
//import PrivateRoute from './PrivateRoute';

// Componentes das Páginas
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import SearchPosts from '../pages/SearchPosts/SearchPosts';
import Login from '../pages/Login/Login';

// Componente para rotas privadas
const PrivateRoute = ({ children, isAuthenticated }: { children: React.ReactNode; isAuthenticated: boolean }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const MainRouter = () => {
  const isAuthenticated = false;


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
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <h1>Post Manager</h1>
            </PrivateRoute>
          }
        />
        <Route
          path="/save"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
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
