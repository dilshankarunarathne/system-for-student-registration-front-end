import CourseTile from '../widgets/CourseTile';

import './Dashboard.css';

const Dashboard = () => {
  const courses = [
    { courseCode: 'CS101', academicYear: '2021-2022' },
    { courseCode: 'CS102', academicYear: '2021-2022' },
    { courseCode: 'CS103', academicYear: '2021-2022' },
    { courseCode: 'CS104', academicYear: '2021-2022' },
    { courseCode: 'CS105', academicYear: '2021-2022' },
    { courseCode: 'CS106', academicYear: '2021-2022' },
    { courseCode: 'CS107', academicYear: '2021-2022' },
  ];

  return (
    <div className='flex flex-wrap justify-center items-start'>
		<div className="flex flex-wrap justify-center h-screen p-4 main">
			{courses.map((course, index) => (
				<CourseTile key={index} courseCode={course.courseCode} academicYear={course.academicYear} />
			))}
        </div>
    </div>
  );
};

export default Dashboard;
