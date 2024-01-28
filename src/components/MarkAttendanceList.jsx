import { useParams, Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../auth/AuthContext.jsx';

import StudentTile from '../widgets/StudentTile';

import './MarkAttendanceList.css';

const MarkAttendanceList = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { isLoggedIn } = useContext(AuthContext);

    const [timeNow, setTimeNow] = useState(new Date().toLocaleTimeString());
    const [startTime, setStartTime] = useState(null);
    const [duration, setDuration] = useState(null);

    useEffect(() => {
        const timer = setInterval(() => {
          setTimeNow(new Date().toLocaleTimeString());
        }, 1000);
    
        return () => {
          clearInterval(timer);
        };
    }, []);
 
  const students = [
    { id: 1, registration_number: 'EUTC/2019/COM/24', name: 'John Doe' },
    { id: 2, registration_number: 'EUTC/2019/COM/10', name: 'Jane Doe' },
    { id: 3, registration_number: 'EUTC/2019/COM/60', name: 'John Smith' },
    { id: 4, registration_number: 'EUTC/2019/COM/74', name: 'Jane Smith' },
    /*{ id: 5, registration_number: 'EUTC/2019/COM/57', name: 'Simon Doe' },
    { id: 6, registration_number: 'EUTC/2019/COM/63', name: 'Karen Doe' },*/
  ];

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
            <h2 className='text-course-info'>Course Code: CS101</h2>
            <h2 className='text-course-info'>Academic Year: 2021-2022</h2>
            <h2 className='text-course-info'>Lecturer: Mr. Some Guy</h2>
            <h2 className='text-course-info'>Credits: {id}</h2>
            <h2 className='text-course-info'>Lecture Started At: {startTime}</h2>
            <h2 className='text-course-info'>Lecture Duration: {duration}</h2>
            <h2 className='text-course-info'>Now: {timeNow}</h2>
        </div>

        <div className='flex flex-wrap justify-center items-start student-tiles'>
            {students.map((student) => (
                <Link to={`/student/${student.id}`} key={student.id}>
                    <StudentTile registration_number={student.registration_number} name={student.name} />
                </Link>
            ))}
        </div>
    </div>
  );
};

export default MarkAttendanceList;
