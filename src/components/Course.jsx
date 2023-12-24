import { useParams } from 'react-router-dom';

import './Course.css';

const Course = () => {
  const { id } = useParams();

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
                <h3 className='text-2xl font-bold'>Lecturer Login</h3>
                <input type='text' placeholder='Username' className='p-2 m-2 border-2 rounded-lg' />
                <input type='password' placeholder='Password' className='p-2 m-2 border-2 rounded-lg' />
                <button className='text-2xl font-bold bg-blue-500 text-white p-2 rounded-lg'>Login</button>
                <button className='text-2xl font-bold bg-blue-500 text-white p-2 rounded-lg'>Register</button>
            </form>
        </div>
    </div>
  );
};

export default Course;
