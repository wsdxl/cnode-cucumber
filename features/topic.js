
let assert = require('assert');
let { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ Given, When, Then }) {
    Given('用户登录,用户名输入{string},密码输入{string},成功登录', function (string, string2) {
        this.driver.get('http://192.168.75.107:3000/');
        this.driver.findElement({ css: 'ul > li:nth-child(6) > a' }).click();
        this.driver.findElement({ id: 'name' }).sendKeys(string);
        this.driver.findElement({ id: 'pass' }).sendKeys(string2);
        return this.driver.findElement({ css: ".span-primary" }).click();
    });
    When('导航到发帖界面', function () {
        return this.driver.findElement({ css: '#create_topic_btn > span' }).click();

    });
    Then('发布帖子，版块{string},标题输入{string},内容为{string}', async function (string, string2, string3) {
        let tab = string;
        switch (tab) {
            case "请选择":
                this.driver.findElement({ css: '#tab-value>option:nth-child(1)' }).click();
                break;
            case "分享":
                this.driver.findElement({ css: '#tab-value>option:nth-child(2)' }).click();
                break;
            case "问答":
                this.driver.findElement({ css: '#tab-value>option:nth-child(3)' }).click();
                break;
            case "招聘":
                this.driver.findElement({ css: '#tab-value>option:nth-child(4)' }).click();
                break;

            default:
                break;
        }
        this.driver.findElement({ id: 'title' }).sendKeys(string2);
        let text = await this.driver.findElement({ css: '.CodeMirror-scroll' });
        text.click();
        return this.driver.actions().mouseMove(text).sendKeys(string3).perform();

    });
    Then('点击提交后，发布成功', function () {
        return this.driver.findElement({ css: '.submit_btn' }).click();
    });

    When('点击帖子导航到回帖页面', function () {
        this.driver.findElement({css:'#topic_list > div:nth-child(1) > div > a'}).click();

    });
    Then('回复帖子,内容输入,{string}',async function (string) {
        let text=await this.driver.findElement({css:'.CodeMirror-scroll'});
        text.click();
        return this.driver.actions().mouseMove(text).sendKeys(string).perform();

    });
    Then('点击回复按钮，回帖成功', function () {
        return this.driver.findElement({css:'.submit_btn'}).click();
    });


})

