import { Box, CssBaseline, CssVarsProvider } from '@mui/joy';
import { Header } from '../components/Header';
import { theme } from '../utils/theme';
import { useState } from 'react';
import { URLForm } from '../components/URLForm';
import { API_URL } from '../config';
import { ResultBlock } from '../components/ResultBlock';
import Alert from '@mui/joy/Alert';
import { RecentLinksBlock } from '../components/RecentLinksBlock';
import { addRecentLink, getRecentLinks } from '../utils/recent-links';
import type { Link } from '../models/Link';

export const ShortenURLPage = () => {
  const [url, setUrl] = useState<string>('');
  const [result, setResult] = useState<Link | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const recentLinks = getRecentLinks();

  const shortenHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/shorten`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ originalUrl: url }),
      });
      if (!res.ok) {
        const errData = await res.json();
        setError(errData.error || 'Server error');
        return;
      }
      const data = (await res.json()) as Link;
      setResult(data);
      addRecentLink({
        shortId: data.shortId,
        originalUrl: data.originalUrl,
        shortUrl: `${API_URL}/${data.shortId}`,
        createdAt: data.createdAt,
      });
    } catch (e) {
      setError((e as Error).message || 'Error');
    } finally {
      setLoading(false);
    }
  };
  const resetAll = () => {
    setUrl('');
    setResult(null);
  };

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
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 'calc(100vh - 76px)',
            px: 2,
            gap: 2,
          }}
        >
          {error && (
            <Alert
              color="danger"
              variant="soft"
              sx={{ width: '100%', maxWidth: 700 }}
            >
              {error}
            </Alert>
          )}
          {result ? (
            <ResultBlock result={result} resetLink={resetAll} />
          ) : (
            <>
              <URLForm
                onSubmit={shortenHandler}
                url={url}
                setUrl={setUrl}
                loading={loading}
              />
              <RecentLinksBlock links={recentLinks} />
            </>
          )}
        </Box>
      </Box>
    </CssVarsProvider>
  );
};
