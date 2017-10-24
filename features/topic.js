require('chromedriver');
let { Builder } = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
let assert = require('assert');
let { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ Given, When, Then }) {
    Given('用户登录,用户名输入{string},密码输入{string},成功登录', function (string, string2) {
        driver.get('http://118.31.19.120:3000/');
        driver.findElement({ css: 'ul > li:nth-child(6) > a' }).click();
        driver.findElement({ id: 'name' }).sendKeys(string);
        driver.findElement({ id: 'pass' }).sendKeys(string2);
        return driver.findElement({ css: ".span-primary" }).click();
    });
    When('导航到发帖界面', function () {
        return driver.findElement({ css: '.span-success' }).click();

    });
    Then('发布帖子，版块{string},标题输入{string},内容为{string}', async function (string, string2, string3) {
        let tab = string;
        switch (tab) {
            case "请选择":
                driver.findElement({ css: '#tab-value>option:nth-child(1)' }).click();
                break;
            case "分享":
                driver.findElement({ css: '#tab-value>option:nth-child(2)' }).click();
                break;
            case "问答":
                driver.findElement({ css: '#tab-value>option:nth-child(3)' }).click();
                break;
            case "招聘":
                driver.findElement({ css: '#tab-value>option:nth-child(4)' }).click();
                break;

            default:
                break;
        }
        driver.findElement({ id: 'title' }).sendKeys(string2);
        let text = await driver.findElement({ css: '.CodeMirror-scroll' });
        text.click();
        return driver.actions().mouseMove(text).sendKeys(string3).perform();

    });
    Then('点击提交后，发布成功', function () {
        return driver.findElement({ css: '.submit_btn' }).click();
    });

})

