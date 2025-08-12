const URL = process.env.REQUEST_URL as string;

export const runtime = 'experimental-edge';

export default async function handler() {
    return new Response(JSON.stringify({ URL: URL }));
}
