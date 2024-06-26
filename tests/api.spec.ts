import { expect, test, } from '@playwright/test';
import { request } from 'http';
import { faker } from '@faker-js/faker';

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
    let name = faker.person.firstName();
    let email = faker.internet.email();
    const token = '898d6dc2d36c9c062ea4fa564f019b450c4f24825e3d8c9551d25d0ff5ca7a47';
    const responds = await request.post('https://gorest.co.in/public/v2/users', {
        data:
            { "name": name, "gender": "male", "email": email, "status": "active", },
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const res = await responds.json();
    const id = res.id;

    console.log(res);

    expect(responds.status()).toBe(201);
    expect(res).toHaveProperty('name', name);
    expect(res).toHaveProperty('email', email);
});

test('get a specific user', async ({ request }) => {
    let name = faker.person.firstName();
    let email = faker.internet.email();
    const token = '898d6dc2d36c9c062ea4fa564f019b450c4f24825e3d8c9551d25d0ff5ca7a47';
    const responds = await request.post('https://gorest.co.in/public/v2/users', {
        data:
            { "name": name, "gender": "male", "email": email, "status": "active", },
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const res = await responds.json();
    const id = res.id;

    console.log(res);

    expect(responds.status()).toBe(201);
    expect(res).toHaveProperty('name', name);
    expect(res).toHaveProperty('email', email);
    const getReq = await request.get(`https://gorest.co.in/public/v2/users/${id}`,{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });
    const body = await getReq.json();
    console.log('------------------------------');
    console.log(body);
});

test('Create user from the json file', async ({ request }) => {
    let name = "Srikant";
    let email = 'srikanth@gg.com';
    const jsonData = require('../tests/testData.json');
    const token = '898d6dc2d36c9c062ea4fa564f019b450c4f24825e3d8c9551d25d0ff5ca7a47';
    const responds = await request.post('https://gorest.co.in/public/v2/users', {
        data: jsonData,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const res = await responds.json();

    console.log(res);

    expect(responds.status()).toBe(201);
});