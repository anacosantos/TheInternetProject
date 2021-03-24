const { browser, element } = require('protractor')

class Dropdown {
  constructor () {
    this.title = element(by.css('.example h3'))
    this.selector = element(by.id('dropdown'))
    this.selector2 = this.selector.all(by.css('#dropdown option'))
    this.option1 = element(by.cssContainingText('option', 'Option 1'))
    this.option2 = element(by.cssContainingText('option', 'Option 2'))
  }

  visit () {
    browser.get('dropdown')
  }
}

module.exports = Dropdown
