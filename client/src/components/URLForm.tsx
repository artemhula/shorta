import { Box, Button, Card, Input, Typography } from '@mui/joy';
import { ClipboardPaste } from 'lucide-react';

export const URLForm = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        p: { xs: 2, sm: 4 },
        width: '100%',
        maxWidth: { xs: 400, sm: 700 },
        boxShadow: 'lg',
        borderRadius: 'lg',
      }}
    >
      <Typography
        level="h2"
        sx={{
          mb: 1,
          textAlign: 'center',
          fontFamily: 'body',
          fontSize: { xs: 20, sm: 24 },
        }}
      >
        URL Shortener Service
      </Typography>
      <Typography
        level="body-md"
        sx={{
          mb: 2,
          textAlign: 'center',
          fontSize: { xs: 14, sm: 16 },
        }}
      >
        Enter your link to get a short one
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          mb: 2,
        }}
      >
        <Input
          placeholder="Paste your link"
          size="lg"
          startDecorator={<ClipboardPaste size={20} />}
          sx={{ flex: 1, width: { xs: '100%', sm: 'auto' } }}
        />
        <Button
          size="lg"
          variant="solid"
          sx={{ width: { xs: '100%', sm: 'auto' } }}
        >
          Shorten
        </Button>
      </Box>
    </Card>
  );
};
