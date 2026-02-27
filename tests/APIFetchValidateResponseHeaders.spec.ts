import { test, request, expect } from "@playwright/test";
import { log } from "console";


test("API Fetch and Validate Response Headers", async ({ request }) => {
    const response = await request.get('/booking/1');
    const headersValues = response.headers();
    console.log(headersValues);
    expect(headersValues).toHaveProperty('content-type');
    expect(headersValues).toHaveProperty('server');
    expect(headersValues['server']).toBe('Heroku');
    expect(headersValues).toHaveProperty("etag");
    expect(headersValues).toHaveProperty("date");
    console.log("******************************************************************************************");

    const headerArrayValues = response.headersArray();
    console.log(headerArrayValues);
    expect(headerArrayValues.length).toBeGreaterThan(7);
    const contentTypeHeader = headerArrayValues.find(header => header.name.toLowerCase() === 'content-type');
    expect(contentTypeHeader).toBeDefined();
    const serverHeader = headerArrayValues.find(header => header.name.toLowerCase() === 'server');
    expect(serverHeader).toBeDefined();
    expect(serverHeader!.value).toBe('Heroku');
    console.log("******************************************************************************************");
    headerArrayValues.forEach(header => {
        console.log(`Header Name: ${header.name}`);
        console.log(`Header Value: ${header.value}`);
    });

});

