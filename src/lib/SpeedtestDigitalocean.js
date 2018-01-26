import _ from 'lodash';
import datacenter from './datacenter';
import ResultStorage from './ResultStorage';

export default class SpeedtestDigitalocean {

    constructor() {
        window.addEventListener('message', this.__onMessageHandler.bind(this), false);

        this.logs = [];

        this.options = {};

        this.currentIndex = 0;
        this.resultStorage = new ResultStorage();
        this.currentDatacenterSet = this.datacenters;
    }

    get datacenters() {
        return datacenter;
    }

    get currentTest() {
        return this.currentDatacenterSet[this.currentIndex];
    }

    currentTest_get(key) {
        return this.resultStorage.get(this.currentTest.name, key);
    }

    currentTest_update(key, value) {
        this.resultStorage.update(this.currentTest.name, key, value);
        this.resultStorage.orderBy('ping');
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
                this._completed();
            }
        }
    }

    _run() {
        this.currentTest_update('test', this.currentTest);

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
        window.serverUrl = this.currentTest.url;
        window.serverTitle = this.currentTest.name;
        window.license = '';
        window.server = 'php';
        window.latencyMeasurementType = 'icmp';

        let sc_script = document.createElement('script');
        sc_script.setAttribute('src', ((('https:' === document.location.protocol) ? 'https' : 'http') + '://www.speedcheckercdn.com/speedchecker.js'));
        document.getElementsByTagName('head')[0].appendChild(sc_script);
    }

    _completed() {
        this.stop();
        this.cleanResults();
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
        this.resultStorage.clean();
    }

    stop() {
        this.pause();
        this.cleanResults();
        this.currentIndex = 0;
        this.currentDatacenterSet = this.datacenters;
    }

    /**
     * speedchecker messages
     */

    __onMessageHandler(event) {
        const type = `__${event.data.type}`;
        const value = event.data.value;

        this.logs.push(event);

        if (this[type]) {
            this[type](value);
        }
    }

    __speedcheckerDebug(value) {}
    __speedcheckerDownloadPrepared(value) {}
    __speedcheckerDownloadStarted(value) {}
    __speedcheckerLinkValid(value) {}
    __speedcheckerPingFinished(value) {}
    __speedcheckerPingStarted(value) {}
    __speedcheckerReady(value) {}
    __speedcheckerStartRequired(value) {}
    __speedcheckerStarted(value) {}
    __speedcheckerUploadPrepared(value) {}
    __speedcheckerUploadStarted(value) {}

    __speedcheckerError(value) {
        this.currentTest_update('retry', (this.currentTest_get('retry') ? this.currentTest_get('retry') : 0) + 1);
        this.currentTest_update('error', value);
        this._run();
    }

    __speedcheckerPingTestFinished(value) {
        this.currentTest_update('ping', value);

        if (this.options.checkFastests === true) {
            this._runNext();
        }
    }

    __speedcheckerDownloadProgress(value) {
        this.currentTest_update('download', value[0]);
    }

    __speedcheckerDownloadFinished(value) {
        this.currentTest_update('download', value);
    }

    __speedcheckerUploadProgress(value) {
        this.currentTest_update('upload', value[0]);
    }

    __speedcheckerUploadFinished(value) {
        this.currentTest_update('upload', value);
    }

    __speedcheckerTakenTestSaved(value) {
        this._runNext();
    };

}
