import { useParams } from 'react-router-dom';

const Course = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Course ID: {id}</h1>
    </div>
  );
};

export default Course;
