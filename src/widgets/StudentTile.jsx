import PropTypes from 'prop-types';
import './StudentTile.css';

StudentTile.propTypes = {
    registration_number: PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
};

function StudentTile({ id }) {
    return (
        <div className="w-64 h-64 border-2 border-black flex flex-col justify-center items-center m-4 tile">
            <h2 className="text-2xl course-code tile-text">{registration_number}</h2>
            <h2 className="text-2xl course-code tile-text">{name}</h2>
        </div>
    );
}

export default StudentTile;
