import { useParams } from 'react-router-dom';
import Webcam from "react-webcam";

import './MarkAttendance.css';

const MarkAttendance = () => {
  const { id, lecId } = useParams();

  return (
    <div>
        <div className="text-3xl font-bold student-info">
            <h2 className='text-course-info'>Name: Mr. Some Student</h2>
            <h2 className='text-course-info'>Registration Number : EUTC/2019/COM/24</h2>
            <h2 className='text-course-info'>Academic Year: 2021-2022</h2>
            <h2 className='text-course-info'>GPA: {id}</h2>
            <h2 className='text-course-info'>Lecture ID: {id}</h2>
        </div>

        <div className='flex justify-center camera-container'>
          <Webcam className='webcam-component' />
        </div>
    </div>
  );
};

export default MarkAttendance;
