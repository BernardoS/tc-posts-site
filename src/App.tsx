import MainRouter from './routes/MainRouter';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <MainRouter/>
    </AuthProvider>
  )
}

export default App
