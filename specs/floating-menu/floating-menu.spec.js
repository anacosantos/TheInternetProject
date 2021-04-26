
const { browser } = require('protractor')
const FloatingMenu = require('../../page-objects/floating-menu')

describe('Give me Floting menu page', () => {
     const floatingMenu = new FloatingMenu ()

    beforeEach(() => {
        floatingMenu.visit()
    })

    // it('Check if title Floating Menu exists', () => {
    //     expect(floatingMenu.title.getText()).toBe('Floating Menu')
    // })

    it('Check if menu is floting while scroll mouse down', () => {
        floatingMenu.menuID.getAttribute('style').then((name) => {
            browser.actions().mouseDown().perform()
            if (name !== 0)
			expect(name).notBe(0)
		})
        
    })
})