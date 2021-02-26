const { browser } = require('protractor')
const { waitForElementVisibility } = require('protractor-helper')
const Login = require('../page-objects/login')
const provideConfig = require('../utils/configCreator')

describe('Given the login page', () => {
  let loginPage
  const URL_LOGIN = provideConfig().baseUrl + 'login'
  const wrongUsername = 'carol'
  const wrongPassword = '123'
  const correctUsername = 'tomsmith'
  const corretPassword = 'SuperSecretPassword!'

  beforeAll(() => {
    loginPage = new Login()
    loginPage.visit()
  })

  describe('Testing loginpage,', () => {
    beforeEach(() => {
      // first of all
      loginPage.visit()
    })

    it('Check if userNameLabel and passwordLabel shows up', () => {
      waitForElementVisibility(loginPage.userNameLabel)
      // get Element value getText() and check it
      expect(loginPage.userNameLabel.getText()).toBe('Username')
      // get Element value and check it
      expect(loginPage.passwordLabel.getText()).toBe('Password')
    })

    it('Check if corret username and password change the page and shows up success message - Positive', () => {
      // insert username on text field .sendKeys('String')
      loginPage.userNameField.sendKeys(correctUsername)
      // insert password on text field .sendKeys('String')
      loginPage.passwordField.sendKeys(corretPassword)
      // click on button
      loginPage.loginButton.click()
      // check if url is the same using this protractor function browser.getCurrentUrl()
      expect(browser.getCurrentUrl()).toBe(provideConfig().baseUrl + 'secure')
      // check if shows up a sucess message after login
      expect(loginPage.successMessage.isPresent()).toBe(true)
    })

    it('Check wrong username and password shows up error message - Negative', () => {
      loginPage.userNameField.sendKeys(wrongUsername)
      loginPage.passwordField.sendKeys(wrongPassword)
      loginPage.loginButton.click()
      // check if show up error message when type both wrong username and password
      expect(loginPage.errorMessage.isPresent()).toBe(true)
      // check if continue in login page
      expect(browser.getCurrentUrl()).toBe(URL_LOGIN)
    })

    it('Check if valid username and invalid password shows up error massage - Negative', () => {
      loginPage.userNameField.sendKeys(correctUsername)
      loginPage.passwordField.sendKeys(wrongPassword)
      loginPage.loginButton.click()
      // check if shows up error message when type correct username and wrong password
      expect(loginPage.errorMessage.isPresent()).toBe(true)
      // check if continue in login page
      expect(browser.getCurrentUrl()).toBe(URL_LOGIN)
    })

    it('Check if blank fields shows up error message - Negative', () => {
      loginPage.userNameField.sendKeys('')
      loginPage.passwordField.sendKeys('')
      loginPage.loginButton.click()
      // check if shows up error message when filds are blanck
      expect(loginPage.errorMessage.isPresent()).toBe(true)
      expect(browser.getCurrentUrl()).toBe(URL_LOGIN)
    })

    it('Check if the button logout works on secure page - Positive', () => {
      loginPage.userNameField.sendKeys(correctUsername)
      loginPage.passwordField.sendKeys(corretPassword)
      loginPage.loginButton.click()
      // check if after login the browser is going to secure page
      expect(browser.getCurrentUrl()).toBe(provideConfig().baseUrl + 'secure')
      // check if shows up a sucess message after login
      expect(loginPage.successMessage.isPresent()).toBe(true)
      // click on logout button
      loginPage.logoutButton.click()
      // check if the browser is going to login page when do logout
      expect(browser.getCurrentUrl()).toBe(URL_LOGIN)
      // check if shows up logout message
      expect(loginPage.successMessage.getText()).toBe('You logged out of the secure area!\n×')
    })

    it('Check if button login works with enter button', () => {
      loginPage.userNameField.sendKeys(correctUsername)
      // click on enter button if the browser go to secure page
      loginPage.passwordField.sendKeys(corretPassword, protractor.Key.ENTER)
      // check if the browser is going to secure page
      expect(browser.getCurrentUrl()).toBe(provideConfig().baseUrl + 'secure')
      //
      expect(loginPage.successMessage.isPresent()).toBe(true)
    })

    it('Check color flag with wrong login', () => {
      loginPage.userNameField.sendKeys(wrongUsername)
      loginPage.passwordField.sendKeys(wrongPassword)
      loginPage.loginButton.click()
      // check if error flag is red color
      expect(loginPage.errorMessage.getCssValue('background-color')).toEqual('rgba(198, 15, 19, 1)')
    })

    it('Check color flag with correct login', () => {
      loginPage.userNameField.sendKeys(correctUsername)
      loginPage.passwordField.sendKeys(corretPassword)
      loginPage.loginButton.click()
      // check if success flag is green
      expect(loginPage.successMessage.getCssValue('background-color')).toEqual('rgba(93, 164, 35, 1)')
    })

    // I used "x" in it to temporarily disable it because the browser is not acting correctly in this test
    xit('Check if logout and press browser back button return to login page', () => {
      loginPage.userNameField.sendKeys(correctUsername)
      loginPage.passwordField.sendKeys(corretPassword)
      loginPage.loginButton.click()
      expect(browser.getCurrentUrl()).toBe(provideConfig().baseUrl + 'secure')
      expect(loginPage.successMessage.isPresent()).toBe(true)
      loginPage.logoutButton.click()
      expect(browser.getCurrentUrl()).toBe(URL_LOGIN)
      // click on back button on browser
      browser.navigate().back()
      expect(browser.getCurrentUrl()).toBe(URL_LOGIN)
    })
  })
})
