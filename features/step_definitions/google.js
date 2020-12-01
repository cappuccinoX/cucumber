// const { Given, When, Then, AfterAll, After } = require('@cucumber/cucumber');
// const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
// const { expect } = require('chai');

// require("chromedriver");
// const capabilities = Capabilities.chrome();
// capabilities.set('chromeOptions', { "w3c": false });
// const driver = new Builder().withCapabilities(capabilities).build();

// Given('I am on the Google search page', async function () {
//     await driver.get('https://www.google.com');
// });

// When('I search for {string}', async function (searchTerm) {
//     const element = await driver.findElement(By.name('q'));
//     element.sendKeys(searchTerm, Key.RETURN);
//     element.submit();
// });

// Then('the page title should start with {string}', {timeout: 60 * 1000}, async function (searchTerm) {
//     const title = await driver.getTitle();
//     const isTitleStartWithCheese = title.toLowerCase().lastIndexOf(`${searchTerm}`, 0) === 0;
//     expect(isTitleStartWithCheese).to.equal(true);
// });

// AfterAll(async function (scenario) {
//     await driver.quit();
// });

// After(function (scenario) {
//     if (scenario.result.status === Status.FAILED) {
//         var world = this;
//         return webDriver.takeScreenshot().then(function(screenShot, error) {
//             if (!error) {
//                 world.attach(screenShot, "image/png");
//             }
//         });
//     }
// });