import { useParams } from 'react-router-dom';

import './Course.css';

const Course = () => {
  const { id } = useParams();

  const students = [
    { id: 1, registration_number: 'CS101', name: '2021-2022' },
    { id: 2, registration_number: 'CS102', name: '2021-2022' },
    { id: 3, registration_number: 'CS103', name: '2021-2022' },
    { id: 4, registration_number: 'CS104', name: '2021-2022' },
    { id: 5, registration_number: 'CS105', name: '2021-2022' },
    { id: 6, registration_number: 'CS106', name: '2021-2022' },
    { id: 7, registration_number: 'CS107', name: '2021-2022' },
  ];

  return (
    <div>
        <div className="text-3xl font-bold course-info">
            <h2 className='text-course-info'>Course Code: CS101</h2>
            <h2 className='text-course-info'>Academic Year: 2021-2022</h2>
            <h2 className='text-course-info'>Lecturer: Mr. Some Guy</h2>
            <h2 className='text-course-info'>Credits: {id}</h2>
        </div>

        <div className='flex flex-wrap justify-center items-start lecturer-login-form'>
            <form className='flex flex-wrap justify-center items-start'>
                <div className='flex flex-wrap justify-center items-start login-form-half'>
                    <h3 className='text-2xl font-bold login-form-content'>Lecturer Login</h3>
                    <input type='text' placeholder='Username' className='p-2 m-2 border-2 rounded-lg login-form-content' />
                    <input type='password' placeholder='Password' className='p-2 m-2 border-2 rounded-lg login-form-content' />
                </div>
                <div className='flex flex-wrap justify-center items-start login-form-half'>
                    <button className='text-2xl font-bold bg-blue-500 text-white p-2 rounded-lg login-form-content'>Login</button>
                    <button className='text-2xl font-bold bg-blue-500 text-white p-2 rounded-lg login-form-content'>Register</button>
                </div>
            </form>
        </div>

        <div className='flex flex-wrap justify-center items-start student-tiles'>
        
        </div>
    </div>
  );
};

export default Course;
