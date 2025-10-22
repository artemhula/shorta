import { Box, Button, Card, Input, Typography } from '@mui/joy';
import CircularProgress from '@mui/joy/CircularProgress';
import { ClipboardPaste } from 'lucide-react';

interface Props {
  url: string;
  setUrl: (u: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading?: boolean;
}

export const URLForm = ({ url, setUrl, onSubmit, loading }: Props) => {
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
        onSubmit={onSubmit}
      >
        <Input
          placeholder="Paste your link"
          size="lg"
          startDecorator={<ClipboardPaste size={20} />}
          sx={{ flex: 1, width: { xs: '100%', sm: 'auto' } }}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button
          size="lg"
          variant="solid"
          type="submit"
          sx={{ width: { xs: '100%', sm: 'auto' } }}
          disabled={loading}
          startDecorator={loading ? <CircularProgress size="sm" /> : null}
        >
          Shorten
        </Button>
      </Box>
    </Card>
  );
};
