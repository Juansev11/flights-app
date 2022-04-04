import { formatCurrency, formatDateFromString } from '../format';

describe('formatDateFromString', () => {
  it('should format a date from YYYY-MM-DD format to LLL dd, y', () => {
    const dateToFormat = '2022-09-19';
    const expectedResult = 'Sep 19, 2022';
    const formattedDate = formatDateFromString(dateToFormat);

    expect(formattedDate).toBe(expectedResult);
  });
});

describe('formatCurrency', () => {
  it('formats an amount in euros with German locale', () => {
    const amount = 100;
    expect(formatCurrency(amount).replace(/\s/g, '')).toBe('100,00€');
  });
});
