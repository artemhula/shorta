import { Button, useColorScheme } from '@mui/joy';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      variant="soft"
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      sx={{
        position: 'absolute',
        top: 16,
        right: 16,
        p: 0,
        width: { xs: 38, sm: 43 },
        height: { xs: 38, sm: 43 },
      }}
    >
      {mode === 'dark' ? <Sun /> : <Moon />}
    </Button>
  );
};
