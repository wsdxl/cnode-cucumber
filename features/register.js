require('chromedriver');
let { Builder } = require('selenium-webdriver');
// let driver = new Builder().forBrowser('chrome').build();
let assert = require('assert');
let { defineSupportCode } = require('cucumber');
defineSupportCode(function ({ Given, When, Then }) {
    Given('导航到注册界面', function () {
        driver.get('http://118.31.19.120:3000/');
        driver.findElement({ css: ' ul > li:nth-child(5) > a' }).click();
    });
    When('注册界面输入注册信息', function () {
        driver.findElement({ id: 'loginname' }).sendKeys('abc123');
        driver.findElement({ id: 'pass' }).sendKeys('123');
        driver.findElement({ id: 're_pass' }).sendKeys('321');
        driver.findElement({ id: 'email' }).sendKeys('123@123.com');
    });
    Then('点击提交按钮，得到错误提示信息', async function () {
        driver.findElement({ css: '.span-primary' }).click();
        let arrtip = await driver.findElement({ css: 'strong' }).getText();
        return assert.deepEqual('两次密码输入不一致。', arrtip);
    });
    When('用户名输入{string},密码输入{string},重复密码输入{string},邮箱输入{string}', function (string, string2, string3, string4) {
       driver.findElement({ id: 'loginname' }).sendKeys(string);
        driver.findElement({ id: 'pass' }).sendKeys(string2);
        driver.findElement({ id: 're_pass' }).sendKeys(string3);
        driver.findElement({ id: 'email' }).sendKeys(string4); 
    });
    Then('点击提交按钮，得到{string}',async function (string) {
        driver.findElement({ css: '.span-primary' }).click();
        let arrtip = await driver.findElement({ css: 'strong' }).getText();
        return assert.deepEqual(string, arrtip);
    });


})

