import {Pathnames, LocalePrefix} from 'next-intl/routing';

export const defaultLocale = 'es' as const;
export const locales = ['en', 'es'] as const;

export const pathnames = {
  '/': '/',
  '/about': {
    en: '/about',
    es: '/about'
  },
  '/projects': {
    en: '/projects',
    es: '/projects'
  },
  '/contact': {
    en: '/contact',
    es: '/contact'
  },
} satisfies Pathnames<typeof locales>;

export const localePrefix: LocalePrefix<typeof locales> = 'always';