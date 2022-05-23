import React from 'react';
import ReactDOM from 'react-dom';

setInterval(() => {
    const element = (
        <h1 className="heading">
            <span className="text">hello {new Date().toLocaleString()}</span>
        </h1>
    );
    ReactDOM.render(element, document.getElementById('root'));
});
