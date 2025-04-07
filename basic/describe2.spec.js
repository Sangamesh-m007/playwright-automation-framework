import { test, expect } from '@playwright/test';

// Hooks
test.beforeEach(async () => {
    console.log("I am beforeEach Hook");
});

test.afterEach(async () => {
    console.log("I am afterEach Hook");
});

test.beforeAll(async () => {
    console.log("I am beforeAll Hook");
});

test.afterAll(async () => {
    console.log("I am afterAll Hook");
});

// Grouping all test cases into a single suite
test.describe('Main Test Suite', () => {
    
    test.describe('grouping1', () => {
        test('test1', async ({ page }) => {
            console.log("I am test1");
        });

        test('test2', async ({ page }) => {
            console.log("I am test2");
        });
    });

    test.describe('grouping2', () => {
        test('test3', async ({ page }) => {
            console.log("I am test3");
        });

        test('test4', async ({ page }) => {
            console.log("I am test4");
        });
    });

});
