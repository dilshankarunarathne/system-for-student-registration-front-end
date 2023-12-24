import { useParams } from 'react-router-dom';

import './Student.css';

const Student = () => {
  const { id } = useParams();

  return (
    <div>
        <div className="text-3xl font-bold student-info">
            <h2 className='text-course-info'>Name: Mr. Some Student</h2>
            <h2 className='text-course-info'>Registration Number : EUTC/2019/COM/24</h2>
            <h2 className='text-course-info'>Academic Year: 2021-2022</h2>
            <h2 className='text-course-info'>GPA: {id}</h2>
        </div>

        <div className='flex flex-wrap justify-center items-start student-login-form'>
            <form className='flex flex-wrap justify-center items-start'>
                <div className='flex flex-wrap justify-center items-start login-form-half'>
                    <h3 className='text-2xl font-bold login-form-content'>Student Login</h3>
                    <input type='text' placeholder='Username' className='p-2 m-2 border-2 rounded-lg login-form-content' />
                    <input type='password' placeholder='Password' className='p-2 m-2 border-2 rounded-lg login-form-content' />
                </div>
                <div className='flex flex-wrap justify-center items-start login-form-half'>
                    <button className='text-2xl font-bold bg-blue-500 text-white p-2 rounded-lg login-form-content'>Login</button>
                    <button className='text-2xl font-bold bg-blue-500 text-white p-2 rounded-lg login-form-content'>Register</button>
                </div>
            </form>
        </div>

        <div className='flex flex-wrap justify-center items-start student-data'>
            <div className='flex flex-wrap justify-center items-start student-data-half'>
            </div>
            
        </div>
    </div>
  );
};

export default Student;
