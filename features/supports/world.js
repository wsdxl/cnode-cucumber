require('chromedriver');
let {Builder}=require('selenium-webdriver');
let {defineSupportCode}=require('cucumber');
let customworld=function(){
    this.driver=new Builder().forBrowser('chrome').build();
}
defineSupportCode(function({setWorldConstructor}){
    setWorldConstructor(customworld)
})