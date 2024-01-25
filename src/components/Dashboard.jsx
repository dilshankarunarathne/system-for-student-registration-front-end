import { Link } from 'react-router-dom';

import CourseTile from '../widgets/CourseTile';

import './Dashboard.css';

const Dashboard = () => {
	const courses = [
		{ id: 1, courseCode: 'CS101', academicYear: '2021-2022' },
		{ id: 2, courseCode: 'CS102', academicYear: '2021-2022' },
		{ id: 3, courseCode: 'CS103', academicYear: '2021-2022' },
		{ id: 4, courseCode: 'CS104', academicYear: '2021-2022' },
		/*{ id: 5, courseCode: 'CS105', academicYear: '2021-2022' },
		{ id: 6, courseCode: 'CS106', academicYear: '2021-2022' },
		{ id: 7, courseCode: 'CS107', academicYear: '2021-2022' },*/
	];

  return (
    <div className='flex flex-wrap justify-center items-start main'>
		<h1 className="text-3xl font-bold title">Courses</h1>
		<div className="flex flex-wrap justify-center h-screen p-4 courses">
			{courses.map((course) => (
				<Link to={`/course/${course.id}`} key={course.id}>
					<CourseTile courseCode={course.courseCode} academicYear={course.academicYear} />
				</Link>
			))}
        </div>
    </div>
  );
};

export default Dashboard;
