const { browser } = require('protractor')

class EntryAd {
  constructor () {
    this.title = element(by.css('.example h3'))
    this.modalWindow = element(by.css('#modal'))
    this.closeButton = element(by.xpath("//p[.='Close']"))
    this.clickHereButton = element(by.css('#restart-ad'))
  }

  visit () {
    browser.get('entry_ad')
  }
}

module.exports = EntryAd
