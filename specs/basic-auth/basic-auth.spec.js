
const BasicAuth = require('../../page-objects/basic-auth')

describe('Given the authentication page', () => {
  let autheticationPage
  const URLBASIC = 'https://admin:admin@the-internet.herokuapp.com/basic_auth'

  beforeAll(() => {
    autheticationPage = new BasicAuth()
  })

  it('Shows up the authentication', () => {
    // The Solution to Authentication Pop Up:driver.get(protocol://Usename:Password@URL Address);
    browser.driver.get(URLBASIC)
    expect(autheticationPage.successMessage.first().getText()).toBe('Congratulations! You must have the proper credentials.')
  })
})
