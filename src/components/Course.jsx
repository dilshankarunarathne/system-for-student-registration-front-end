import { useParams } from 'react-router-dom';

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
    </div>
  );
};

export default Course;
