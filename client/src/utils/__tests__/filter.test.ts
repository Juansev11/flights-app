import { filterPlainArray } from '../filter';

describe('filterPlainArray', () => {
  it('should filter an array of flights by origin equal to CGN', () => {
    const flights = [
      {
        origin: 'CGN',
        destination: 'BER',
        uuid: '6249cfb911a4bfe80e717109',
      },
      {
        origin: 'CGN',
        destination: 'BER',
        uuid: '6249cfb9a7b80d87fde86555',
      },
      {
        origin: 'BER',
        destination: 'MUC',
        uuid: '6249d02714cdda5dc80d4e14',
      },
      {
        origin: 'CGN',
        destination: 'HAM',
        uuid: '6249e283ebfb1cdfd16dac35',
      },
    ];

    const filters = {
      origin: ['CGN'],
    };

    const filtered = filterPlainArray(flights, filters);
    const expected = [
      {
        origin: 'CGN',
        destination: 'BER',
        uuid: '6249cfb911a4bfe80e717109',
      },
      {
        origin: 'CGN',
        destination: 'BER',
        uuid: '6249cfb9a7b80d87fde86555',
      },
      {
        origin: 'CGN',
        destination: 'HAM',
        uuid: '6249e283ebfb1cdfd16dac35',
      },
    ];
    expect(filtered).toStrictEqual(expected);
  });

  it('should filter an array of flights by origin equal to CGN and destination BER', () => {
    const flights = [
      {
        origin: 'CGN',
        destination: 'BER',
        uuid: '6249cfb911a4bfe80e717109',
      },
      {
        origin: 'CGN',
        destination: 'BER',
        uuid: '6249cfb9a7b80d87fde86555',
      },
      {
        origin: 'BER',
        destination: 'MUC',
        uuid: '6249d02714cdda5dc80d4e14',
      },
      {
        origin: 'CGN',
        destination: 'HAM',
        uuid: '6249e283ebfb1cdfd16dac35',
      },
    ];

    const filters = {
      origin: ['CGN'],
      destination: ['BER'],
    };

    const filtered = filterPlainArray(flights, filters);
    const expected = [
      {
        origin: 'CGN',
        destination: 'BER',
        uuid: '6249cfb911a4bfe80e717109',
      },
      {
        origin: 'CGN',
        destination: 'BER',
        uuid: '6249cfb9a7b80d87fde86555',
      },
    ];
    expect(filtered).toStrictEqual(expected);
  });
});
