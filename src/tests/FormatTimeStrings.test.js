import {formatTimeStrings} from '../utils/formatTimeStrings'

describe('formatTimeString', () => {
    it('', () => {
        const expected = 'None';
        const received = formatTimeStrings();

        expect(received).toEqual(expected);
    })

    it('', () => {
        const openingHours = ['12:00'];
        const expected = `${ openingHours } - Till tomorrow`;
        const received = formatTimeStrings(openingHours);

        expect(received).toEqual(expected);
    })

    it('', () => {
        const openingHours = ['12:00', '16:00', '23:59'];
        const expected = `${ openingHours[0] } - ${openingHours[2]}`;
        const received = formatTimeStrings(openingHours);

        expect(received).toEqual(expected);
    })
})