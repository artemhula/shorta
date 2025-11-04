import { Box, IconButton, Link, ListItem, Typography } from '@mui/joy';
import type { RecentLink } from '../models/RecentLink';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

export const RecentLinkItem = ({
  shortId,
  shortUrl,
  originalUrl,
  createdAt,
}: RecentLink) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <ListItem
      key={shortId}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <Link href={shortUrl} target="_blank">
          {shortUrl}
        </Link>
        <IconButton
          variant="soft"
          color={copied ? 'success' : undefined}
          sx={{
            '--IconButton-size': '28px',
          }}
          onClick={handleCopy}
        >
          {!copied ? <Copy size={16} /> : <Check size={16} />}
        </IconButton>
      </Box>
      <Typography
        level="body-xs"
        color="neutral"
        overflow={'hidden'}
        textOverflow={'ellipsis'}
        maxWidth={'100%'}
      >
        {originalUrl}
      </Typography>
      <Typography
        level="body-xs"
        color="neutral"
        marginBottom={1}
        sx={{ opacity: 0.6 }}
      >
        Created at {new Date(createdAt).toLocaleString()}
      </Typography>
    </ListItem>
  );
};
