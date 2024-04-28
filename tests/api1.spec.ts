import { test } from "@playwright/test"

test('test', async ({ request }) => {
    const responds = await request.get('https://gorest.co.in/public/v2/posts',);
    const body = await responds.json();
    console.log(body);
})