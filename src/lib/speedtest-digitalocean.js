import _ from 'lodash';
import datacenter from './datacenter';
import ResultStorage from './ResultStorage';

class SpeedtestDigitalocean {

    constructor() {
        window.addEventListener('message', this._messageReceived.bind(this), false);

        this.logs = [];

        this.options = {};

        this.currentIndex = 0;
        this.resultStorage = new ResultStorage();
        this.currentDatacenterSet = this.datacenters;
    }

    get datacenters() {
        return datacenter;
    }

    get currentRunningTest() {
        return this.currentDatacenterSet[this.currentIndex];
    }

    _getCurrentTestResults(key) {
        return this.resultStorage.get(this.currentRunningTest.name, key);
    }

    _updateCurrentTestResults(key, value) {
        this.resultStorage.update(this.currentRunningTest.name, key, value);
        this.resultStorage.sortBy('ping');
    }

    _messageReceived(event) {
        const type = event.data.type;
        const value = event.data.value;

        this.logs.push(event);

        if (this[type]) {
            this[type](value);
        }
    }

    _runNext() {
        // next test available
        if (this.currentIndex < this.currentDatacenterSet.length - 1) {
            this.currentIndex += 1;
            this._run();
        } else { // tests are finished
            if (this.options.checkFastests === true) {
                this.currentIndex = 0;
                this.options.checkFastests = false;

                // re-create dataset with fastests
                const options = this.options;
                this.currentDatacenterSet = this.resultStorage.results.filter(function (o, index) {
                    return index < options.fastestsQnt;
                });

                this.currentDatacenterSet = this.currentDatacenterSet.map(function (o) {
                    return o.test;
                });

                this._run();
            } else {
                this._completed(this.resultStorage.results);
            }
        }
    }

    _run() {
        window.sc_skin = '';
        window.sc_autostart = 'true';
        window.sc_bgc = '0xFFFFFF';
        window.sc_bc = '0x333333';
        window.sc_hc = '0x333333';
        window.sc_cc = '0x0080ff';
        window.sc_w = 400;
        window.sc_h = 250;
        window.version = 3;
        window.sc_userid = 52722000;
        window.sc_forceSecureWebsockets = 0;
        window.serverUrl = this.currentRunningTest.url;
        window.serverTitle = this.currentRunningTest.name;
        window.license = '';
        window.server = 'php';
        window.latencyMeasurementType = 'icmp';

        this._updateCurrentTestResults('name', this.currentRunningTest.name);
        this._updateCurrentTestResults('test', this.currentRunningTest);

        let sc_script = document.createElement('script');
        sc_script.setAttribute('src', ((('https:' === document.location.protocol) ? 'https' : 'http') + '://www.speedcheckercdn.com/speedchecker.js'));
        document.getElementsByTagName('head')[0].appendChild(sc_script);
    }

    _completed(results) {
        this.stop();
        this.cleanResults();
        return results;
    }

    start(options) {

        this.options = _.merge({
            checkFastests: false,
            fastestsQnt: 4,

        }, options || {});

        this.stop();

        // create scope if it doesn't exist
        if (!document.getElementById('speedcheckerdiv')) {
            let element = document.createElement('div');
            element.setAttribute('id', 'speedcheckerdiv');
            document.getElementsByTagName('body')[0].appendChild(element);
        }

        this._run();
    }

    pause() {
        if (document.getElementById('speedcheckerdiv')) {
            document.getElementById('speedcheckerdiv').remove();
        }
    }

    cleanResults() {
        this.resultStorage = new ResultStorage();
    }

    stop() {
        this.pause();
        this.cleanResults();
        this.currentIndex = 0;
        this.currentDatacenterSet = this.datacenters;
    }

    /**
     * 
     */

    speedcheckerDebug(value) { return value; }
    speedcheckerDownloadPrepared(value) { return value; }
    speedcheckerDownloadStarted(value) { return value; }
    speedcheckerLinkValid(value) { return value; }
    speedcheckerPingFinished(value) { return value; }
    speedcheckerPingStarted(value) { return value; }
    speedcheckerReady(value) { return value; }
    speedcheckerStartRequired(value) { return value; }
    speedcheckerStarted(value) { return value; }
    speedcheckerUploadPrepared(value) { return value; }
    speedcheckerUploadStarted(value) { return value; }

    speedcheckerError(value) {
        this._updateCurrentTestResults('retry', (this._getCurrentTestResults('retry') ? this._getCurrentTestResults('retry') : 0) + 1);
        this._updateCurrentTestResults('error', value);
        this._run();
    }

    speedcheckerPingTestFinished(value) {
        const ping = this._updateCurrentTestResults('ping', value);

        if (this.options.checkFastests === true) {
            this._runNext();
        }

        return ping;
    }

    speedcheckerDownloadProgress(value) {
        return this._updateCurrentTestResults('download', value[0]);
    }

    speedcheckerDownloadFinished(value) {
        return this._updateCurrentTestResults('download', value);
    }

    speedcheckerUploadProgress(value) {
        return this._updateCurrentTestResults('upload', value[0]);
    }

    speedcheckerUploadFinished(value) {
        return this._updateCurrentTestResults('upload', value);
    }

    speedcheckerTakenTestSaved(value) {
        this._runNext();
        return value;
    };

}

export default SpeedtestDigitalocean;
