import { useParams, Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import axios from 'axios';

import { AuthContext } from '../auth/AuthContext.jsx';

import StudentTile from '../widgets/StudentTile';

import './MarkAttendanceList.css';

const MarkAttendanceList = () => {
  const navigate = useNavigate();
    const { id, type } = useParams();
    const { isLoggedIn } = useContext(AuthContext);

    const [timeNow, setTimeNow] = useState(new Date().toLocaleTimeString());
    const [lectureDetails, setLectureDetails] = useState({ start_time: '', duration: '' });
    const [courseDetails, setCourseDetails] = useState({ code: '', academic_year: '', credits: '' });
    const [lecturerDetails, setLecturerDetails] = useState({ name: '' });

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeNow(new Date().toLocaleTimeString());
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
  }, []);

    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/class', {
          params: {
              class_id: id
          }
      })
      .then(response => {
          setLectureDetails(response.data);

          return axios.get('http://127.0.0.1:8000/api/course/get-by-id', {
              params: {
                  cid: response.data.course_id
              }
          });
      })
      .then(response => {
          setCourseDetails(response.data.data);

          return axios.get('http://127.0.0.1:8000/api/lecturer/get-by-id', {
              params: {
                  lid: response.data.data.lecturer_id
              }
          });
      })
      .then(response => {
          setLecturerDetails(response.data.data);
      })
      .catch(error => {
          console.error('There was an error!', error);
      });
  }, [id]);

  useEffect(() => {
    return () => {
      if (!isLoggedIn) {
        navigate('/lecturer-login');
      }
    };
  }, [isLoggedIn, navigate]);

  const handleFinishMarking = () => {
    // TODO Do any cleanup or finalization tasks here
    // TODO re-login lecturer
    navigate('/course/{id}');
  };

  return (
    <div>
        <div className="text-3xl font-bold course-info">
          <h2 className='text-course-info'>{type === 'start' ? 'Class Start Attendance' : 'Class End Attendance'}</h2>
          <h2 className='text-course-info'>Course Code: {courseDetails.code}</h2>
          <h2 className='text-course-info'>Academic Year: {courseDetails.academic_year}</h2>
          <h2 className='text-course-info'>Lecturer: {lecturerDetails.name}</h2>
          <h2 className='text-course-info'>Credits: {courseDetails.credits}</h2>
          <h2 className='text-course-info'>Lecture Started At: {lectureDetails.start_time}</h2>
          <h2 className='text-course-info'>Lecture Duration: {lectureDetails.duration}</h2>
          <h2 className='text-course-info'>Now: {timeNow}</h2>
        </div>

        <div className='flex flex-wrap justify-center items-start mark-controls'>
          <button className="new-lecture-button text-2xl font-bold bg-blue-500 text-white p-2 rounded-lg" onClick={handleFinishMarking}>Finish Marking</button>
        </div>

        <div className='flex flex-wrap justify-center items-start student-tiles'>
            {courseDetails.enrolled_students_sid.map((studentId) => (
                <Link to={`/student/${studentId}`} key={studentId}>
                    <StudentTile id={studentId} />
                </Link>
            ))}
        </div>
    </div>
  );
};

export default MarkAttendanceList;
