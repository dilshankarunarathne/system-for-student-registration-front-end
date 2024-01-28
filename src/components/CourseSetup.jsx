import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';

import { AuthContext } from '../auth/AuthContext.jsx';

import './CourseSetup.css';

const CourseSetup = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    return () => {
      if (!isLoggedIn) {
        navigate('/lecturer-login');
      }
    };
  }, [isLoggedIn, navigate]);

  const handleNewLecture = () => {
    navigate('/mark-attendance');
  }

  return (
    <div>
        <div className="text-3xl font-bold course-info">
            <h2 className='text-course-info'>Course Code: CS101</h2>
            <h2 className='text-course-info'>Academic Year: 2021-2022</h2>
            <h2 className='text-course-info'>Lecturer: Mr. Some Guy</h2>
            <h2 className='text-course-info'>Credits: {id}</h2>
        </div>

        <div className='flex flex-wrap justify-center items-start lec-controls'>
          <button className="new-lecture-button" onClick={handleNewLecture}>New Lecture</button>
          <button className="edit-course-button">Edit Course Details</button>
        </div>
    </div>
  );
};

export default CourseSetup;
