const { browser } = require("protractor")

class Checkbox {
    constructor () {
        this.checkboxContent = element.all(by.id('content'))
        this.checkboxTitle = this.checkboxContent.all(by.css('.example h3'))
    }

    visit() {
        browser.get('checkboxes')
    }
}

module.exports = Checkbox
