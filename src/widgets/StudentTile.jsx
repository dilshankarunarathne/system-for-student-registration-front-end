import PropTypes from 'prop-types';
import './StudentTile.css';

CourseTile.propTypes = {
    registration_number: PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
};

function CourseTile({ id }) {
    return (
        <div className="w-64 h-64 border-2 border-black flex flex-col justify-center items-center m-4 tile">
            <h2 className="text-2xl course-code tile-text">{id}</h2>
        </div>
    );
}

export default CourseTile;
