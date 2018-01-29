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
            isFilterOpen: false,
            fastestsQnt: 4,
            filterDatacenters: this.props.speedtest.datacenters.map(o => o.name),
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

    startStopHandler() {
        if (this.state.speedtestStore.isRunning)  {
            this.props.speedtest.stop();
        } else {
            this.props.speedtest.start({
                checkFastests: this.state.checkFastests,
                filterDatacenters: this.state.filterDatacenters,
                fastestsQnt: this.state.fastestsQnt,
            });
        }
    }

    filterDatacentersHandler(e) {
        const val = e.target.value;

        this.setState(prevState => ({
            filterDatacenters: _.xor(prevState.filterDatacenters, [val])
        }));
    }

    filterHandler() {
        this.setState(prevState => ({
            isFilterOpen: !prevState.isFilterOpen
        }));
    }

    checkFastestsHandler(e) {
        this.setState({
            checkFastests: e.target.checked
        });
    }

    renderDatacenters(items) {
        return items.length > 0 ? _.map(items, (item, key) => (
            <div key={key} className="Datacenter uk-width-1-2">
                <label>
                    <input disabled={this.state.speedtestStore.isRunning} onChange={this.filterDatacentersHandler.bind(this)} className="uk-checkbox" type="checkbox" value={item.name} defaultChecked={this.state.filterDatacenters.indexOf(item.name) >= 0} /> {item.name}
                </label>
            </div>
        )) : null;
    }

    renderContinents(items) {
        const continents = _.uniq(_.map(items, o => o.continent));
        return continents.length > 0 ? _.map(continents, (continent, key) => (
            <div key={key} className="Continent uk-width-1-2 uk-width-1-3@m">
                <label className="uk-form-label">{continent}</label>
                <div className="uk-form-controls uk-grid">
                    {this.renderDatacenters(_.filter(items, o => o.continent === continent))}
                </div>
            </div>
        )) : null;
    }

    render() {
        return (
            <div className="Filter uk-container">
                <div className="uk-grid">
                    <div className="check-only-fastests uk-width-1-1 uk-width-3-5@s uk-text-right">
                        <form>
                            <fieldset className="uk-fieldset">
                                <label>
                                    <input className="uk-checkbox" type="checkbox" onClick={this.checkFastestsHandler.bind(this)} disabled={this.state.speedtestStore.isRunning} defaultChecked={this.state.checkFastests} /> Check only the fastest {this.state.fastestsQnt}
                                </label>
                            </fieldset>
                        </form>
                    </div>
                    <div className="uk-width-1-1 uk-width-1-5@s uk-text-center">
                        <button className="uk-button uk-button-primary uk-width-1-1" onClick={this.startStopHandler.bind(this)}>{this.state.speedtestStore.isRunning ? 'stop' : 'start'}</button>
                    </div>
                    <div className="uk-width-1-1 uk-width-1-5@s uk-text-center">
                        <button className="uk-button uk-button-default uk-width-1-1" onClick={this.filterHandler.bind(this)}>filter</button>
                    </div>
                </div>
                { this.state.isFilterOpen &&
                    <div className="uk-grid">
                        <div className="uk-width-1-1">
                            <form className="uk-form-stacked">
                                <div className="uk-grid-small uk-child-width-auto uk-grid">
                                    {this.renderContinents(this.props.speedtest.datacenters)}
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Filter;
