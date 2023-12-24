import PropTypes from 'prop-types';
import './CourseTile.css';

CourseTile.propTypes = {
    courseCode: PropTypes.string.isRequired,
    academicYear: PropTypes.string.isRequired,
};

function CourseTile({ courseCode, academicYear }) {
    return (
        <div className="w-64 h-64 border-2 border-black flex flex-col justify-center items-center m-4 tile">
            <h2 className="text-2xl">{courseCode}</h2>
            <p className="text-lg">{academicYear}</p>
        </div>
    );
}

export default CourseTile;
