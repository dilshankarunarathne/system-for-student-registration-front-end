import PropTypes from 'prop-types';
import './CourseTile.css';

CourseTile.propTypes = {
    courseCode: PropTypes.string.isRequired,
    academicYear: PropTypes.string.isRequired,
};

function CourseTile({ courseCode, academicYear }) {
    return (
        <div className="course-tile">
            <h2>{courseCode}</h2>
            <p>{academicYear}</p>
        </div>
    );
}

export default CourseTile;
