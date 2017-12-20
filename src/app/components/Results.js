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

    renderRow(row) {
        return (
            <tr key={row.name} className={this.state.speedtestStore.isRunning && this.state.speedtestStore.test.name === row.name ? 'uk-active' : null}>
                <td>{this.state.speedtestStore.isRunning && this.state.speedtestStore.test.name === row.name ? (<Spinner></Spinner>) : null}</td>
                <td><a target="_blank" href={row.test ? row.test.url : '#'}>{row.name}</a></td>
                <td>{row.test ? row.test.region : ''}</td>
                <td>{row.ping     ? `${row.ping} ms`                           : ''}</td>
                <td>{row.download ? `${(row.download / 1000).toFixed(2)} Mb/s` : ''}</td>
                <td>{row.upload   ? `${(row.upload   / 1000).toFixed(2)} Mb/s` : ''}</td>
            </tr>
        );
    }

    renderResults(state) {
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
                        _.map(state.results, (item, key) => {
                            return this.renderRow(item);
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
