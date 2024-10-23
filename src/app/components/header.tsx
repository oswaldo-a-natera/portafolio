'use client';

import { Link, usePathname, useRouter } from '@/navigations';
import { TranslateOutlined } from '@mui/icons-material';
import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';

interface Sections {
  title: string;
  url: '/' | '/about' | '/projects' | '/contact';
}

const Header = () => {
  const locale = useLocale();
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const params = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const widthImage = isMobile ? 100 : 200;

  const ChangeLanguage = () => {
    const nextLocale = locale === 'es' ? 'en' : 'es';
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  };

  const sections: Array<Sections> = [
    { title: `${t('Inicio')}`, url: '/' },
    { title: `${t('Sobre mí')}`, url: `/about` },
    { title: `${t('Proyectos')}`, url: `/projects` },
    { title: `${t('Contacto')}`, url: `/contact` },
  ];

  return (
    <Stack
      sx={{
        height: '25vh',
        paddingTop: '10px',
        [theme.breakpoints.down('md')]: { height: '20vh' },
      }}
    >
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          justifyContent: 'space-between',
          paddingBottom: '10px',
        }}
      >
        <Stack
          direction="row"
          spacing={{ xs: 0.5, md: 2 }}
          alignItems="center"
          sx={{ width: '30%' }}
        >
          <Stack
            sx={{
              position: 'relative',
              width: '80px',
              height: '80px',
              [theme.breakpoints.down('md')]: { width: '40px', height: '40px' },
            }}
          >
            <Image
              src="/images/foto.jpeg"
              alt="imagen"
              fill={true}
              style={{
                borderRadius: '50%',
              }}
            />
          </Stack>
          <Typography
            sx={{
              fontWeight: 'bold',
              [theme.breakpoints.down('md')]: { fontSize: '15px' },
            }}
          >
            Oswaldo Natera
          </Typography>
        </Stack>
        <Stack sx={{ width: '30%', alignItems: 'center' }}>
          <Image
            src="/images/logo-oswaldo.png"
            alt="imagen"
            width={widthImage}
            height={75}
          />
        </Stack>
        <Stack sx={{ width: '30%', alignItems: 'end' }}>
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              ChangeLanguage();
            }}
            sx={{
              width: '80px',
              color: '#ffffff',
              fontFamily: 'Merriwheather',
              borderColor: '#f77d1e',
              background: '#f77d1e',
              ':hover': {
                color: '#ffffff',
                background: '#666666',
                borderColor: '#666666',
              },
            }}
          >
            <TranslateOutlined />
            <Typography sx={{ fontFamily: 'Merriweather', fontWeight: 'bold' }}>
              {locale === 'es' ? 'en' : 'es'}
            </Typography>
          </Button>
        </Stack>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-around', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            key={section.title}
            href={section.url}
            style={{
              textDecoration: 'none',
              color: 'black',
            }}
          >
            <Typography sx={{ fontFamily: 'Merriweather' }}>
              {section.title}
            </Typography>
          </Link>
        ))}
      </Toolbar>
    </Stack>
  );
};

export default Header;
