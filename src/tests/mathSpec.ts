import myfunc from '../utilities/math';

it('join text', () => {
    expect(myfunc('a', 'b',1)).toEqual('a-b-1');
});
