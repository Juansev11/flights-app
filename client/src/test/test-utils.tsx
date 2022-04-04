import { ThemeProvider } from '@emotion/react';
import { render as rtlRender, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { theme } from '@/styles/theme';

/**
 * Common function for waiting loading content to finish before rendered elements
 */
export const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(
    () => [...screen.queryAllByTestId(/loading/i), ...screen.queryAllByText(/loading/i)],
    { timeout: 4000 }
  );

/**
 * Custom render function to use throughout whole testing suites with wrapper containing ThemeProvider from emotion
 */
// eslint-disable-next-line import/export
export const render = async (ui: any, renderOptions: Record<string, any> = {}) => {
  const returnValue = {
    ...rtlRender(ui, {
      wrapper: ({ children }) => {
        return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
      },
      ...renderOptions,
    }),
  };

  await waitForLoadingToFinish();

  return returnValue;
};

// eslint-disable-next-line import/export
export * from '@testing-library/react';
export { userEvent, rtlRender };
