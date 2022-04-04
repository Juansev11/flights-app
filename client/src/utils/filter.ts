export const getValue = (value: any) => (typeof value === 'string' ? value.toUpperCase() : value);

/**
 * Filters an array of objects with multiple criteria.
 *
 * @param  array: the array to filter
 * @param  filters: an object with the filter criteria
 */
export const filterPlainArray = <T>(array: T[], filters: Record<string, Array<any>>) => {
  const filterKeys = Object.keys(filters);
  return array.filter((item) => {
    return filterKeys.every((key) => {
      if (!filters[key].length) return true;
      return filters[key].find((filter) => {
        return getValue((item as Record<string, any>)[key]).includes(getValue(filter));
      });
    });
  });
};
