import glob from '../mixins/global';


test('RUN CHUNKARRAY FUNCTION', () => {
    expect(glob.methods.capitalize('hello')).toBe('Hello')
});
