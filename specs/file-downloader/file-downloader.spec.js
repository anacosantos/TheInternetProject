const { browser } = require('protractor')
const FileDownloader = require('../../page-objects/file-downloader')
const path = require('path')
const downloadsPath = path.resolve(__dirname, '../../downloads')
const fs = require('fs')

describe('Give me File Downloader page', () => {
  const fileDownloader = new FileDownloader()

  beforeEach(() => {
    fileDownloader.visit()
  })

  it('Check if title File Downloader exists', () => {
    expect(fileDownloader.title.getText()).toBe('File Downloader')
  })

  xit('Check if all list is clickable and check if all list was saved', () => {
    fileDownloader.downloadList.each(async (element) => {
      await element.click()
      // verify
      browser.sleep(7000)
      await element.getText().then((name) => {
        const filePath = downloadsPath + '/' + name
        const ret = fs.existsSync(filePath)
        expect(ret).toBe(true)
        if (ret) {
          // delete files
          fs.unlinkSync(filePath)
        }
      })
    })
  })
})
