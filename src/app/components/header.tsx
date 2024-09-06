'use client'

import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Button, Stack, Typography } from '@mui/material';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/navigations';
import { useTransition } from 'react';
import { useParams } from 'next/navigation';
import { TranslateOutlined } from '@mui/icons-material';
import Image from 'next/image';

interface Sections {
    title: string;
    url: '/' | '/about' | '/projects' | '/contact'
}

export default function Header() {
    const locale = useLocale()
    const t = useTranslations()
    const router = useRouter()
    const pathname = usePathname()
    const [isPending, startTransition] = useTransition();
    const params = useParams();

    const ChangeLanguage = () => {
        const nextLocale = locale === 'es' ? 'en' : 'es';
        startTransition(() => {
          router.replace(
            // @ts-expect-error -- TypeScript will validate that only known `params`
            // are used in combination with a given `pathname`. Since the two will
            // always match for the current route, we can skip runtime checks.
            {pathname, params},
            {locale: nextLocale}
          );
        });
      }

    const sections: Array<Sections> = [
        { title: `${t('Inicio')}`, url: '/' },
        { title: `${t('Sobre mí')}`, url: `/about` },
        { title: `${t('Proyectos')}`, url: `/projects` },
        { title: `${t('Contacto')}`, url: `/contact` },
    ];

    return (
        <Stack sx={{ height: '25%', paddingTop: '10px' }}>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', justifyContent: 'space-between', paddingBottom: '10px' }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '30%'}} >
                    <Image src='/images/foto.jpeg' alt='imagen' width={80} height={80} style={{ borderRadius: '50%'}}/>
                    <Typography sx={{ fontFamily: 'Merriweather', fontWeight: 'bold' }}>Oswaldo Natera</Typography>
                </Stack>
                <Stack sx={{ width: '30%', alignItems: 'center'}} >
                    <Image src='/images/logo-oswaldo.png' alt='imagen' width={200} height={75} />
                </Stack>
                <Stack sx={{ width: '30%', alignItems: 'end'}} >
                    <Button variant="outlined" size="small" onClick={() => {ChangeLanguage()}} sx={{
                        width: '80px',
                        color: '#ffffff',
                        fontFamily: 'Merriwheather',
                        borderColor: '#f77d1e',
                        background: '#f77d1e',
                        ':hover': { color: '#ffffff', background: '#666666', borderColor: '#666666' }
                    }}>
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
    )
}
