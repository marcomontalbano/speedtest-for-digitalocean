import ResultStorage from './ResultStorage';

describe('ResultStorage', () => {

    let resultStorage;

    beforeEach(() => {
        resultStorage = new ResultStorage();
    });

    it('"results" has only a getter', () => {

        expect(() => {
            resultStorage.results = [];
        }).toThrow();

    });

    it('update()', () => {

        // when
        resultStorage.update('NAME1', 'download', 100);

        // then
        expect(resultStorage.results.length).toBe(1);

    });

    it('indexOf()', () => {

        // when
        resultStorage.update('NAME1', 'download', 100);
        resultStorage.update('NAME2', 'download', 200);

        // then
        expect(resultStorage.indexOf('NAME1')).toBe(0);
        expect(resultStorage.indexOf('NAME2')).toBe(1);

    });

    it('get()', () => {

        // when
        resultStorage.update('NAME1', 'download', 100);

        resultStorage.update('NAME2', 'upload', 200);
        resultStorage.update('NAME2', 'upload', 300);

        // then
        expect(resultStorage.get('NAME1')).toEqual({ 'name': 'NAME1', 'download': 100 });
        expect(resultStorage.get('NAME1', 'download')).toBe(100);
        expect(resultStorage.get('NAME2', 'download')).toBe(undefined);
        expect(resultStorage.get('NAME2', 'upload')).toBe(300);

    });

    it('orderBy() - asc', () => {

        // when
        resultStorage.update('NAME1', 'download', 200);
        resultStorage.update('NAME2', 'download', 100);
        resultStorage.orderBy('download');

        // then
        expect(resultStorage.indexOf('NAME2')).toBe(0);

    });

    it('orderBy() - desc', () => {

        // when
        resultStorage.update('NAME1', 'download', 100);
        resultStorage.update('NAME2', 'download', 200);
        resultStorage.orderBy('download', 'desc');

        // then
        expect(resultStorage.indexOf('NAME2')).toBe(0);

    });

    it('orderBy() - misc', () => {

        // when
        resultStorage.update('NAME1', 'download', 200);
        resultStorage.update('NAME1', 'upload', 300);

        resultStorage.update('NAME2', 'download', 200);
        resultStorage.update('NAME2', 'upload', 200);
        
        resultStorage.update('NAME3', 'download', 300);
        resultStorage.update('NAME3', 'upload', 500);

        resultStorage.orderBy(['download', 'upload'], ['desc', 'asc']);

        // then
        expect(resultStorage.indexOf('NAME3')).toBe(0);
        expect(resultStorage.indexOf('NAME2')).toBe(1);
        expect(resultStorage.indexOf('NAME1')).toBe(2);

    });

    it('clean()', () => {

        // when
        resultStorage.update('NAME1', 'download', 100);
        resultStorage.clean();

        // then
        expect(resultStorage.results.length).toBe(0);

    });

});
