import React, { Component } from 'react';

import './Spinner.css';

class Spinner extends Component {

    render() {
        return (
            <div className="sk-three-bounce">
                <div className="sk-child sk-bounce1"></div>
                <div className="sk-child sk-bounce2"></div>
                <div className="sk-child sk-bounce2"></div>
            </div>
        );
    }

}

export default Spinner;
