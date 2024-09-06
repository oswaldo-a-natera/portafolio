import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import './globals.css'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Oswaldo Natera's web portfolio",
};
 
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}