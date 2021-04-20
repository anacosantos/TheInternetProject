const { browser } = require("protractor")

class FileUploader {
    constructor () {
        this.title = element(by.css('.example h3')) 
        this.chooseFile = element(by.id('file-upload'))
        this.uploadButton = element(by.css('#file-submit'))
    }
    
    visit (){
        browser.get('upload')
    }
}

module.exports = FileUploader