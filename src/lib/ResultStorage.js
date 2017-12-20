import _ from 'lodash';

class ResultStorage {

    constructor() {
        this.results = [];
    }

    update(name, key, value) {
        let index = this._getIndex(name);

        if (index === undefined) {
            this.results.push({
                name: name
            });
        }

        index = this._getIndex(name);

        this.results[index][key] = value;

        return value;
    }

    _getIndex(name) {
        return _.findKey(this.results, { 'name': name });
    }

    get(name, key) {
        let result = _.findKey(this.results, { 'name': name });

        if (key === undefined) {
            return this.results[result];
        }

        return this.results[result][key];
    }

    sortBy(key) {
        this.results = _.sortBy(this.results, [key]);
    }
}

export default ResultStorage;
