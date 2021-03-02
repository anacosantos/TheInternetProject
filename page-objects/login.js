
const { element } = require('protractor')
class Login {
  constructor () {
    this.usernameLabel = element(by.xpath("//label[.='Username']"))
    this.passwordLabel = element(by.xpath("//label[.='Password']"))
    this.usernameField = element(by.xpath("//input[@id='username']"))
    this.passwordField = element(by.xpath("//input[@id='password']"))
    this.loginButton = element(by.css('.fa'))
    this.successMessage = element(by.css('.success'))
    this.errorMessage = element(by.css('.error'))
    this.logoutButton = element(by.xpath('//*[@id="content"]/div/a'))
    this.closeButton = element(by.css('.close'))
    this.greenMessage = element(by.xpath('//*[@id="flash"]/text()'))
  }

  visit () {
    browser.get('/login')
  }
}
module.exports = Login
