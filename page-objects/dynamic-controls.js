const { browser, element } = require('protractor')

class DynamicControls {
  constructor () {
    this.title = element.all(by.css('.example h4')).first()
    this.removeButton = element(by.css('#checkbox-example button'))
    this.checkbox = element(by.id('checkbox'))
    this.checkboxInput = element(by.css('#checkbox input'))
    this.loading = element(by.css('#loading'))
    this.gone = element(by.id('message'))
    this.addButton = element(by.css('#checkbox-example button'))
    this.back = element(by.id('message'))
    this.styleLoading = element.all(by.id('loading')).first()
    this.allLoading = element.all(by.css('#loading'))
    this.enableButton = element(by.css('#input-example button'))
    this.field = element(by.css('#input-example input'))
    this.enabled = element(by.css('#input-example p'))
    this.inputField = element(by.css('#input-example input'))
    this.disableButton = element(by.css('#input-example button'))
  }

  visit () {
    browser.get('dynamic_controls')
  }
}

module.exports = DynamicControls
