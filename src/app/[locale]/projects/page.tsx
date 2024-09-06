import { Stack, Typography } from "@mui/material";
import Header from "../../components/header";
import Image from "next/image";
import Link from "next/link";
import { LaunchRounded } from "@mui/icons-material";
import { useTranslations } from "next-intl";

export default function projectsPage() {
    const t = useTranslations()
    return(
        <Stack sx={{ boxSizing: 'border-box', width: '100vw', height: '100vh' }}>
            <Header />
            <Stack spacing={4} padding={5} sx={{ backgroundImage: 'url(/images/fondo.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '75%' }} >
                <Typography variant='h2' sx={{ fontFamily: 'Merriweather', color: '#f77d1e' }} >
                    {t('Mis trabajos')}
                </Typography>
                <Typography >
                    {t('Aquí encontraras algunos de los proyectos personales que he hecho')}
                </Typography>
                <Stack direction="row" spacing={3} sx={{ border: '#000000 solid 1px' ,borderRadius: '25px', width: '80vw', height: '200px'}} >
                    <Image src={'/images/calculadora.png'} alt="image" width={300} height={200} objectFit="container" style={{ borderTopLeftRadius: '25px', borderBottomLeftRadius: '25px'}}/>
                    <Stack >
                        <Typography variant="h4">
                            {t('Calculadora simple')}
                        </Typography>
                        <Typography>
                            {t('Una calculadora hecha usando Nextjs y la biblioteca CSS styled-components')}
                        </Typography>
                        <Link href='https://github.com/Oswaldo-Natera/calculator' style={{ width: '400px'}} >
                            <Typography >
                                {t('Código Fuente')}<LaunchRounded fontSize="small" />
                            </Typography>
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}
