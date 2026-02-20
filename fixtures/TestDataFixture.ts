import { test as baseTest } from '@playwright/test';

type DataForReadData = {
    logindata: any;
    testdata: any
}

export const test = baseTest.extend<DataForReadData>({

    logindata: { username: "Admin", password: "admin123" },
    testdata: { FName: "John", LName: "Doe", MName: "Smith", Email: "john.doe@example.com" }
        
});

export { expect } from '@playwright/test';