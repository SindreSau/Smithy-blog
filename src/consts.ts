import type { Site, Page, Links, Socials } from '@types';

// Global
export const SITE: Site = {
    TITLE: 'BOGSTAD GÅRD SMIE',
    DESCRIPTION:
        'Velkommen til Bogstad Gård smie. Her finner du informasjon om smeden Håkon Busk og bilder av hans arbeid.',
    AUTHOR: 'Sindre Sauarlia',
};

// Work Page
export const WORK: Page = {
    TITLE: 'Kontakt',
    DESCRIPTION: 'Kontaktinformasjon',
};

// Links
export const LINKS: Links = [
    {
        TEXT: 'Hjem',
        HREF: '/',
    },
    {
        TEXT: 'Kontakt',
        HREF: '/kontakt',
    },
];

// Socials
export const SOCIALS: Socials = [
    {
        NAME: 'Email',
        ICON: 'email',
        TEXT: 'hawk.metaldesigns@gmail.com',
        HREF: 'mailto:hawk.metaldesigns@gmail.com',
    },
    {
        NAME: 'Instagram',
        ICON: 'instagram',
        TEXT: 'hawk.metaldesigns',
        HREF: 'https://www.instagram.com/hawk.metaldesigns/',
    },
];
