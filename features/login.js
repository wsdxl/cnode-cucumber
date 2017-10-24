require('chromedriver');
let { Builder } = require('selenium-webdriver');
// let driver = new Builder().forBrowser('chrome').build();
let assert = require('assert');
let { defineSupportCode } = require('cucumber');
defineSupportCode(function ({ Given, When, Then }) {
    Given('导航到登录页面', function () {
        driver.get('http://118.31.19.120:3000/');
        driver.findElement({ css: 'ul > li:nth-child(6) > a' }).click();
    });
    When('输入登录信息', function () {
        driver.findElement({ id: 'name' }).sendKeys('abcduxiaolei');
        driver.findElement({ id: 'pass' }).sendKeys('abc4862556');
    });
    Then('点击登录按钮，得到提示信息', async function () {
        driver.findElement({ css: '.span-primary' }).click();
        let suctip = await driver.findElement({ css: 'div > span.user_name > a' }).getText();
        return assert.deepEqual('abcduxiaolei', suctip);
    });

    When('用户名输入{string},密码输入{string}', function (string, string2) {
        driver.findElement({ id: 'name' }).sendKeys(string);
        driver.findElement({ id: 'pass' }).sendKeys(string2);
    });
    Then('点击登录按钮，得到{string}',async function (string) {
        driver.findElement({ css: '.span-primary' }).click();
        let arrtip = await driver.findElement({ css: 'strong' }).getText();
        return assert.deepEqual(string, arrtip);
        
    });
})

