import reducer, { updateSchedule } from './schedule.slice';

test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        id: '',
        name: '',
        isRetired: ''
    });
});

test('should handle the error being updated', () => {
    const previousState = {};
    expect(reducer(previousState, updateSchedule({
        id: 123,
        name: 'Test name',
        isRetired: true
    }))).toEqual({
        id: 123,
        name: 'Test name',
        isRetired: true
    });
});
