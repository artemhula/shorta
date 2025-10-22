import { Box, Button, Sheet, Typography } from '@mui/joy';
import Card from '@mui/joy/Card';
import { Check, Copy, Link, QrCode, Sparkles } from 'lucide-react';
import { API_URL } from '../config';
import { useState } from 'react';
import { QRDialog } from './QRDialog';

interface Props {
  result: { originalUrl: string; shortId: string };
  resetLink: () => void;
}

export const ResultBlock = ({
  result: { originalUrl, shortId },
  resetLink,
}: Props) => {
  const shortUrl = `${API_URL}/${shortId}`;
  const [copied, setCopied] = useState(false);
  const [qrOpened, setQrOpened] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

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
        {shortUrl}
      </Sheet>

      <Box display={'flex'} gap={1} marginTop={1} justifyContent={'flex-end'}>
        <Button
          size="lg"
          variant="solid"
          startDecorator={<QrCode />}
          sx={{ width: { xs: '100%', sm: '30%' } }}
          onClick={() => setQrOpened(true)}
        >
          QR
        </Button>
        <Button
          size="lg"
          color="success"
          variant={copied ? 'soft' : 'solid'}
          startDecorator={copied ? <Check /> : <Copy />}
          sx={{ width: { xs: '100%', sm: '70%' } }}
          onClick={handleCopy}
        >
          {copied ? 'Copied!' : 'Copy'}
        </Button>
      </Box>
      <Button size="lg" variant="soft" color="neutral" onClick={resetLink}>
        Short another link
      </Button>
      <QRDialog
        open={qrOpened}
        onClose={() => setQrOpened(false)}
        url={shortUrl}
      />
    </Card>
  );
};
