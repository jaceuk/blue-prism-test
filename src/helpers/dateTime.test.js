import { cleanup } from '@testing-library/react';

import { formatISOString, dayToString } from '../helpers/dateTime.helper';

afterEach(() => {
    cleanup();
});

test('converts ISO date/time to human readable format', () => {
    const ISOString = '2021-09-01T15:59:28.949Z';
    expect(formatISOString(ISOString)).toBe('2021-09-01, 16:59:28');
});

test('converts day into day of the week', () => {
    const day = 5;
    expect(dayToString(day)).toBe('Friday');
});
