
const FileUploader = require('../../page-objects/file-uploader');
var path = require('path');
const { browser, ExpectedConditions } = require('protractor');
//var filePath = require('/Users/anacarolinaoliveiradossantos/Documents/TheInternetProject/uploads/me.jpg');
//var filePath = require('../../uploads/me.jpg');
var filePath = path.resolve(__dirname, '/Users/anacarolinaoliveiradossantos/Documents/TheInternetProject/uploads/me.jpg')
const fs = require('fs')
const dnd = require('html-dnd').code
const dropFile = require("../../utils/drop-file");


// const dropFile = function (dropArea, filePath)  {
//     // get the full path
//     filePath = path.resolve(filePath);
//     // console.log(filePath)
  
//      // assert the file is present
//     fs.accessSync(filePath, fs.F_OK);
  
//     // resolve the drop area

//     return fileUploader.dragAndDropId.getWebElement().then(function (element) {
//         browser.executeScript(fileUploader.dragAndDropId, element).then(function (input) {
  
              
//                 input.sendKeys(filePath);
//               });
//     // return dropArea.getWebElement().then(function (element) {
//     //     browser.wait(ExpectedConditions.presenceOf(element))
//     //     fileUploader.uploadButton.click()
//     //     expect(fileUploader.dragAndDropId.getText()).toBe('File Uploade!')
//     //   // bind a new input to the drop area
//     // //   browser.executeScript(JS_BIND_INPUT, element).then(function (input) {
  
//     //     // upload the file to the new input
//     //     input.sendKeys(filePath);
//       //});
//     });
// };

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
        dropFile(fileUploader.dragAndDropId, filePath)
        //browser.get('https://the-internet.herokuapp.com/upload');
        browser.wait(ExpectedConditions.presenceOf(fileUploader.sucessMark))
        //browser.sleep(8000)
        fileUploader.uploadButton.click()
    browser.sleep(8000)
    //    expect(fileUploader.fileUploadedMessage.getText()).toBe('File Uploade!')
    // console.log(fileUploader.dragAndDropId)









    // browser.actions().
    // dragAndDrop(fileUploader.dragAndDropId).
    // perform();
    // browser.wait(ExpectedConditions.presenceOf(fileUploader.dragAndDropId))
    //     fileUploader.uploadButton.click()
    //     expect(fileUploader.dragAndDropId.getText()).toBe('File Uploade!')

        // browser.executeScript(dnd, fileUploader.dragAndDropId.getWebElement())
        // fileUploader.dragAndDropId.getWebElement().then(function (element) {
           
        //     browser.wait(ExpectedConditions.presenceOf(element))
        //     fileUploader.uploadButton.click()
        //     expect(fileUploader.dragAndDropId.getText()).toBe('File Uploade!')
        
        //})
        //dropFile(fileUploader.dragAndDropId, filePath);
        // browser.executeScript(dnd, dragDrop.boxA.getWebElement(), dragDrop.boxB.getWebElement())
        // browser.sleep(5000)
        // // wait for the droped image to be displayed in the drop area
        // browser.wait(ExpectedConditions.presenceOf(fileUploader.dragAndDropId))
        // fileUploader.uploadButton.click()
        // expect(fileUploader.dragAndDropId.getText()).toBe('File Uploaded!')
    })
})

