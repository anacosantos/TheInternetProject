const { browser, element } = require("protractor")

class DynamicControls {
    constructor () {
        this.title = element(by.xpath('//*[@id="content"]/div[1]/h4[1]'))
        this.removeButton = element(by.css('#checkbox-example button'))
        this.checkbox = element(by.id('checkbox'))
        this.checkboxInput = element(by.xpath('//*[@id="checkbox"]/input'))
        this.loading = element(by.id('loading'))
    }

    visit (){
        browser.get('dynamic_controls')
    }
}

module.exports = DynamicControls