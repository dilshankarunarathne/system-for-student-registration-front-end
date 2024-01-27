import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './auth/AuthContext';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
