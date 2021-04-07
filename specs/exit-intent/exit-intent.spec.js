const { browser } = require('protractor')

const ExitIntent = require('../../page-objects/exit-intent')

describe('Give me Exit Intent page', () => {
  const exitIntent = new ExitIntent()

  beforeEach(() => {
    exitIntent.visit()
  })

  it('Check if title Exit Intent exists', () => {
    expect(exitIntent.title.getText()).toBe('Exit Intent')
  })

  xit('Check if mouse out of the viewport pane and see a modal window appears', () => {
    browser.actions().mouseUp().perform()
    expect(exitIntent.modalWindow.isPresent()).toBe(true)
  })

  xit('Check if put mouse on the screen if modal window appears', () => {
    browser.actions().mouseDown().perform()
    expect(exitIntent.modalWindow.isDisplayed()).toBe(false)
  })
})
