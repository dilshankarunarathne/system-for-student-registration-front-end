import CourseTile from '../widgets/CourseTile';

const Dashboard = () => {
  const courses = [
    { courseCode: 'CS101', academicYear: '2021-2022' },
    { courseCode: 'CS102', academicYear: '2021-2022' },
  ];

  return (
    <div className="flex flex-wrap justify-center items-start h-screen bg-gray-200 p-4 main">
      {courses.map((course, index) => (
        <CourseTile key={index} courseCode={course.courseCode} academicYear={course.academicYear} />
      ))}
    </div>
  );
};

export default Dashboard;
