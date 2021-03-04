const { browser } = require('protractor')

class AddDelElement {
  constructor () {
    this.addElementButton = element(by.xpath('//*[@id="content"]/div/button'))
    this.delElementButton = element(by.xpath("//button[@class='added-manually']"))
    // accessing all elements within the html div
    this.divElementsAdded = element(by.id('elements'))
    this.allDelButtons = this.divElementsAdded.all(by.css('.added-manually'))
  }

  visit () {
    browser.get('add_remove_elements/')
  }
}
module.exports = AddDelElement
