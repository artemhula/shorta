import { Box, Typography } from '@mui/joy';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  return (
    <Box
      sx={{
        width: '100%',
        py: 2,
        bgcolor: 'background.surface',
        borderBottom: '1px solid',
        borderColor: 'divider',
        textAlign: 'center',
      }}
    >
      <Typography
        level="h1"
        sx={{
          fontFamily: 'display',
          fontWeight: 600,
          userSelect: 'none',
          fontSize: { xs: 28, sm: 32 },
        }}
      >
        Shorta
      </Typography>
      <ThemeToggle />
    </Box>
  );
};
