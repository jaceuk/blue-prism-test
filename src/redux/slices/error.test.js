import reducer, { updateError } from './error.slice';

test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        value: ''
    });
});

test('should handle the error being updated', () => {
    const previousState = {};
    expect(reducer(previousState, updateError('Error message'))).toEqual({
        value: 'Error message'
    });
});
