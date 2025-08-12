// i genuinely hate this with all my heart. fuck webdev

const URL = process.env.REQUEST_URL as string;

export const runtime = 'experimental-edge';

export default async function handler() {
    const headers = new Headers({ 'Access-Control-Allow-Origin': '*' });

    return new Response(JSON.stringify({ URL: URL }), {
        headers: headers,
    });
}
