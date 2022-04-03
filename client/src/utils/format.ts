import { format, parseISO } from 'date-fns';

export enum Currency {
  EUR = 'EUR',
}

export enum CurrencyLocales {
  DEUTSCH = 'de-DE',
}

/**
 * Formats numbers to a display format of selected currency
 * @param number Total amount of currency
 * @param currency Currency to format. Default value of Euros
 * @returns {string} Formatted label indicating the amount of currency with its respective symbol and comma annotation
 */
export const formatCurrency = (
  number: number,
  currency: Currency = Currency.EUR,
  locale = CurrencyLocales.DEUTSCH
) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(number);
};

export const formatDateFromString = (date: string) => {
  const parsedDate = parseISO(date);
  return format(parsedDate, 'LLL dd, y');
};
