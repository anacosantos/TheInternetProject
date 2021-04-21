const {  browser } = require('protractor')
const FileDownloader = require('../../page-objects/file-downloader')
var path = require('path');
const downloadsPath = path.resolve(__dirname, '../../downloads');
var fs = require('fs')

describe('Give me File Downloader page', () => {
    let fileDownloader = new FileDownloader ()

    beforeEach(() => {
        fileDownloader.visit()
    }) 

    // it('Check if title File Downloader exists', () => {
    //     expect(fileDownloader.title.getText()).toBe('File Downloader')
    // })

    it('Check if all list is clickable and check if all list was saved', () => {
        fileDownloader.downloadList.each( async (element) => {
            await element.click()
            //verify
            browser.sleep(7000)
            await element.getText().then( (name) => { 
                var filePath = downloadsPath + '/' + name;  
                let ret = fs.existsSync(filePath)
                expect(ret).toBe(true)
                if (ret){
                    //delete files
                    fs.unlinkSync(filePath)
                } 
            }) 
        })                     
    })
})


