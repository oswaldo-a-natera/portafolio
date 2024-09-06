import { Link, Stack, Typography } from "@mui/material";
import Header from "../../components/header";
import { Email, LinkedIn, WhatsApp } from "@mui/icons-material";
import { useTranslations } from "next-intl";

export default function contactPage() {
    const t = useTranslations()
    return(
        <Stack sx={{ boxSizing: 'border-box', width: '100vw', height: '100vh' }} >
            <Header />
            <Stack padding={5} sx={{ height: '75%', fontFamily: 'Merriweather', backgroundImage: 'url(/images/fondo.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}  >
                <Stack spacing={4} sx={{ padding: '10px' }}>
                    <Typography variant='h2' sx={{ fontFamily: 'Merriweather', color: '#f77d1e' }} >
                        {t('Necesitas contactarme?')}
                    </Typography>
                    <Typography sx={{ fontFamily: 'Merriweather' }} >
                        {t('Aquí tendrás las opciones para poder contactarme')}
                    </Typography>

                    <Stack >
                        <Stack direction="row" spacing={2} alignItems="center">
                            <WhatsApp sx={{ color: 'green', fontSize: '3rem' }}/>
                            <Stack direction="row" spacing={0.5}>
                                <Typography sx={{ fontFamily: 'Merriweather', fontWeight: 'bold' }} >
                                    Whatsapp: 
                                </Typography>

                                <Link
                                    href="https://api.whatsapp.com/send?phone=3053819830"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Typography sx={{ fontFamily: 'Merriweather' }}>+57 305 381 9830</Typography>
                                </Link>
                            </Stack>
                        </Stack>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Email sx={{ color: 'gray', fontSize: '3rem' }}/>
                            <Stack direction="row" spacing={0.5}>
                                <Typography sx={{ fontFamily: 'Merriweather', fontWeight: 'bold' }} >
                                    Email: 
                                </Typography>

                                <Link
                                    href="mailto: oswaldonatera0@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Typography>oswaldonatera0@gmail.com</Typography>
                                </Link>
                            </Stack>
                        </Stack>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <LinkedIn sx={{ color: 'blue', fontSize: '3rem' }}/>
                            <Stack direction="row" spacing={0.5}>
                                <Typography sx={{ fontFamily: 'Merriweather', fontWeight: 'bold' }} >
                                    LinkedIn: 
                                </Typography>

                                <Link
                                    href="https://www.linkedin.com/in/oswaldo-natera-060393323/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Typography sx={{ fontFamily: 'Merriweather' }}>https://www.linkedin.com/in/oswaldo-natera-060393323</Typography>
                                </Link>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}
