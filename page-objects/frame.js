const { browser, element } = require("protractor")

class Frame {
    constructor () {
        this.title = element(by.css('.example h3'))
        this.contentButton = element.all(by.css('.example a'))
        this.frameSet = element(by.xpath('/html/frameset/frame[1]')) 
        this.frameBottom = element(by.xpath('/html/frameset/frame[2]'))
       // this.left = element(by.xpath('/html/frameset/frame[1]'))
        
    }
    
    visit () {
        browser.get('frames')
    }
}

module.exports = Frame