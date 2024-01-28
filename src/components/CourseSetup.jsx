import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../auth/AuthContext.jsx';

import './CourseSetup.css';

const CourseSetup = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const { isLoggedIn } = useContext(AuthContext);

    const [startTime, setStartTime] = useState(null);
    const [duration, setDuration] = useState(0);

    const [showPopupLecture, setShowPopupLecture] = useState(false);
    const [showPopupCourseDetails, setShowPopupCourseDetails] = useState(false);

    const [timeNow, setTimeNow] = useState(new Date().toLocaleTimeString());

    const currentDate = new Date().toISOString().substr(0, 10);

  useEffect(() => {
    return () => {
      if (!isLoggedIn) {
        navigate('/lecturer-login');
      }
    };
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    // This effect runs whenever startTime changes.
    // If startTime is not null, it means a lecture has started.
    if (startTime !== null) {
      // Here you can do something when a lecture starts, like sending a notification.
    }
  }, [startTime]);

  const handleStartLectureMark = () => {
    const now = new Date();
    setStartTime(now);
  };

  const handleEndLectureMark = () => {
    const now = new Date();
    const duration = Math.abs(now - startTime) / 1000; 
    setDuration(duration);
    setStartTime(null); 
  };

  const handleStudentsListClick = () => {
    navigate(`/course/${id}`);
  };

  const handleNewLecture = () => {
    setShowPopupLecture(true);
  }

  const closePopupLecture = () => {
    setShowPopupLecture(false);
  };

  const closePopupCourseDetails = () => {
    setShowPopupCourseDetails(false);
  };

  const editCourseDetails = () => {
    setShowPopupCourseDetails(true);
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
          <button className="new-lecture-button text-2xl font-bold bg-blue-500 text-white p-2 rounded-lg" onClick={handleNewLecture}>New Lecture</button>
          <button className="edit-course-button text-2xl ml-3 font-bold bg-blue-500 text-white p-2 rounded-lg" onClick={editCourseDetails}>Edit Course Details</button>
          <button className="edit-course-button text-2xl ml-3 font-bold bg-blue-500 text-white p-2 rounded-lg" onClick={editCourseDetails}>Print Full Report</button> {/* TODO */}
          <button className="edit-course-button text-2xl ml-3 font-bold bg-blue-500 text-white p-2 rounded-lg" onClick={editCourseDetails}>Reset All Data</button>
          <button className="edit-course-button text-2xl ml-3 font-bold bg-blue-500 text-white p-2 rounded-lg" onClick={handleStudentsListClick}>Students List</button>
        </div>

        <div className='flex flex-wrap justify-center items-start mt-5 current-lecture-controls'>
          <h2 className='text-2xl mr-4 font-bold'>Lecture Started At: {startTime}</h2>
          <h2 className='text-2xl mr-4 font-bold'>Lecture Duration: {duration}</h2>
          <h2 className='text-2xl mr-4 font-bold'>Now: {timeNow}</h2>
          <br/>
          <button className="new-lecture-button text-2xl mr-4 font-bold bg-blue-500 text-white p-2 rounded-lg" onClick={handleStartLectureMark}>Mark Start Lecture</button>
          <button className="edit-course-button text-2xl mr-4 font-bold bg-blue-500 text-white p-2 rounded-lg" onClick={handleEndLectureMark}>Mark End Lecture</button>
        </div>

        {showPopupLecture && (
        <div className='popup new-lecture-form mt-10'>
          <form>
            <label className='ml-3 mr-3'>
              Lecture Date:
              <input type='date' defaultValue={currentDate} />
            </label>
            <label className='ml-3 mr-3'>
              Lecture Duration (min):
              <input type='number' min='0' />
            </label>
            <label className='ml-3 mr-3'>
              Lecture Start Time:
              <input type='time' />
            </label>
            <br/><br/>
            <button type='submit' className='text-l mr-3 font-bold bg-blue-500 text-white p-2 rounded-lg'>Save</button>
            <button onClick={closePopupLecture} className='text-l ml-3 font-bold bg-blue-500 text-white p-2 rounded-lg'>Close</button>
          </form>
        </div>
      )}

      {showPopupCourseDetails && (
        <div className='popup edit-course-details-form mt-10'>
          <form>
            <label className='ml-3 mr-3'>
              Course Code:
              <input type='text' />
            </label>
            <label className='ml-3 mr-3'>
              Total Hours:
              <input type='number' min='0' />
            </label>
            <label className='ml-3 mr-3'>
              Total Credits:
              <input type='number' min='0' />
            </label>
            <br/><br/>
            <button type='submit' className='text-l mr-3 font-bold bg-blue-500 text-white p-2 rounded-lg'>Save</button>
            <button onClick={closePopupCourseDetails} className='text-l ml-3 font-bold bg-blue-500 text-white p-2 rounded-lg'>Close</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CourseSetup;
