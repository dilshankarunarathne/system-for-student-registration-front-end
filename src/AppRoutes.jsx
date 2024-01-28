import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import LecturerLogin from './components/LecturerLogin';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Course from './components/Course';
import Student from './components/Student';
import MarkAttendance from './components/MarkAttendance';
import Navbar from './components/Navbar';
import CourseSetup from './components/CourseSetup';

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/student/:id" element={<Student />} />
        <Route path="/mark-attendance/:studId/:lecId" element={<MarkAttendance />} />
        <Route path='/course-attendance-mark/:id'
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lecturer-login" element={<LecturerLogin />} />
        <Route path="/course-setup/:id" element={<CourseSetup />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
