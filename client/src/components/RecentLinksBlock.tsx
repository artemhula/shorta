import { Card, Divider, List, Typography } from '@mui/joy';
import type { RecentLink } from '../models/RecentLink';
import { RecentLinkItem } from './RecentLinkItem';

interface Props {
  links: RecentLink[];
}

export const RecentLinksBlock = ({ links }: Props) => {
  return (
    <Card
      variant="outlined"
      sx={{
        p: { xs: 2, sm: 3 },
        mt: '16px',
        width: '100%',
        maxWidth: { xs: 400, sm: 700 },
        boxShadow: 'lg',
        borderRadius: 'lg',
      }}
    >
      <Typography
        level="h3"
        sx={{
          mb: 1,
          textAlign: 'center',
          fontFamily: 'body',
          fontSize: { xs: 16, sm: 20 },
        }}
      >
        Recent links
      </Typography>
      <List>
        {links.length === 0 && (
          <Typography level="body-md" color="neutral" p={1}>
            No recent links yet. Try to generate one.
          </Typography>
        )}
        {links.map((link, index) => (
          <>
            <RecentLinkItem {...link} />
            {index < links.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Card>
  );
};
