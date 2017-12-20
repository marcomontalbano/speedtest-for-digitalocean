import SpeedtestDigitalocean from '../../lib/speedtest-digitalocean';
import SpeedtestAction from '../actions/SpeedtestAction';

export default class Speedtest extends SpeedtestDigitalocean {

    _updateCurrentTestResults(key, value) {
        var newValue = super._updateCurrentTestResults(key, value);
        SpeedtestAction.changeResults(this.resultStorage.results);
        return newValue;
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
