const { browser } = require("protractor")

class AddDelElement {
    constructor () {
        this.addElementButton = element(by.xpath('//*[@id="content"]/div/button'))
        this.delElementButton = element(by.xpath("//button[@class='added-manually']"))
    }
    visit() {
        browser.get('add_remove_elements/')
    }

}
module.exports = AddDelElement 