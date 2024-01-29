import { Link, useEffect, useState } from 'react-router-dom';

import CourseTile from '../widgets/CourseTile';

import './Dashboard.css';

const Dashboard = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/course/get-all')
        .then(response => response.json())
        .then(data => setCourses(data.data))
        .catch(error => console.error('There was an error!', error));
    }, []);

    return (
        <div className='flex flex-wrap justify-center items-start main'>
            <h1 className="text-3xl font-bold title">Courses</h1>
            <div className="flex flex-wrap justify-center h-screen p-4 courses">
                {courses.map((course) => (
                    <Link to={`/course/${course.id}`} key={course.id}>
                        <CourseTile courseCode={course.code} academicYear={course.academic_year} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
