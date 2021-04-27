const { browser } = require('protractor')

class FloatingMenu {
  constructor () {
    this.title = element(by.css('.example h3'))
    this.menuID = element(by.id('menu'))
    this.footer = element(by.id('page-footer'))
  }

  visit () {
    browser.get('floating_menu')
  }
}

module.exports = FloatingMenu
