const { browser } = require('protractor')

class Checkbox {
  constructor () {
    this.checkboxContent = element.all(by.id('content'))
    this.checkboxTitle = this.checkboxContent.all(by.css('.example h3'))
    this.checkboxesId = element.all(by.id('checkboxes'))
    this.checkbox1 = this.checkboxesId.all(by.xpath('//*[@id="checkboxes"]/input[1]'))
    this.checkbox2 = this.checkboxesId.all(by.xpath('//*[@id="checkboxes"]/input[2]'))
    this.checkboxesInputs = element.all(by.css('#checkboxes input'))
  }

  visit () {
    browser.get('checkboxes')
  }
}

module.exports = Checkbox
