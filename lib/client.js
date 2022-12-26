import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'potato-creation',
  apiKey: process.env.MICROCMS_API_KEY,
});
