import { test, request, expect } from "@playwright/test";


test("API Key Authentication", async ({ request }) => {
    const response = await request.put('/booking/2', {
        headers: {

            "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM=",

        },
        data: {
            "firstname": "John",
            "lastname": "Doe",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
    });
    expect(response.status()).toBe(200);

});

test("API Basic Authentication", async ({ request }) => {
    const response = await request.put('/booking/2', {
        headers: {
            "Cookie": `token="${token}"`,
        },
        data: {
            "firstname": "JohnMax",
            "lastname": "DoeMax",
            "totalprice": 555,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
    });
    expect(response.status()).toBe(200);

});
let token: string;
test.beforeAll("API Basic Auth", async ({ request }) => {
    const response = await request.post('/auth', {

        data: {
            "username": "admin",
            "password": "password123"
        }
    });
    const tokenVal = await response.json();
    token = tokenVal.token;
    console.log(token);
    expect(response.status()).toBe(200);

});

test("API Token Authentication of PUT call using basic auth", async ({ request }) => {
    const response = await request.put('/booking/2', {
        headers: {
            "Cookie": `token="${token}"`,
        },
        data: {
            "firstname": "JohnMax",
            "lastname": "DoeMax",
            "totalprice": 555,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
    });
    expect(response.status()).toBe(200);
});

test("API Token Authentication of DELETE call using basic auth", async ({ request }) => {
    const response = await request.delete('/booking/2', {
        headers: {
            "Cookie": `token="${token}"`,
        },
    });

    const status = response.status();
    expect(status === 201 || status === 405).toBeTruthy();
    expect(response.statusText()).toMatch(/Created|Method Not Allowed/);
});

