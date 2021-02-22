const { browser } = require('protractor')
// const provideConfig = require('../utils/configCreator')

class Home {
  constructor () {
    this.heading = element(by.xpath("//h1[@class='heading']"))
  }

  visit () {
    // browser.get(provideConfig().baseUrl)
    browser.get('')
  }
}

module.exports = Home
