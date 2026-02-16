import { test as base, expect, Page } from '@playwright/test';

type MyFixtures = {
    fixtureData1: any;
    workerFixture1: any;
}

export const test = base.extend<MyFixtures>({
    fixtureData1: async ({ }, use : any) => {
        const fixtureData1 = 'This is fixture data 1';
        console.log('Before part fixture data 1');
        await use(fixtureData1);
        console.log('After part fixture data 1');
    },

    workerFixture1  : [async ({ }, use : any) => {
        const workerFixture1 = 'This is worker fixture 1';
        console.log('Before part worker fixture 1');
        await use(workerFixture1);
        console.log('After part worker fixture 1');
    },{scope : 'worker'}]

});   
