Feature: register function test
    Scenario: 两次输入不同的密码，提示错误信息
    Given 导航到注册界面
    When 注册界面输入注册信息
    Then 点击提交按钮，得到错误提示信息

@register
    Scenario Outline: 注册功能的不同场景
        Given 导航到注册界面
        When 用户名输入"<username>",密码输入"<pass>",重复密码输入"<re_pass>",邮箱输入"<email>"
        Then 点击提交按钮，得到"<message>"
        Examples:
        |username|pass|re_pass|email      |message    |
        |        |123 |123    |123@123.com|信息不完整。|
        |abc123  |123 |321    |321@321.com|两次密码输入不一致。|
        |abcdll  |111 |111    |123.com    |邮箱不合法。|
        |abcduxiaolei|abc4862556|abc4862556|506615839@qq.com|用户名或邮箱已被使用。|




    
    
    

    
