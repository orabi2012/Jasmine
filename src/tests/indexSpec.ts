import myfunc from '../index';

it('result expected to be num * 5 ', () => {
    expect(myfunc(10)).toEqual(50);
});
