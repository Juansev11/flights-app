import { render, screen, userEvent, waitFor } from '@/test/test-utils';
import { getUrlQueryParams } from '@/utils/queryParams';

import { Flights } from './Flights';

const renderFlights = async () => {
  const utils = await render(<Flights />);
  return {
    ...utils,
  };
};

describe.only('Flights', () => {
  it('should render the filters', async () => {
    await renderFlights();

    const originInput = await screen.findByRole('textbox', { name: /origin/i });
    expect(originInput).toBeInTheDocument();

    const destinationInput = await screen.findByRole('textbox', { name: /destination/i });
    expect(destinationInput).toBeInTheDocument();
  });

  it('should render a list with initial results of flights', async () => {
    await renderFlights();

    const flightsList = screen.getByRole('list');
    expect(flightsList).toBeInTheDocument();
    expect(flightsList).toBeInTheDocument();
    await waitFor(() => {
      const flightsListItem = screen.getAllByRole('listitem');
      expect(flightsListItem).toHaveLength(30);
    });
  });

  it('should type into the filters and change URL query', async () => {
    await renderFlights();

    const originInput = screen.getByRole('textbox', { name: /origin/i });
    userEvent.type(originInput, 'BER');
    expect(originInput).toHaveValue('BER');

    const destination = screen.getByRole('textbox', { name: /destination/i });
    userEvent.type(destination, 'MUC');
    expect(destination).toHaveValue('MUC');

    const { destination: destinationQueryParam, origin: originQueryParam } = getUrlQueryParams();

    await waitFor(() => {
      expect(originQueryParam).toBe('BER');
    });
    await waitFor(() => {
      expect(destinationQueryParam).toBe('MUC');
    });
  });

  it('should return the list of flights corresponding to a origin and destination search', async () => {
    await renderFlights();

    const originInput = screen.getByRole('textbox', { name: /origin/i });
    userEvent.type(originInput, 'BER');
    const destination = screen.getByRole('textbox', { name: /destination/i });
    userEvent.type(destination, 'MUC');

    await waitFor(() => {
      const flightsListItem = screen.getAllByRole('listitem');
      expect(flightsListItem).toHaveLength(2);
    });
  });
});
