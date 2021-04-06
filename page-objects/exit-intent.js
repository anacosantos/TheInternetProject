const { browser } = require("protractor")

class ExitIntent {
    constructor () {
        this.title = element(by.css('.example h3'))
        this.modalWindow = element(by.css('.modal'))
    }

    visit () {
        browser.get('exit_intent')
    }
}

module.exports = ExitIntent