'use client';

import { LaunchRounded } from '@mui/icons-material';
import { Box, Link, Stack, Typography, useTheme } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Container from '../container';

const ProjectsSite = () => {
  const t = useTranslations();
  const theme = useTheme();
  return (
    <Container>
      <Typography variant="h2">{t('Mis trabajos')}</Typography>
      <Typography>
        {t('Aquí encontraras algunos de los proyectos personales que he hecho')}
      </Typography>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 1, md: 3 }}
        sx={{
          border: '#000000 solid 1px',
          borderRadius: '25px',
          width: '100%',
          height: '180px',
          [theme.breakpoints.down('md')]: {
            height: '300px',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '300px',
            height: '100%',
            borderTopLeftRadius: '25px',
            borderBottomLeftRadius: '25px',
            overflow: 'hidden',
            [theme.breakpoints.down('md')]: {
              width: '100%',
              height: '150px',
              borderTopRightRadius: '25px',
              borderBottomLeftRadius: '0px',
            },
          }}
        >
          <Image src={'/images/calculadora.png'} alt="Calculator" fill={true} />
        </Box>
        <Stack sx={{ width: '100%', padding: '5px' }}>
          <Typography variant="h4">{t('Calculadora simple')}</Typography>
          <Typography>
            {t(
              'Una calculadora hecha usando Nextjs y la biblioteca CSS styled-components',
            )}
          </Typography>
          <Link
            href="https://github.com/Oswaldo-Natera/calculator-react"
            sx={{ [theme.breakpoints.down('md')]: { textAlign: 'right' } }}
          >
            <Typography>
              {t('Código Fuente')}
              <LaunchRounded fontSize="small" />
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ProjectsSite;
