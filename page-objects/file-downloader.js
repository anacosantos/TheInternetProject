const { browser } = require("protractor")

class FileDownloader {
    constructor () {
        this.title = element(by.css('.example h3'))
        this.downloadList = element.all(by.css('.example a'))
    }

    visit () {
        browser.get('download')
    }
}

module.exports = FileDownloader