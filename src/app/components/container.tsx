'use client'

import { Stack, useTheme } from '@mui/material';
import Header from './header';

const Container = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <Stack sx={{ boxSizing: 'border-box', width: '100vw', height: '100vh' }}>
      <Header />
      <Stack
        spacing={4}
        sx={{
          padding: '20px 50px',
          backgroundImage: 'url(/images/fondo.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          overflow: 'auto',
          height: '75vh',
          [theme.breakpoints.down('md')]: {
            height: '80vh',
            padding: '20px 20px',
          },
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export default Container;
