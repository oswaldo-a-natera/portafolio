import { Button, Stack, Typography } from "@mui/material"
import { useLocale, useTranslations } from "next-intl"
import Header from "../components/header"
import { ArrowForwardRounded } from "@mui/icons-material"

export default function pages() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <Stack sx={{ boxSizing: 'border-box', width: '100vw', height: '100vh' }} >
      <Header />
      <Stack spacing={4} sx={{ paddingTop: '20px', alignItems: 'center', backgroundImage: 'url(/images/fondo.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '75%' }} >
        <Typography variant='h2' sx={{ fontFamily: 'Merriweather', color: '#f77d1e' }} >
          {t('Hola, yo soy Oswaldo Natera')}
        </Typography>
        <Typography sx={{ fontFamily: 'Merriweather' }} >
          {t('Soy un programador fullstack nivel junior')}.{' '}
          {t('Si deseas saber más de mí, te invito a explorar esta página')} 
        </Typography>
        <Button sx={{
          width: '150px',
          color: '#ffffff',
          textDecoration: 'none',
          fontFamily: 'Merriwheather',
          borderColor: '#000000',
          background: '#f77d1e',
          ':hover': { color: '#ffffff', background: '#666666', borderColor: '#000000' }}} 
          href={`/${locale}/about`}
        >
          <Typography >
            {t('Sobre mí')}
          </Typography>
          <ArrowForwardRounded />
        </Button>
      </Stack>
    </Stack>
  )
}