import AppDispatcher from '../../AppDispatcher';
import ActionTypes from './ActionTypes';

export default {
    start() {
        AppDispatcher.dispatch({
            type: ActionTypes.STARTED,
        });
    },
    stop() {
        AppDispatcher.dispatch({
            type: ActionTypes.STOPPED,
        });
    },
    changeResults(results) {
        AppDispatcher.dispatch({
            type: ActionTypes.CHANGED_RESULTS,
            value: results,
        });
    },
    changeTest(test) {
        AppDispatcher.dispatch({
            type: ActionTypes.CHANGED_TEST,
            value: test,
        });
    },
};
