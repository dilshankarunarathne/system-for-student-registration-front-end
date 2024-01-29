import { useParams, Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../auth/AuthContext.jsx';

import StudentTile from '../widgets/StudentTile';

import './Course.css';

const Course = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoggedIn } = useContext(AuthContext);

  const [course, setCourse] = useState({ code: '', academic_year: '', lecturer: '', credits: '' });

  useEffect(() => {
    const OAUTH_TOKEN = localStorage.getItem('token');

      const fetchData = async () => {
          const response = await fetch('http://127.0.0.1:8000/api/course/get-by-id', {
              method: 'GET',
              headers: {
                  'Authorization': `Bearer ${OAUTH_TOKEN}`,
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ cid: id }),
          });

          if (!response.ok) {
              throw new Error('Network response was not ok');
          }

          const data = await response.json();
          setCourse(data);
      };

      fetchData();
  }, [id]);

  useEffect(() => {
      return () => {
          if (!isLoggedIn) {
              navigate('/lecturer-login');
          }
      };
  }, [isLoggedIn, navigate]);

  return (
    <div>
        <div className="text-3xl font-bold course-info">
            <h2 className='text-course-info'>Course Code: {course.data.code}</h2>
            <h2 className='text-course-info'>Academic Year: {course.data.academic_year}</h2>
            <h2 className='text-course-info'>Lecturer: {lecturer.name}</h2>
            <h2 className='text-course-info'>Credits: {course.data.credits}</h2>
        </div>

        <div className='flex flex-wrap justify-center items-start student-tiles'>
          {course.data.enrolled_students_sid.map((studentId) => (
              <Link to={`/student/${studentId}`} key={studentId}>
                  <StudentTile id={studentId} />
              </Link>
          ))}
      </div>
    </div>
  );
};

export default Course;
