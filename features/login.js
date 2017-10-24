
let assert = require('assert');
let { defineSupportCode } = require('cucumber');
defineSupportCode(function ({ Given, When, Then }) {
    Given('导航到登录页面', function () {
        this.driver.get('http://118.31.19.120:3000/');
        this.driver.findElement({ css: 'ul > li:nth-child(6) > a' }).click();
    });
    When('输入登录信息', function () {
        this.driver.findElement({ id: 'name' }).sendKeys('abcduxiaolei');
        this.driver.findElement({ id: 'pass' }).sendKeys('abc4862556');
    });
    Then('点击登录按钮，得到提示信息', async function () {
        this.driver.findElement({ css: '.span-primary' }).click();
        let suctip = await this.driver.findElement({ css: 'div > span.user_name > a' }).getText();
        return assert.deepEqual('abcduxiaolei', suctip);
    });

    When('用户名输入{string},密码输入{string}', function (string, string2) {
        this.driver.findElement({ id: 'name' }).sendKeys(string);
        this.driver.findElement({ id: 'pass' }).sendKeys(string2);
    });
    Then('点击登录按钮，得到{string}',async function (string) {
        this.driver.findElement({ css: '.span-primary' }).click();
        let arrtip = await this.driver.findElement({ css: 'strong' }).getText();
        return assert.deepEqual(string, arrtip);
        
    });
})

