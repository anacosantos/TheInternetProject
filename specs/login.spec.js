const Login = require('../page-objects/login')
const faker = require('faker')

describe('Given the login page', () => {
    let loginpage
  
    beforeAll(() => {
      loginpage = new Login()
      loginpage.visit()
    })
    describe('Testing loginpage,', () => {
      it('Check if userNameLabel and passwordLabel shows up', () => {
          
        expect(loginpage.userNameLabel.getText()).toBe('Username')
        expect(loginpage.passwordLabel.getText()).toBe('Password')

      })
      
    })
  })
  