import { test, request, expect } from "@playwright/test";
import apidata from "../testdata/apidata.json";

test("API Testing pass request body for POST without testdata Json", async ({ request }) => {
    const myrequest = await request.post('/booking', {

        data: {
            "firstname": "Jim",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
    });
    const responseBody = await myrequest.json();
    expect(responseBody.booking).toMatchObject({
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    });

    expect(responseBody.booking.additionalneeds).toBe("Breakfast");

});

test("API Testing pass request body for POST with testdata Json", async ({ request }) => {
    const myrequest = await request.post('/booking', {

        data: apidata.postcalldata
    });
    const responseBody = await myrequest.json();
    expect(responseBody.booking).toMatchObject(apidata.postcalldata);

    expect(responseBody.booking.additionalneeds).toBe(apidata.postcalldata.additionalneeds);

});





test("API Testing pass request body for PUT without testdata Json", async ({ request }) => {
    const response = await request.put('/booking/1', {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data: {
            "firstname": "Unul",
            "lastname": "Nou",
            "totalprice": 777,
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
    expect(responsePut).toMatchObject({ 
        "firstname": "Unul",
        "lastname": "Nou",
        "totalprice": 777,      
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    });
});

test("API Testing pass request body for PUT with testdata Json", async ({ request }) => {
    const response = await request.put('/booking/1', {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data: apidata.putcalldata
    });

    const responsePut = await response.json();
    console.log(responsePut);
    expect(responsePut).toMatchObject(apidata.putcalldata);
    expect(responsePut.firstname).toBe(apidata.putcalldata.firstname);
    expect(responsePut.lastname).toBe(apidata.putcalldata.lastname);
    expect(responsePut.additionalneeds  ).toBe(apidata.putcalldata.additionalneeds);
});
