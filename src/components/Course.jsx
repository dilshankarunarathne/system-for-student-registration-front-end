import { useParams } from 'react-router-dom';

const Course = () => {
  const { id } = useParams();

  return (
    <div>
        <div className="text-3xl font-bold course-info">
            <h1>Course {id}</h1>
            <h2>Course Code: CS101</h2>
            <h2>Academic Year: 2021-2022</h2>
        </div>
    </div>
  );
};

export default Course;
