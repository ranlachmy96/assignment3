import { Link } from 'react-router-dom';
import '../styles/buttonStyle.css'
function HeaderButtons() {
    return (
        <div className="header-buttons">
            <Link to="/pages/GetAllCases" className="button">Get All Cases</Link>
            <Link to="/pages/GetOneCase" className="button">Get A Case</Link>
            <Link to="/pages/AddCase" className="button">Post A New Case</Link>
            <Link to="/pages/UpdateCase" className="button">Update A Case</Link>
            <Link to="/pages/DeleteCase" className="button">Delete A Case</Link>
        </div>
    );
}

export default HeaderButtons;