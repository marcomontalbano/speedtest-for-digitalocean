import _ from 'lodash';

let results = Symbol();

export default class ResultStorage {

    constructor() {
        this.clean();
    }

    get results() {
        return this[results];
    }

    indexOf(name) {
        return parseInt(_.findKey(this[results], { 'name': name }), 10);
    }

    update(name, key, value) {
        let index = this.indexOf(name);

        if (isNaN(index)) {
            this[results].push({
                name: name
            });
        }

        index = this.indexOf(name);

        this[results][index][key] = value;

        return value;
    }

    get(name, key) {
        let result = _.findKey(this[results], { 'name': name });

        if (key === undefined) {
            return this[results][result];
        }

        return this[results][result][key];
    }

    orderBy(key, sort = 'asc') {
        this[results] = _.orderBy(this[results], _.isArray(key) ? key : [key], _.isArray(sort) ? sort : [sort]);
    }

    clean() {
        this[results] = [];
    }
}
