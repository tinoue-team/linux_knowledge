import db from '@astrojs/db';
import preact from '@astrojs/preact';
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://linuledge-test.netlify.app',
    integrations: [preact(), db()],
});
