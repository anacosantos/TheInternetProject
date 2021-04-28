const { browser, element } = require("protractor")

class Frame {
    constructor () {
        this.title = element(by.css('.example h3'))
        this.contentButton = element.all(by.css('.example a'))
        this.frameSet = element(by.xpath('/html/frameset/frame[1]'))
        this.frameBotton = element(by.xpath("//iframe[@src='/frame_bottom']"))
       // this.frameLeft = element(by.xpath("//iframe[@name='frame-left']"))
       //this.frameLeft = element(by.xpath("//iframe[@src='/frame_left']"))
       this.frameLeft = element(by.xpath('/html/frameset/frame[1]'))
        //this.frameSetMiddle = element(by.xpath("//iframe[@src='/frame_bottom']"))
       // this.frameBotton = element(by.xpath('/html/frameset/frame[2]'))
        this.frameSetMiddle = element(by.xpath('/html/frameset'))
       // this.frameLeft = element(by.tagName('frame-left'))

       this.my = this.frameSet;
    }
    
    visit () {
        browser.get('frames')
    }
}

module.exports = Frame