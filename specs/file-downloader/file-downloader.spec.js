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
    //   expect(fileDownloader.downloadList.count()).toBe(16)
    //     fileDownloader.downloadList.getText().then((list) => {
    //         expect(list.join().search('cachureos - lo que no pudimos hacer.mp3',
    //         'hello_world.txt',
    //         'Test.txt',
    //         'test.txt',
    //         'Dashboard Queries.docx',
    //         'ObjectivityTestAutomationCSHarpFramework.txt',
    //         'webdriver.png',
    //         'Capture.PNG',
    //         '155993895_3732544906866484_3036794238296956416_o.jpg',
    //         'some-file.txt',
    //         'avatar.jpeg',
    //         'Black.jpg',
    //         'empty.txt',
    //         'test.png',
    //         'PMBOK_Guide5th_Spanish.pdf',
    //         'upload_file.xlsx'))
    //         .not.toBe(-1)
    //     })        
    // })

    it('Check if all list is clickable and check if all list was saved', () => {
         //var filename = downloadsPath + '/empty.txt' 
       // fileDownloader.downloadList.click()

       fileDownloader.downloadList.each((elementList) => {
            //elementList.click()  
            var 
            var filename = downloadsPath + elementList.getText().then((nameList) => console.log('/'+nameList))
            //trim() was used to join files's name and take off space, hyphen and dash
            filename.trim()

           // console.log(filename)

         

        //    if (fs.existsSync(filename)) {   

        //     expect(fs.existsSync(filename)).toBe(nameList)
        // //     // delete if there is any existing file with same name
        // //     // fs.unlinkSync(filename);
        // //     // })    
        // }

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
            
        
        // browser.driver.wait(function () {
        //     return fs.existsSync(filename);
        //     }, 30000).then(function() {
        //         expect(fs.readFileSync(filename)).toEqual(
        //             "/hello_world.txt"
       // expect(fs.filename).toContain('ABC.csv');
        //         )
        //     console.log("Getting the ERROR while downloading file as file is not downloaded.");
        // })
    })
})

// browser.driver.wait(function() {
//     return fs.existsSync(filename);
// }, 30000).then(function() {
//     expect(fs.readFileSync(filename, { encoding: 'utf8' })).toEqual(
//         "A,B,C\r\n"
//     );
// });
