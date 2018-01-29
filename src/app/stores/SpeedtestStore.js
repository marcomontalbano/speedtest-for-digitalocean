import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../../AppDispatcher';
import ActionTypes from '../actions/ActionTypes';

class SpeedtestStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return {
            results: [],
            currentDatacenter: {},
            isRunning: false
        };
    }

    reduce(state, action) {
        const newState = JSON.parse(JSON.stringify(state));
        switch (action.type) {
            case ActionTypes.STARTED:
                newState.isRunning = true;
                return newState;
            case ActionTypes.STOPPED:
                newState.isRunning = false;
                return newState;
            case ActionTypes.CHANGED_TEST:
                newState.currentDatacenter = action.value;
                return newState;
            case ActionTypes.CHANGED_RESULTS:
                newState.results = action.value;
                return newState;
            default:
                return state;
        }
    }
}

export default new SpeedtestStore();
