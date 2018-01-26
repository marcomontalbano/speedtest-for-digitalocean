import React, { Component } from 'react';
import _ from 'lodash';
import SpeedtestStore from '../stores/SpeedtestStore';

import './Filter.css';

class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            speedtestStore: SpeedtestStore.getState(),
            checkFastests: true,
            filterOpened: false,
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

    renderDatacenters(items) {
        return items.length > 0 ? _.map(items, (item, key) => (
            <label key={key} className="uk-width-1-4">
                <input className="uk-checkbox" type="checkbox" defaultChecked={true} /> {item.name}
            </label>
        )) : null;
    }

    startStopHandler() {
        if (this.state.speedtestStore.isRunning) {
            this.props.speedtest.stop();
        } else {
            this.props.speedtest.start({
                checkFastests: this.state.checkFastests
            });
        }
    }

    filterHandler(e) {
        this.setState({
            filterOpened: !this.state.filterOpened
        });
    }

    checkFastestsHandler(e) {
        this.setState({
            checkFastests: e.target.checked
        });
    }

    render() {
        return (
            <div className="Filter uk-container">
                <div className="uk-grid">
                    <div className="check-only-fastests uk-width-1-1 uk-width-4-5@s uk-text-right">
                        <form>
                            <fieldset className="uk-fieldset">
                                <label>
                                    <input className="uk-checkbox" type="checkbox" onClick={this.checkFastestsHandler.bind(this)} disabled={this.state.speedtestStore.isRunning} defaultChecked={this.state.checkFastests} /> Check only fastests
                                </label>
                            </fieldset>
                        </form>
                    </div>
                    { /*<div className="uk-width-1-1 uk-width-1-5@s uk-text-center">
                        <button className="uk-button uk-button-default uk-width-1-1" onClick={this.filterHandler.bind(this)}>filter</button>
                    </div>*/ }
                    <div className="uk-width-1-1 uk-width-1-5@s uk-text-center">
                        <button className="uk-button uk-button-primary uk-width-1-1" onClick={this.startStopHandler.bind(this)}>{this.state.speedtestStore.isRunning ? 'stop' : 'start'}</button>
                    </div>
                </div>
                { this.state.filterOpened &&
                    <div className="uk-grid">
                        <div className="uk-width-1-1">
                            <form>
                                <fieldset className="uk-fieldset">

                                    <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                        {this.renderDatacenters(this.props.speedtest.datacenters)}
                                    </div>

                                </fieldset>
                            </form>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Filter;
