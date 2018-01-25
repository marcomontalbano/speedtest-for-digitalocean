import SpeedtestDigitalocean from '../../lib/speedtest-digitalocean';
import SpeedtestAction from '../actions/SpeedtestAction';

export default class Speedtest extends SpeedtestDigitalocean {

    _gaEvent(key, value) {
        window.ga('send', {
            hitType: 'event',
            eventCategory: this.currentRunningTest.name,
            eventAction: key,
            eventLabel: value
        });
    }

    _updateCurrentTestResults(key, value) {
        var newValue = super._updateCurrentTestResults(key, value);
        SpeedtestAction.changeResults(this.resultStorage.results);
        return newValue;
    }

    speedcheckerPingTestFinished(value) {
        this._gaEvent('ping', value);
        return super.speedcheckerPingTestFinished(value);
    }

    speedcheckerDownloadFinished(value) {
        this._gaEvent('download', value);
        return super.speedcheckerDownloadFinished(value);
    }

    speedcheckerUploadFinished(value) {
        this._gaEvent('upload', value);
        return super.speedcheckerUploadFinished(value);
    }

    _run() {
        super._run();
        SpeedtestAction.start();
        SpeedtestAction.changeTest(this.currentRunningTest);
    }

    stop() {
        super.stop();
        SpeedtestAction.stop();
    }

}
