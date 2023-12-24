import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Course from './components/Course';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
