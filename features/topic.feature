@topic
Feature: topic function test
    发帖功能测试
    负责人：abcduxiaolei
    时间：2017-10-22

   Background:用户登录
   Given 用户登录,用户名输入"abcduxiaolei",密码输入"abc4862556",成功登录

    Scenario: 发帖功能
    用户登录成功后才能发帖
        
        When 导航到发帖界面
        Then 发布帖子，版块"分享",标题输入"大家晚上好，坚持学习",内容为"1234522222222222222"
        Then 点击提交后，发布成功
    
    @topic2
    Scenario: 回帖功能
    用户登录成功后才能回帖
        When 点击帖子导航到回帖页面
        Then 回复帖子,内容输入,"你是最棒的，你是最棒的，你是最棒的！"
        Then 点击回复按钮，回帖成功
    
    
    
    

    