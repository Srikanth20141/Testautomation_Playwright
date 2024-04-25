import { expect, test, } from '@playwright/test';

test('Get request', async ({ request }) => {
    const responds = await request.get('https://gorest.co.in/public/v2/posts',);
    const body = await responds.json();

    console.log(body);
    /* status have ok */
    expect(responds.ok).toBeTruthy();
    /* verify the status code */
    expect(responds.status()).toBe(200);
});


test('Create user', async ({ request }) => {
    const token = '898d6dc2d36c9c062ea4fa564f019b450c4f24825e3d8c9551d25d0ff5ca7a47'
    const responds = await request.post('https://gorest.co.in/public/v2/users', {
        data:
            { "name": "srikanth", "gender": "male", "email": "sathinathan@gmail.com", "status": "active", },
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const res = await responds.json();

    console.log(res);

    expect(responds.status()).toBe(201);
})