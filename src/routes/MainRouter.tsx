import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import PrivateRoute from './PrivateRoute';

// Componentes das Páginas
import HomePage from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';


const MainRouter = () => {
  // Simula o estado de autenticação (substitua pelo seu contexto ou lógica real)
  //const isAuthenticated = true; // Substitua por lógica de autenticação real

  return (
    <Router>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<HomePage />} />
        {/*<Route path="/login" element={<LoginPage />} />*/}

        {/* Rotas Privadas 
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </PrivateRoute>
          }
        />*/}

        {/* Rota para páginas não encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
