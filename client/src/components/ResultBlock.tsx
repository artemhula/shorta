import { Box, Button, Sheet, Typography } from '@mui/joy';
import Card from '@mui/joy/Card';
import { Copy, Link, QrCode, Sparkles } from 'lucide-react';
import { API_URL } from '../config';

interface Props {
  result: { originalUrl: string; shortId: string };
}

export const ResultBlock = ({ result: { originalUrl, shortId } }: Props) => {
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
        Result
      </Typography>

      <Box display={'flex'} gap={1}>
        <Link size={22} />
        Your long URL
      </Box>
      <Sheet
        variant="outlined"
        sx={{
          borderRadius: 'md',
          px: 2,
          py: 1,
          bgcolor: 'background.body',
          boxShadow: 'xs',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          width: '100%',
        }}
      >
        {originalUrl}
      </Sheet>

      <Box display={'flex'} gap={1} marginTop={1}>
        <Sparkles size={22} />
        Your shorted link
      </Box>
      <Sheet
        variant="outlined"
        sx={{
          borderRadius: 'md',
          px: 2,
          py: 1,
          bgcolor: 'background.body',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          boxShadow: 'xs',
        }}
      >
        {`${API_URL}/${shortId}`}
      </Sheet>

      <Box display={'flex'} gap={1} marginTop={1} justifyContent={'flex-end'}>
        <Button
          size="lg"
          variant="solid"
          startDecorator={<QrCode />}
          sx={{ width: { xs: '100%', sm: '30%' } }}
        >
          QR
        </Button>
        <Button
          size="lg"
          color="success"
          variant="solid"
          startDecorator={<Copy />}
          sx={{ width: { xs: '100%', sm: '70%' } }}
        >
          Copy
        </Button>
      </Box>
      <Button size="lg" variant="soft" color="neutral">
        Short another link
      </Button>
    </Card>
  );
};
