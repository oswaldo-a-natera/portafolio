import { ArrowForwardRounded } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import { useLocale, useTranslations } from 'next-intl';
import Container from '../container';

const IndexSite = () => {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <Container>
      <Stack spacing={4} sx={{ alignItems: 'center' }}>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          {t('Hola, yo soy Oswaldo Natera')}
        </Typography>
        <Typography sx={{ textAlign: 'center' }}>
          {t('Soy un programador fullstack nivel junior')}.{' '}
          {t('Si deseas saber más de mí, te invito a explorar esta página')}
        </Typography>
        <Button
          sx={{
            width: '150px',
            color: '#ffffff',
            textDecoration: 'none',
            borderColor: '#000000',
            background: '#f77d1e',
            ':hover': {
              color: '#ffffff',
              background: '#666666',
              borderColor: '#000000',
            },
          }}
          href={`/${locale}/about`}
        >
          <Typography>{t('Sobre mí')}</Typography>
          <ArrowForwardRounded />
        </Button>
      </Stack>
    </Container>
  );
};

export default IndexSite;
