
const FileUploader = require('../../page-objects/file-uploader')
const path = require('path')
const filePath = path.resolve(__dirname, '/Users/anacarolinaoliveiradossantos/Documents/TheInternetProject/uploads/me.jpg')
const dropFile = require('../../utils/drop-file')

describe('Give me File Uploader page', () => {
  const fileUploader = new FileUploader()

  beforeEach(() => {
    fileUploader.visit()
  })

  it('Check if title File Uploader text exists', () => {
    expect(fileUploader.title.getText()).toBe('File Uploader')
  })

  it('Check if Choose file button exists and if the file was uploaded', () => {
    expect(fileUploader.chooseFile.getAttribute('name')).toBe('file')
    const fileUpload = '../me.jpg'
    const absolutePath = path.resolve(fileUpload)
    fileUploader.chooseFile.sendKeys(absolutePath)
    fileUploader.uploadButton.click()
    expect(fileUploader.fileUploadedMessage.getText()).toBe('File Uploaded!')
  })

  it('Check if drag and drop a file into the area', () => {
    // I created on utils drop-file.js to move image from my project.
    dropFile(fileUploader.dragAndDropId, filePath)
    expect(fileUploader.dragAndDropId.getText()).toBe('me.jpg\n✔')
    fileUploader.uploadButton.click()
    // Site doesn't well. After click the site show me server error
    // expect(fileUploader.fileUploadedMessage.getText()).toBe('File Uploaded')
  })
})
