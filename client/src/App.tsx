import { Global, ThemeProvider } from '@emotion/react';

import MainStyles from '@/styles';

import { AppTitle } from './App.styles';
import { Logo } from './components/Icons/Logo';
import { ContentLayout, MainLayout } from './components/Layout';
import { Flights } from './features/flights/routes/Flights';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={MainStyles} />
      <MainLayout>
        <ContentLayout>
          <AppTitle as="h1" variant="xl" weight="extraBold">
            <Logo />
          </AppTitle>
          <Flights />
        </ContentLayout>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
