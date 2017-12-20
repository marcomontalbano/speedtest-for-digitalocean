import ResultStorage from './ResultStorage';

let resultStorage;

beforeAll(() => {
    resultStorage = new ResultStorage();
});

it('adds 1 + 2 to equal 3', () => {
    // given

    // when
    resultStorage.update('NAME1', 'download', 123);

    resultStorage.update('NAME2', 'upload', 321);
    resultStorage.update('NAME2', 'upload', 111);

    // then
    expect(resultStorage._getIndex('NAME1')).toBe("0");
    expect(resultStorage._getIndex('NAME2')).toBe("1");
    expect(resultStorage.get('NAME1')).toEqual({ "download": 123, "name": "NAME1" });
    expect(resultStorage.get('NAME1','download')).toBe(123);
    expect(resultStorage.get('NAME2','download')).toBe(undefined);
    expect(resultStorage.get('NAME2','upload')).toBe(111);
    expect(resultStorage.results.length).toBe(2);

});
