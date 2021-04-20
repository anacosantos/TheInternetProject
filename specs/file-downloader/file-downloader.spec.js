const {  browser, ExpectedConditions } = require('protractor')
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

    // it('Check if all files exist', () => {
    //   expect(fileDownloader.downloadList.count()).toBe(33)
    //     fileDownloader.downloadList.getText().then((list) => { 
    //         expect(list.join().search('TextFile.txt',
    //         'upload.jpeg',
    //         'Pic.png',
    //         'webdriverIO.png',
    //         'test.txt',
    //         'ObjectivityTestAutomationCSHarpFramework.txt',
    //         'code.js',
    //         'Sti_Trace.log',
    //         'second.jpg',
    //         'photo.jpg',
    //         'hello_world.txt',
    //         'chromedriver.exe',
    //         'somethin.txt',
    //         'Dockerfile.txt',
    //         'text.txt',
    //         'automation-test.txt',
    //         'testUpload.json',
    //         'upload_text_file.txt',
    //         'MAOC19_Bronze-Class5-Girls_FS_Scores.pdf',
    //         'file_upload_test.txt',
    //         'NewTest.txt',
    //         'upload.txt',
    //         'BrowserStack.jpg',
    //         '10.jpg',
    //         '2.jpg',
    //         'img.png',
    //         'some-file.txt',
    //         'question.txt',
    //         '1OrnW9c1nXw.jpg',
    //         'img4.jpg',
    //         'image_2021-02-27_18-57-41.png',
    //         'sample.png',
    //         'empty.txt'))
    //         .not.toBe(-1)
    //     })        
    // })

    it('Check if all list is clickable and check if all list was saved', () => {
    
        // var filename = downloadsPath + '/' + "Useful links.doc";
        // //var filename2 = "/Users/anacarolinaoliveiradossantos/Documents/TheInternetProject/downloads/TEMP FILE.txt"
        // console.log(filename)
        // fileDownloader.downloadList.first().getText().then((namee) => console.log(fs.existsSync(downloadsPath + '/' +namee)))
        // //console.log(fs.existsSync(filename))
        //console.log(fs.existsSync(filename2))

        
        ///Users/anacarolinaoliveiradossantos/Documents/TheInternetProject/downloads/TEMP FILE.txt


       fileDownloader.downloadList.each((element) => {
           //element.click()  
             
           
           element.getText().then((name) => { 
                var filename = downloadsPath + '/' + name;
                console.log(filename)
              expect(fs.existsSync(filename)).toBe(true)
               
           })
            //trim() was used to join files's name and take off space, hyphen and dash
            //filename.trim()            
            
        })

    })
})


 // fileDownloader.downloadList.each((elementList) => {
        //     elementList.click()
           
            // deleteAlreadyDownloadedFiles: (function(){
            //     var filename = global.downloadsPath + 'downloadsPath;
            //     var fs = require('fs');
            //     if (fs.existsSync(filename))
            //     {
            //       // delete if there is any existing file with same name
            //       fs.unlinkSync(filename);
            //     }
            // }
            
   //  ***************************************************************************   
        // browser.driver.wait(function () {
        //     return fs.existsSync(filename);
        //     }, 30000).then(function() {
        //         expect(fs.readFileSync(filename)).toEqual(
        //             "/hello_world.txt"
       // expect(fs.filename).toContain('ABC.csv');
        //         )
        //     console.log("Getting the ERROR while downloading file as file is not downloaded.");
        // })
         
  //************************************************************************************

        //    if (fs.existsSync(filename)) {   

        //     expect(fs.existsSync(filename)).toBe(nameList)
        // //     // delete if there is any existing file with same name
        // //     // fs.unlinkSync(filename);
        // //     // })    
        // }