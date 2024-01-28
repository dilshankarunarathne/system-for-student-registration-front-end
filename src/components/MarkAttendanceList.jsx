import { useParams, Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import axios from 'axios';

import { AuthContext } from '../auth/AuthContext.jsx';

import StudentTile from '../widgets/StudentTile';

import './MarkAttendanceList.css';

const MarkAttendanceList = () => {
    const navigate = useNavigate();
    // TODO
    // eslint-disable-next-line no-unused-vars
    const { id, type } = useParams();
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

    useEffect(() => {
        axios.get('https://api.example.com/lecture-details')
          .then(response => {
            setStartTime(response.data.startTime);
            setDuration(response.data.duration);
          })
          .catch(error => {
            console.error('There was an error!', error);
          });
    }, []);
 
  const students = [
    { id: 1, registration_number: 'EUTC/2019/COM/24', name: 'John Doe' },
    { id: 2, registration_number: 'EUTC/2019/COM/10', name: 'Jane Doe' },
    { id: 3, registration_number: 'EUTC/2019/COM/60', name: 'John Smith' },
    { id: 4, registration_number: 'EUTC/2019/COM/74', name: 'Jane Smith' },
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

        <div className='flex flex-wrap justify-center items-start mark-controls'>
          <button className="new-lecture-button text-2xl font-bold bg-blue-500 text-white p-2 rounded-lg" onClick={handleFinishMarking}>Finish Marking</button>
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
