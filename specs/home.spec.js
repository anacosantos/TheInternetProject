const helper = require('protractor-helper')
const Home = require('../page-objects/home')

describe('Given I\'m at the home page', () => {
    let homepage
  
    beforeAll(() => {
      homepage = new Home()
      homepage.visit()
    });
    describe('Find element of Welcome to the-internet', () => {
        it('get elements', () => {
          expect(homepage.heading.getText()).toBe('Welcome to the-internet')
        })
    })
})