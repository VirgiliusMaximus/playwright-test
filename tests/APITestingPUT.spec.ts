import { test, request, expect } from "@playwright/test";


test("API Testing PUT 1", async ({ request }) => {
    const response = await request.put('/booking/1', {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data: {
            "firstname": "Fane",
            "lastname": "Gatu",
            "totalprice": 333,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
    });

    const responsePut = await response.json();
    console.log(responsePut);
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    expect(response.statusText()).toBe("OK");
    expect(response.headers()).toHaveProperty("content-type", "application/json; charset=utf-8");
    expect(responsePut).toMatchObject({

        firstname: 'Fane',
        lastname: 'Gatu',
        totalprice: 333,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Breakfast'
    });
    expect(responsePut.additionalneeds).toBe("Breakfast");

    const responseGet = await request.get('/booking/1');
    console.log(responseGet.status());
    expect(await responseGet.json()).toMatchObject({

        firstname: 'Fane',
        lastname: 'Gatu',
        totalprice: 333,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Breakfast'
    });



});

