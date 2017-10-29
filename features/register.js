
let assert = require('assert');
let { defineSupportCode } = require('cucumber');
defineSupportCode(function ({ Given, When, Then }) {
    Given('导航到注册界面', function () {
        this.driver.get('http://192.168.75.107:3000/');
        this.driver.findElement({ css: ' ul > li:nth-child(5) > a' }).click();
    });
    When('注册界面输入注册信息', function () {
        this.driver.findElement({ id: 'loginname' }).sendKeys('abc123');
        this.driver.findElement({ id: 'pass' }).sendKeys('123');
        this.driver.findElement({ id: 're_pass' }).sendKeys('321');
        this.driver.findElement({ id: 'email' }).sendKeys('123@123.com');
    });
    Then('点击提交按钮，得到错误提示信息', async function () {
        this.driver.findElement({ css: '.span-primary' }).click();
        let arrtip = await this.driver.findElement({ css: 'strong' }).getText();
        return assert.deepEqual('两次密码输入不一致。', arrtip);
    });
    When('用户名输入{string},密码输入{string},重复密码输入{string},邮箱输入{string}', function (string, string2, string3, string4) {
       this.driver.findElement({ id: 'loginname' }).sendKeys(string);
        this.driver.findElement({ id: 'pass' }).sendKeys(string2);
        this.driver.findElement({ id: 're_pass' }).sendKeys(string3);
        this.driver.findElement({ id: 'email' }).sendKeys(string4); 
    });
    Then('点击提交按钮，得到{string}',async function (string) {
        this.driver.findElement({ css: '.span-primary' }).click();
        let arrtip = await this.driver.findElement({ css: 'strong' }).getText();
        return assert.deepEqual(string, arrtip);
    });


})

