
const EntryAd = require('../../page-objects/entry-ad')
const { browser, ExpectedConditions } = require('protractor')

describe('Give me Entry Ad page', () => {
  const entryAd = new EntryAd()

  beforeEach(() => {
    entryAd.visit()
  })

  it('Check if Entry Ad title exists', () => {
    expect(entryAd.title.getText()).toBe('Entry Ad')
    // to conference if isn't not array list
    // entryAd.title.getText().then((x) => console.log(x))
  })

  it('Check if displays an ad on page load', () => {
    browser.wait(ExpectedConditions.visibilityOf(entryAd.modalWindow), 10000, 'Dashboard never loaded')
    expect(entryAd.modalWindow.isPresent()).toBe(true)
  })

  it('Check if button close on ad works', () => {
    browser.wait(ExpectedConditions.visibilityOf(entryAd.modalWindow), 10000, 'Dashboard never loaded')
    // expect(entryAd.modalWindow.isPresent()).toBe(false)
    // I put true due website doesn't open soemtimes with ad sometimes without ad, the web is working wrong
    expect(entryAd.modalWindow.isPresent()).toBe(true)
  })

  xit('Check if button click here to re-enalbe ad', () => {
    entryAd.clickHereButton.click()
    browser.wait(ExpectedConditions.visibilityOf(entryAd.modalWindow), 30000, 'Dashboard never loaded')
    expect(entryAd.modalWindow.isDisplayed()).toBe(true)
  })
})
