import React, { Component } from 'react';
import Filter from './Filter';
import Results from './Results';
import DataStudioModal from './DataStudioModal';

import Speedtest from '../class/Speedtest';

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.speedtest = new Speedtest();
    }

    render() {
        return (
            <div>
                <div className="App">
                    <Filter speedtest={this.speedtest} />
                    <Results speedtest={this.speedtest} />
                </div>
                <DataStudioModal name="Map" width={600 * 4} height={415 * 4} iframe="https://datastudio.google.com/embed/reporting/1xN4NWlk6McG9b_APQxecNIAN48yP-my4/page/NSjR" showDisclaimer={false} />
                <DataStudioModal name="Data" width={750 * 4} height={820 * 4} iframe="https://datastudio.google.com/embed/reporting/1W_EeG73UM1eCRLYiPJ8Q5dtL8Wi2QpKC/page/NSjR" />
            </div>
        );
    }
}

export default App;
