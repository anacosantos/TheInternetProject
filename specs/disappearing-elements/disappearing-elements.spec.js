
const { browser } = require('protractor')
const { waitForUrlToBeEqualToExpectedUrl } = require('protractor-helper')
const DisappearingElements = require('../../page-objects/disappearing-elements')
const URLHOME = require('../../utils/configCreator')().baseUrl

describe('Give me Disappearing Elements page', () => {
  const disappearingElements = new DisappearingElements()

  beforeEach(() => {
    disappearingElements.visit()
  })

  it('Title Disappearing Elements exists', () => {
    expect(disappearingElements.title.first().getText()).toBe('Disappearing Elements')
  })

  it('Check the content of menu elements', () => {
    disappearingElements.AllMenu.getText().then((asString) => {
      expect(asString.join().search('Home,About,Contact Us,Portfolio')).toBe(0)
    })
  })

  it('Check if the buttons are going to their respective page', async () => {
    await disappearingElements.home.click()
    // expect(browser.getCurrentUrl()).toBe(URLHOME)
    // another way to get current Url
    expect(waitForUrlToBeEqualToExpectedUrl(URLHOME))
    browser.getCurrentUrl()
    disappearingElements.homePageButton.click()
    await disappearingElements.about.click()
    // expect(browser.getCurrentUrl()).toBe(''https://the-internet.herokuapp.com/about/')
    expect(waitForUrlToBeEqualToExpectedUrl(URLHOME + 'about/'))
    browser.navigate().back()
    await disappearingElements.contactUs.click()
    // expect(browser.getCurrentUrl()).toBe(''https://the-internet.herokuapp.com/contact-us/')
    expect(waitForUrlToBeEqualToExpectedUrl(URLHOME + 'contact-us/'))
    browser.navigate().back()
    await disappearingElements.portfolio.click()
    // expect(browser.getCurrentUrl()).toBe('https://the-internet.herokuapp.com/portfolio/')
    expect(waitForUrlToBeEqualToExpectedUrl(URLHOME + 'portfolio/'))
  })

  xit('Refresh button appering another button', () => {
    expect(disappearingElements.AllMenu.count()).toEqual(4)
    // or
    disappearingElements.AllMenu.getText().then((asString) => {
      browser.navigate().refresh()
      expect(asString.join().search('Gallery')).toBe(-1)
      browser.sleep(1000)
    })
  })

  xit('Check if the buttons was added or removed after refresh', () => {
    const buttons = disappearingElements.AllMenu.count()
    browser.navigate().refresh()
    expect(buttons).toBe(disappearingElements.AllMenu.count())
  })
})
