const { browser } = require("protractor")

class FileUploader {
    constructor () {
        this.title = element(by.css('.example h3')) 
        this.chooseFile = element(by.id('file-upload'))
        this.uploadButton = element(by.css('#file-submit'))
        this.fileUploadedMessage = element(by.css('.example h3'))
        this.dragAndDropId = element(by.id('drag-drop-upload'))
        //this.sucessMark = element(by.css('.dz-.dz-preview dz-processing dz-image-preview dz-success dz-complete-mark'))
        this.sucessMark = element(by.xpath("//div[@class='dz-preview dz-processing dz-image-preview dz-success dz-complete']//span[.='✔']"))
    }
    
    visit (){
        browser.get('upload')
    }
}

module.exports = FileUploader