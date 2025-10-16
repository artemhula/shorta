import { Box, CssBaseline, CssVarsProvider } from '@mui/joy';
import { Header } from '../components/Header';
import { URLForm } from '../components/URLForm';
import { theme } from '../utils/theme';

export const ShortenURLPage = () => {
  return (
    <CssVarsProvider theme={theme} defaultMode="dark">
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.level1',
          fontFamily: 'body',
        }}
      >
        <Header />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 'calc(100vh - 76px)',
            px: 2,
          }}
        >
          <URLForm />
        </Box>
      </Box>
    </CssVarsProvider>
  );
};
