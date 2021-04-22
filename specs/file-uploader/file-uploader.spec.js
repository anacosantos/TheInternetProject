const dropFile = require("../me.jpg");
const FileUploader = require('../../page-objects/file-uploader')
var path = require('path');
const { browser, ExpectedConditions } = require('protractor');

describe('Give me File Uploader page', () => {
    const fileUploader = new FileUploader()

    beforeEach(() => {
        fileUploader.visit()
    })

    // it('Check if title File Uploader text exists', () => {
    //     expect(fileUploader.title.getText()).toBe('File Uploader')
    // })

    // it('Check if Choose file button exists and if the file was uploaded', () => {
    //     expect(fileUploader.chooseFile.getAttribute('name')).toBe('file')
         
    //     var fileUpload = '../me.jpg'
    //     var absolutePath = path.resolve(fileUpload)
    //     console.log(absolutePath)
    //     fileUploader.chooseFile.sendKeys(absolutePath)
    //     fileUploader.uploadButton.click()
    //     expect(fileUploader.fileUploadedMessage.getText()).toBe('File Uploaded!')
    // })

    it('Check if drag and drop a file into the area works', () => {
        dropFile(fileUploader.dragAndDropId, '../me.jpg');
        browser.sleep(5000)
        // wait for the droped image to be displayed in the drop area
        browser.wait(ExpectedConditions.presenceOf(fileUploader.dragAndDropId))
        fileUploader.uploadButton.click()
        expect(fileUploader.dragAndDropId.getText()).toBe('File Uploaded!')
    })
})

