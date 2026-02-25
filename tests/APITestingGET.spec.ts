import { test, request, expect } from "@playwright/test";
let urlLink2: any;
test.beforeAll("Before all", async () => {
    urlLink2 = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders: {
            Accept: "application/json"
        }
    });

});

test("API Testing GET", async ({ request }) => {

    const response = await request.get('https://restful-booker.herokuapp.com/booking', {
        headers: {
            Accept: "application/json"
        }
    });
    console.log(response.status());
    console.log(await response.json());

});

test("API Testing GET 2", async () => {
    const urlLink = await request.newContext({
        baseURL: 'https://restful-booker.herokuapp.com/',
        extraHTTPHeaders: {
            Accept: "application/json"
        }
    });
    const response = await urlLink.get('/booking');
    console.log(response.status());
    console.log(await response.json());

});


test("API Testing GET 3", async () => {

    const response2 = await urlLink2.get('/booking');
    console.log(response2.status());
    console.log(await response2.json());

});

test("API Testing GET 4", async ({ request }) => {

    const response2 = await request.get('/booking');
    console.log(response2.status());
    console.log(await response2.json());

});

test("API Testing GET 5", async ({ request }) => {

    const response2 = await request.get('/booking/2402');
    console.log(response2.status());
    console.log(await response2.json());

});

test("API Testing GET 6", async ({ request }) => {

    const response2 = await request.get('/booking?firstname=Josh&lastname=Allen');
    console.log(response2.status());
    console.log(await response2.json());

});

test("API Testing GET 7", async ({ request }) => {

    const response2 = await request.get('/booking', {
        params: {
            firstname: "Josh",
            lastname: "Allen"
        }
    });
    console.log(response2.status());
    console.log(await response2.json());

});

test("API Testing GET 8", async ({ request }) => {

    const response2 = await request.get('/booking/61');
    console.log(response2.status());
    console.log(await response2.json());
    expect(response2.status()).toBe(200);
    expect(await response2.ok()).toEqual(true);
    expect(await response2.json()).toMatchObject({
        "firstname": "Jane",
        "lastname": "Doe",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Extra pillows please"
    }
    );

});

test("API Testing GET 9 with ui verification", async ({ request, page }) => {
    const response3 = await request.get('http://api.demoblaze.com/entries');
    console.log(response3.status());
    const responseJ = await response3.json();
    console.log(responseJ.Items[0].title);
    expect(response3.status()).toBe(200);
    await page.goto('https://www.demoblaze.com/');
    await expect(page.getByRole('link', { name: 'Samsung Galaxy s6' })).toHaveText(responseJ.Items[0].title);

});

