var path = require('path');
const FileUploader = require('../../page-objects/file-uploader')
var absolutePath = path.resolve(_dirname, '../../fileUpload')

describe('Give me File Uploader page', () => {
    const fileUploader = new FileUploader()

    beforeEach(() => {
        fileUploader.visit()
    })

    // it('Check if title File Uploader text exists', () => {
    //     expect(fileUploader.title.getText()).toBe('File Uploader')
    // })

    it('Check if Choose file button is clickable', () => {
        // fileUploader.chooseFile.getAttribute('name').then((nameContent) => console.log(nameContent))
        // expect(fileUploader.chooseFile.getAttribute('name')).toBe('file')


        var fileUpload = '../abc.txt'
        var absolutePath = path.resolve(_dirname, fileUpload)
        console.log(absolutePath)
        //fileUploader.chooseFile.sendKeys(absolutePath)
        
    })
})

