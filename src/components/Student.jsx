import { useParams, useNavigate } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

import './Student.css';

const Student = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const attendanceData = [
    {
      date: '2021-04-01',
      time: '09:00:00',
      duration: '01:00:00',
    },
    {
      date: '2021-04-02',
      time: '09:00:00',
      duration: '01:00:00',
    },
    {
      date: '2021-04-03',
      time: '09:00:00',
      duration: '01:00:00',
    },
    {
      date: '2021-04-04',
      time: '09:00:00',
      duration: '01:00:00',
    },
    {
      date: '2021-04-05',
      time: '09:00:00',
      duration: '01:00:00',
    },
    {
      date: '2021-04-06',
      time: '09:00:00',
      duration: '01:00:00',
    },
    {
      date: '2021-04-07',
      time: '09:00:00',
      duration: '01:00:00',
    },
    {
      date: '2021-04-08',
      time: '09:00:00',
      duration: '01:00:00',
    },
    {
      date: '2021-04-09',
      time: '09:00:00',
      duration: '01:00:00',
    },
  ];

    const handleLogin = () => {
        navigate(`/mark-attendance/${id}`);
    };

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
                <div className='flex flex-wrap justify-center items-start login-form-half buttons'>
                    <button className='text-2xl font-bold bg-blue-500 text-white p-2 rounded-lg login-form-content' onClick={handleLogin}>Login</button>
                    <button className='text-2xl font-bold bg-blue-500 text-white p-2 rounded-lg login-form-content'>Register</button>
                </div>
            </form>
        </div>

        <div className='flex flex-wrap justify-center items-start student-data'>
            <div className='flex flex-wrap justify-center items-start student-data-table-container'>
                <table className="table-auto border-collapse border solid-black-3 student-data-table">
                    <thead>
                        <tr>
                            <th className="solid-black-3 px-4 py-2 ">Date</th>
                            <th className="solid-black-3 px-4 py-2 ">Time</th>
                            <th className="solid-black-3 px-4 py-2 ">Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendanceData.map((data, index) => (
                            <tr key={index}>
                                <td className="solid-black-3 px-4 py-2 ">{data.date}</td>
                                <td className="solid-black-3 px-4 py-2 ">{data.time}</td>
                                <td className="solid-black-3 px-4 py-2 ">{data.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='flex flex-wrap justify-center items-start student-data-stats'>
                <Pie
                    data={{
                        labels: ['Red', 'Blue', 'Yellow'],
                        datasets: [{
                            data: [300, 50, 100],
                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                        }]
                    }}
                    options={{
                        plugins: {
                            legend: {
                                labels: {
                                    color: 'black'
                                }
                            }
                        }
                    }}
                />
            </div>
        </div>
    </div>
  );
};

export default Student;
