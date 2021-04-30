
const { browser } = require('protractor')
const FloatingMenu = require('../../page-objects/floating-menu')

describe('Give me Floting menu page', () => {
  const floatingMenu = new FloatingMenu()

  beforeEach(() => {
    floatingMenu.visit()
  })

  it('Check if title Floating Menu exists', () => {
    expect(floatingMenu.title.getText()).toBe('Floating Menu')
  })

  xit('Check if menu is floating while scroll mouse down', () => {
    // works on chrome
    floatingMenu.menuID.getAttribute('style').then((topZero) => {
      browser.actions().mouseDown().perform()
      browser.actions().mouseMove(floatingMenu.footer).perform()
      floatingMenu.menuID.getAttribute('style').then((top) => {
        expect(top).not.toBe(topZero)
      })
    })
  })
})
