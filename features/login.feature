@login
Feature: login function test

@login1
Scenario: 登录功能
    Given 导航到登录页面
    When 输入登录信息
    Then 点击登录按钮，得到提示信息

@login2
Scenario Outline: 不同登录场景
    Given 导航到登录页面
    When 用户名输入"<username>",密码输入"<pass>"
    Then 点击登录按钮，得到"<message>"
    Examples:
    |username|pass|message|
    |        |123 |信息不完整。|
    |aaabbb  |    |信息不完整。|
    |aaabbb  |123 |用户名或密码错误|




    

    