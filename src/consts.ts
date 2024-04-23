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
        TEXT: 'Galleri',
        HREF: '/galleri',
    },
    {
        TEXT: 'Kontakt',
        HREF: '/kontakt',
    },
];
