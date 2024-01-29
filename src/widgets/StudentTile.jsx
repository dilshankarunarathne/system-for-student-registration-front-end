import PropTypes from 'prop-types';
import './StudentTile.css';

StudentTile.propTypes = {
    id: PropTypes.string.isRequired,
};

function StudentTile({ id }) {
    const [student, setStudent] = useState({ registration_number: '', name: '' });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/course/get-all', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${YOUR_OAUTH_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setStudent(data);
        };

        fetchData();
    }, [id]);

function StudentTile({ id }) {
    return (
        <div className="w-64 h-64 border-2 border-black flex flex-col justify-center items-center m-4 tile">
            <h2 className="text-2xl course-code tile-text">{student.registration_number}</h2>
            <h2 className="text-2xl course-code tile-text">{student.name}</h2>
        </div>
    );
}

export default StudentTile;
