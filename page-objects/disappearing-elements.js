const { browser } = require('protractor')

class DisappearingElements {
  constructor () {
    this.content = element.all(by.id('content'))
    this.title = this.content.all(by.css('.example h3'))
    this.AllMenu = this.content.all(by.css('.example ul li'))
    this.home = element(by.xpath("//a[.='Home']"))
    this.about = element(by.xpath("//a[.='About']"))
    this.contactUs = element(by.xpath("//a[.='Contact Us']"))
    this.portfolio = element(by.xpath("//a[.='Portfolio']"))
    this.homePageButton = element(by.xpath("//a[.='Disappearing Elements']"))
  }

  visit () {
    browser.get('disappearing_elements')
  }
}

module.exports = DisappearingElements
