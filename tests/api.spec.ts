import { expect, test, } from '@playwright/test';

test('Get request', async ({ request }) => {
    const responds = await request.get('https://gorest.co.in/public/v2/posts',);
    const body = await responds.json();

    console.log(body);
    /* status have ok */
    expect(responds.ok).toBeTruthy();
    /* verify the status code */ 
    expect(responds.status()).toBe(200);
})