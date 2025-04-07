import { test, expect } from '@playwright/test'

// Hooks to be executed before and after tests
test.beforeEach(async () => {
    console.log("I am beforeEach Hook")
})

test.afterEach(async () => {
    console.log("I am afterEach Hook")
})

test.beforeAll(async () => {
    console.log("I am beforeAll Hook")
})

test.afterAll(async () => {
    console.log("I am afterAll Hook")
})

// Grouping all tests into a single suite
test.describe('Group all tests in one suite', () => {

    // Test Group 1
    test('Test1', async ({ page }) => {
        console.log("I am test1")
    })

    test('Test2', async ({ page }) => {
        console.log("I am test2")
    })

    // Test Group 2 (Skipping the group as per original code)
    test.skip('Test3', async ({ page }) => {
        console.log("I am test3")
    })

    test.skip('Test4', async ({ page }) => {
        console.log("I am test4")
    })
})
