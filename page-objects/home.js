const { browser } = require('protractor')
const provideConfig = require('../utils/configCreator')

class Home {
  constructor () {
    this.heading = element(by.xpath("//h1[@class='heading']"))
  }

  visit () {
    browser.get(provideConfig().baseUrl)
  }
}

module.exports = Home
