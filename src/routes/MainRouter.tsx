import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import SearchPosts from '../pages/SearchPosts/SearchPosts';
import Login from '../pages/Login/Login';
import PrivateRoute from './PrivateRoute';
import ReadPost from '../pages/ReadPost/ReadPost';
import ManagePosts from '../pages/ManagePosts/ManagePosts';
import SavePost from '../pages/SavePost/SavePost';
import { SearchContextProvider } from '../contexts/SearchContext';


const MainRouter = () => {

  return (
    <Router>
      <Routes>
        {/* Rotas Públicas */}
         {/* Rotas Públicas */}
        <Route path="/" element={
          <SearchContextProvider>
            <Home/>
          </SearchContextProvider>
          
          } />
        <Route path="/search" element={
          <SearchContextProvider>
            <SearchPosts/>
          </SearchContextProvider>
          } />
        <Route path="/post/:id" element={<ReadPost/>} />
        <Route path="/login" element={<Login/>} />
       
        {/* Rotas Privadas */}
        <Route
          path="/manage"
          element={
            <PrivateRoute>
              <ManagePosts/>
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute>
              <SavePost/>
            </PrivateRoute>
          }
        />
        <Route
          path="/create"
          element={
            <PrivateRoute>
              <SavePost/>
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
