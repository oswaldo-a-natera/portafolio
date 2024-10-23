'use client';

import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: '"Merriweather", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h2' },
          style: {
            color: '#f77d1e',
            fontSize: 'clamp(2rem, 2vw + 2rem, 4rem)',
          },
        },
        {
          props: { variant: 'h4' },
          style: {
            fontSize: 'clamp(1rem, 2vw + 1rem, 2rem)',
          },
        },
      ],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
