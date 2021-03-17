const { browser } = require('protractor')

class BrokenImages {
  constructor () {
    this.brokenImageContent = element.all(by.id('content'))
    this.brokenImageClass = this.brokenImageContent.all(by.css('.example h3'))
    this.images = this.brokenImageContent.all(by.css('.example img'))
  }

  visit () {
    browser.get('broken_images')
  }
}

module.exports = BrokenImages
