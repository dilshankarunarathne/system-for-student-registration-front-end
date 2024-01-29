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
      const fetchData = async () => {
          const response = await fetch('http://127.0.0.1:8000/api/course/get-by-id', {
              method: 'GET',
              headers: {
                  'Authorization': `Bearer ${YOUR_OAUTH_TOKEN}`,
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
            <h2 className='text-course-info'>Course Code: {course.code}</h2>
            <h2 className='text-course-info'>Academic Year: {course.academic_year}</h2>
            <h2 className='text-course-info'>Lecturer: Mr. Some Guy</h2>
            <h2 className='text-course-info'>Credits: {course.credits}</h2>
        </div>

        <div className='flex flex-wrap justify-center items-start student-tiles'>
            {students.map((student) => (
                <Link to={`/student/${student.id}`} key={student.id}>
                    <StudentTile id={student.id} />
                </Link>
            ))}
        </div>
    </div>
  );
};

export default Course;
