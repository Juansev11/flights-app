import { getUrlQueryParams } from '../queryParams';

describe('getUrlQueryParams', () => {
  it('should get data from query param', () => {
    const location = {
      ...window.location,
      search: '?data=ber',
    };
    Object.defineProperty(window, 'location', {
      writable: true,
      value: location,
    });
    const { data } = getUrlQueryParams();
    expect(data).toBe('ber');
  });
});
