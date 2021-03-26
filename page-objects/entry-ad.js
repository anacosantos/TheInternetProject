const { browser } = require("protractor")

class EntryAd {
    constructor () {
        this.title = element(by.css('#content h3'))
    }

    visit () {
        browser.get('entry_ad')
    }
}

module.exports = EntryAd 