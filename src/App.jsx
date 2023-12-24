import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<h1 className="text-3xl font-bold underline">Hello world!</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
