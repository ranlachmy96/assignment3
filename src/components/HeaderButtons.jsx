import React from 'react';
import '../styles/buttonStyle.css'
function HeaderButtons() {
    return (
        <div className="header-buttons">
            <button className="button">Get All Cases</button>
            <button className="button">Get A Case</button>
            <button className="button">Post A New Case</button>
            <button className="button">Update A Case</button>
            <button className="button">Delete A Case</button>
        </div>
    );
}

export default HeaderButtons;