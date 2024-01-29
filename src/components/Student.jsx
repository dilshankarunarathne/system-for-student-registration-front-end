import { useParams, useEffect, useState, useNavigate } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

import './Student.css';

const Student = () => {
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const [studentInfo, setStudentInfo] = useState({});

  useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/student/get-by-id`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ sid: id }),
      })
      .then(response => response.json())
      .then(data => setStudentInfo(data))
      .catch(error => console.error('There was an error!', error));
  }, [id]);

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

  return (
    <div>
        <div className="text-3xl font-bold student-info">
            <h2 className='text-course-info'>Name: {studentInfo.name}</h2>
            <h2 className='text-course-info'>Registration Number : {studentInfo.reg_no}</h2>
            <h2 className='text-course-info'>Academic Year: {studentInfo.academic_year}</h2>
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
