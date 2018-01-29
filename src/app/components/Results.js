import React, { Component } from 'react';
import _ from 'lodash';
import SpeedtestStore from '../stores/SpeedtestStore';
import Spinner from './Spinner';

import './Results.css';

class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            speedtestStore: SpeedtestStore.getState(),
        };
    }

    componentDidMount() {
        this.listener = SpeedtestStore.addListener(this.onSpeedtestStoreHandler.bind(this));
    }

    componentWillUnmount() {
        this.listener.remove();
    }

    onSpeedtestStoreHandler() {
        this.setState({
            speedtestStore: SpeedtestStore.getState()
        });
    }

    renderRow(result, store) {
        return (
            <tr key={result.name} className={store.isRunning && store.currentDatacenter.name === result.name ? 'uk-active' : null}>
                <td>{store.isRunning && store.currentDatacenter.name === result.name ? (<Spinner></Spinner>) : null}</td>
                <td><a target="_blank" href={result.datacenter ? result.datacenter.url : '#'}>{result.name}</a></td>
                <td>{result.datacenter ? result.datacenter.region : ''}</td>
                <td>{result.ping     ? `${result.ping} ms`                           : ''}</td>
                <td>{result.download ? `${(result.download / 1000).toFixed(2)} Mb/s` : ''}</td>
                <td>{result.upload   ? `${(result.upload   / 1000).toFixed(2)} Mb/s` : ''}</td>
            </tr>
        );
    }

    renderResults(store) {
        return (
            <table className="uk-table uk-table-divider uk-text-align-center uk-table-responsive">
                <thead>
                    <tr>
                        <th></th>
                        <th>name</th>
                        <th>region</th>
                        <th>ping</th>
                        <th>download</th>
                        <th>upload</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        _.map(store.results, (result, key) => {
                            return this.renderRow(result, store);
                        })
                    }
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <div className="Results uk-container">
                <form>
                    <fieldset className="uk-fieldset">

                        <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                            {this.renderResults(this.state.speedtestStore)}
                        </div>

                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Results;
