const { browser } = require('protractor')
const { element } = require('protractor')

class BasicAuth {
  constructor () {
    this.content = element.all(by.id('content'))
    this.successMessage = this.content.all(by.css('.example p'))
  }

  visit () {
    browser.get('basic_auth')
  }
}

module.exports = BasicAuth
