const { browser } = require("protractor")

class Frame {
    constructor () {
        this.title = element(by.css('.example h3'))
        this.contentButton = element.all(by.css('.example a'))
        this.frameSet = element(by.xpath('/html/frameset/frame[1]'))
        this.frameBotton = element(by.xpath("//iframe[@src='/frame_bottom']"))
    }

    visit () {
        browser.get('frames')
    }
}

module.exports = Frame