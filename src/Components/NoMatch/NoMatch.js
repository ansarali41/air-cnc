import React from 'react';

const NoMatch = () => {
    const NoMatchStyle = {
        display: 'flex',
        height: '500px',
        alignItems: 'center',
        justifyContent: 'center',

    }
    return (
        <div className="container " style={NoMatchStyle}>
            <h1 style={{ color: 'red' }}>Page Not Found!</h1>
        </div>
    );
};

export default NoMatch;