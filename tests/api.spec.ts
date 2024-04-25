import {test,} from '@playwright/test';

test('Post request',async({request})=>{
    const postResponds = await request.get('https://gorest.co.in/public/v2/posts',);
    const body = await postResponds.json();
    console.log(body);
})