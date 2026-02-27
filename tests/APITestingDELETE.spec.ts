import { test, request, expect } from "@playwright/test";


test("API Testing DELETE 1", async ({ request }) => {
    const response = await request.delete('/booking/2790', {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },

    });

    const responseDel = await response.text;
    console.log(responseDel);
    const status = response.status();
    expect(status === 201 || status === 405).toBeTruthy();
    expect(response.statusText()).toMatch(/Created|Method Not Allowed/);

});

