import { Global, ThemeProvider } from '@emotion/react';

import MainStyles from '@/styles';

import { MainLayout } from './components/Layout';
import { Flights } from './features/flights/routes/Flights';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={MainStyles} />
      <MainLayout>
        <Flights />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
