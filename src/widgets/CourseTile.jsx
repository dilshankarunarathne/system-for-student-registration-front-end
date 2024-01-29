import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './CourseTile.css';

CourseTile.propTypes = {
    id: PropTypes.number.isRequired,
};

function CourseTile({ id }) {
    const [course, setCourse] = useState({ code: '', academic_year: '' });

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/course/get-by-id', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cid: id }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setCourse(data.data);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }, [id]);

    return (
        <div className="w-64 h-64 border-2 border-black flex flex-col justify-center items-center m-4 tile">
            <h2 className="text-2xl course-code tile-text">{course.code}</h2>
            <p className="text-lg academic-year tile-text">{course.academic_year}</p>
        </div>
    );
}

export default CourseTile;
