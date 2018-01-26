import SpeedtestDigitalocean from '../../lib/SpeedtestDigitalocean';
import SpeedtestAction from '../actions/SpeedtestAction';

export default class Speedtest extends SpeedtestDigitalocean {

    _gaEvent(key, value) {
        window.ga('send', {
            hitType: 'event',
            eventCategory: this.currentTest.name,
            eventAction: key,
            eventLabel: value
        });
    }

    currentTest_update(key, value) {
        super.currentTest_update(key, value);
        SpeedtestAction.changeResults(this.resultStorage.results);
    }

    __speedcheckerPingTestFinished(value) {
        this._gaEvent('ping', value);
        super.__speedcheckerPingTestFinished(value);
    }

    __speedcheckerDownloadFinished(value) {
        this._gaEvent('download', value);
        super.__speedcheckerDownloadFinished(value);
    }

    __speedcheckerUploadFinished(value) {
        this._gaEvent('upload', value);
        super.__speedcheckerUploadFinished(value);
    }

    _run() {
        // enable navigation prompt
        window.onbeforeunload = function () {
            return true;
        };

        super._run();
        SpeedtestAction.start();
        SpeedtestAction.changeTest(this.currentTest);
    }

    stop() {
        // remove navigation prompt
        window.onbeforeunload = null;

        super.stop();
        SpeedtestAction.stop();
    }

}
