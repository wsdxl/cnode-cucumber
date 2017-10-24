@topic
Feature: topic function test
    
   @topic1
    Scenario: 发帖功能
    用户登录成功后才能发帖
        Given 用户登录,用户名输入"abcduxiaolei",密码输入"abc4862556",成功登录
        When 导航到发帖界面
        Then 发布帖子，版块"分享",标题输入"大家晚上好，坚持学习",内容为"1234522222222222222"
        Then 点击提交后，发布成功
    
    

    