import type { Site } from '@/type';

export const SITE: Site = {
    website: import.meta.env.PUBLIC_SITE_URL, // replace this with your deployed domain
    // website: 'https://astro-paper.pages.dev/', // replace this with your deployed domain

    // FIXME: 以下は修正必要
    author: 'Sat Naing',
    profile: 'https://satnaing.dev/',
    desc: 'A minimal, responsive and SEO-friendly Astro blog theme.',
    title: 'AstroPaper',
    ogImage: 'astropaper-og.jpg',
    lightAndDarkMode: true,
    postPerIndex: 4,
    postPerPage: 3,
    scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
    showArchives: true,
    editPost: {
        url: 'https://github.com/satnaing/astro-paper/edit/main/src/content/blog',
        text: 'Suggest Changes',
        appendFilePath: true,
    },
};
