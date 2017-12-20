import React, { Component } from 'react';
import Filter from './Filter';
import Results from './Results';

import Speedtest from '../class/Speedtest';

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.speedtest = new Speedtest();
    }

    render() {
        return (
            <div className="App">
                <Filter speedtest={this.speedtest} />
                <Results speedtest={this.speedtest} />
            </div>
        );
    }
}

export default App;
