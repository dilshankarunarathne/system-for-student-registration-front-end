import { useParams } from 'react-router-dom';

const Course = () => {
  const { id } = useParams();

  return (
    <div>
        <div className="text-3xl font-bold course-info">
            <h1>Course {id}</h1>
        </div>
    </div>
  );
};

export default Course;
