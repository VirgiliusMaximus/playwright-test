import { test, request, expect } from "@playwright/test";
// let urlLink2: any;
// test.beforeAll("Before all", async () => {
//     urlLink2 = await request.newContext({
//         baseURL: "https://restful-booker.herokuapp.com",
//         extraHTTPHeaders: {
//             Accept: "application/json"
//         }
//     });

// });

test("API Testing POST 1", async ({ request }) => {

    const response = await request.post('/booking', {

        data: {
            "firstname": "John",
            "lastname": "Doe",
            "totalprice": 123,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2023-01-01",
                "checkout": "2023-01-10"
            },
            "additionalneeds": "Breakfast"
        }
    });
    console.log(response.status());
    const responsePOST = await response.json();
    console.log(responsePOST);
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    expect(response.statusText()).toBe("OK");
    expect(response.headers()).toHaveProperty("content-type", "application/json; charset=utf-8");
    expect(responsePOST.booking).toMatchObject({

        firstname: 'John',
        lastname: 'Doe',
        totalprice: 123,
        depositpaid: true,
        bookingdates: { checkin: '2023-01-01', checkout: '2023-01-10' },
        additionalneeds: 'Breakfast'

    });
    expect(responsePOST.booking.additionalneeds).toBe("Breakfast");
});

test("API Testing POST with UI verification", async ({ request,page }) => {
    const response3 = await request.post('http://api.demoblaze.com/addtocart', {
        data: {"id":"c1454f00-4314-240d-ac74-cb11e2b526fa","cookie":"user=97f72ec5-201b-fb9a-a3d3-063986a16405","prod_id":3,"flag":false}
      
    });
    expect(response3.status()).toBe(200);
    

});

