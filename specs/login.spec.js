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
      loginPage.visit()
    })

    it('Check if userNameLabel and passwordLabel shows up', () => {
      waitForElementVisibility(loginPage.userNameLabel)
      expect(loginPage.userNameLabel.getText()).toBe('Username')
      expect(loginPage.passwordLabel.getText()).toBe('Password')
    })

    it('Check if corret username and password change the page and shows up success message - Positive' , () => {
      loginPage.userNameField.sendKeys(correctUsername)
      loginPage.passwordField.sendKeys(corretPassword )
      loginPage.loginButton.click()
      expect(browser.getCurrentUrl()).toBe(provideConfig().baseUrl+ 'secure');
      expect(loginPage.successMessage.isPresent()).toBe(true);
    })

    it('Check wrong username and password shows up error message - Negative', () => {
      loginPage.userNameField.sendKeys(wrongUsername)
      loginPage.passwordField.sendKeys(wrongPassword)
      loginPage.loginButton.click()
      expect(loginPage.errorMessage.isPresent()).toBe(true);
      expect(browser.getCurrentUrl()).toBe(URL_LOGIN)
    })

    it('Check if valid username and invalid password shows up error massage - Negative', () => {
      loginPage.userNameField.sendKeys(correctUsername)
      loginPage.passwordField.sendKeys(wrongPassword)
      loginPage.loginButton.click()
      expect(loginPage.errorMessage.isPresent()).toBe(true);
      expect(browser.getCurrentUrl()).toBe(URL_LOGIN)
    }) 

    it('Check if blank fields shows up error message - Negative', () => {
      loginPage.userNameField.sendKeys('')
      loginPage.passwordField.sendKeys('')
      loginPage.loginButton.click()
      expect(loginPage.errorMessage.isPresent()).toBe(true);
      expect(browser.getCurrentUrl()).toBe(URL_LOGIN)
    })

    it('Check if the button logout works on secure page - Positive', () => {
      loginPage.userNameField.sendKeys(correctUsername)
      loginPage.passwordField.sendKeys(corretPassword)
      loginPage.loginButton.click()
      expect(browser.getCurrentUrl()).toBe(provideConfig().baseUrl+ 'secure');
      expect(loginPage.successMessage.isPresent()).toBe(true);
      loginPage.logoutButton.click()
      expect(browser.getCurrentUrl()).toBe(URL_LOGIN)
      expect(loginPage.successMessage.getText()).toBe("You logged out of the secure area!\n×")
    })

    it('Check if button login works with enter button', () => {
      loginPage.userNameField.sendKeys(correctUsername)
      loginPage.passwordField.sendKeys(corretPassword, protractor.Key.ENTER )
      expect(browser.getCurrentUrl()).toBe(provideConfig().baseUrl+ 'secure');
      expect(loginPage.successMessage.isPresent()).toBe(true);
    })

    it('Check color flag with wrong login', () => {
      loginPage.userNameField.sendKeys(wrongUsername)
      loginPage.passwordField.sendKeys(wrongPassword)
      loginPage.loginButton.click()
      expect(loginPage.errorMessage.getCssValue('background-color')).toEqual("rgba(198, 15, 19, 1)")
    })

    it('Check color flag with correct login', () => {
      loginPage.userNameField.sendKeys(correctUsername)
      loginPage.passwordField.sendKeys(corretPassword)
      loginPage.loginButton.click()
      expect(loginPage.successMessage.getCssValue('background-color')).toEqual("rgba(93, 164, 35, 1)")
    })

    it('Check if logout and press browser back button return to login page', () => {
      loginPage.userNameField.sendKeys(correctUsername)
      loginPage.passwordField.sendKeys(corretPassword)
      loginPage.loginButton.click()
      expect(browser.getCurrentUrl()).toBe(provideConfig().baseUrl+ 'secure');
      expect(loginPage.successMessage.isPresent()).toBe(true);
      loginPage.logoutButton.click()
      expect(browser.getCurrentUrl()).toBe(URL_LOGIN)
      //expect(browser.navigate().back()).toBe(URL_LOGIN)
    })
  }) 
})




            
            