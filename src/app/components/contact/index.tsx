'use client';

import { Email, LinkedIn, WhatsApp } from '@mui/icons-material';
import {
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import Container from '../container';

const ContactSite = () => {
  const t = useTranslations();
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Container>
      <Stack spacing={4} sx={{ padding: '10px' }}>
        <Typography variant="h2">{t('Necesitas contactarme?')}</Typography>
        <Typography>
          {t('Aquí tendrás las opciones para poder contactarme')}
        </Typography>

        <Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <WhatsApp sx={{ color: 'green', fontSize: '3rem' }} />
            <Stack direction="row" spacing={0.5}>
              {!isMobile && (
                <Typography sx={{ fontWeight: 'bold' }}>Whatsapp:</Typography>
              )}
              <Link
                href="https://api.whatsapp.com/send?phone=3053819830"
                target="_blank"
                rel="noreferrer"
              >
                <Typography>+57 305 381 9830</Typography>
              </Link>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Email sx={{ color: 'gray', fontSize: '3rem' }} />
            <Stack direction="row" spacing={0.5}>
              {!isMobile && (
                <Typography sx={{ fontWeight: 'bold' }}>Email:</Typography>
              )}
              <Link
                href="mailto: oswaldonatera0@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <Typography>oswaldonatera0@gmail.com</Typography>
              </Link>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <LinkedIn sx={{ color: 'blue', fontSize: '3rem' }} />
            <Stack direction="row" spacing={0.5}>
              {!isMobile && (
                <Typography sx={{ fontWeight: 'bold' }}>LinkedIn:</Typography>
              )}
              <Link
                href="https://www.linkedin.com/in/oswaldo-natera-060393323/"
                target="_blank"
                rel="noreferrer"
              >
                {isMobile ? (
                  <Typography>
                    linkedin
                  </Typography>
                ) : (
                  <Typography>
                    https://www.linkedin.com/in/oswaldo-natera-060393323
                  </Typography>
                )}
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ContactSite;
