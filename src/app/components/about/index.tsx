import { Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Container from '../container';

const AboutSite = () => {
  const t = useTranslations();
  return (
    <Container>
      <Typography variant="h2">{t('¡Conóceme!')}</Typography>
      <Stack spacing={2} sx={{ textAlign: 'justify' }}>
        <Typography>
          {t(
            'Soy un programador fullstack nivel junior actualmente, estudié una carrera técnica en programación de software donde aprendí los fundamentos en Python, CRUD en MySQL utilizando phpMyAdmin y conocimientos en HTML, CSS, JavaScript, PHP y JAVA',
          )}
          .{' '}
          {t(
            'Cuento con un año de experiencia desarrollando en una empresa, siendo 6 meses de ese año como pasante debido a las prácticas que requería para terminar la carrera y los otros meses como desarrollador',
          )}
          .{' '}
          {t(
            'Allí pude aprender a usar la librería React, redux, redux saga y el framework Nextjs',
          )}
          .{' '}
          {t(
            'También pude aprender sobre bases de datos no relacionales como Firebase y librerías CSS como styled component y mui material',
          )}
          .
        </Typography>
        <Typography>
          {t(
            'Estoy abierto a oportunidades laborales en las que pueda aportar, aprender y crecer',
          )}
          .{' '}
          {t(
            'Si tienes una buena oportunidad que coincida con mis habilidades y experiencia, no dudes en contactarme',
          )}
          .
        </Typography>
      </Stack>
    </Container>
  );
};

export default AboutSite;
