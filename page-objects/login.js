const faker = require('faker')
const { element } = require('protractor')
class Login {
  constructor () {
    this.userNameLabel = element(by.xpath("//label[.='Username']"))
    this.passwordLabel = element(by.xpath("//label[.='Password']"))
    this.userNameField = element(by.xpath("//input[@id='username']"))
    this.passwordField = element(by.xpath("//input[@id='password']"))
    this.logIn = element(by.css(".fa"))
    //his.browserSecure = browser.get('/secure')
   // this.successMessage = element(by.class('.flash sucess'))
  }

  visit () {
    browser.get('/login')
  }
}
module.exports = Login

