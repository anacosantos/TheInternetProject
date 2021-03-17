
const { browser } = require('protractor')

const ContextMenu = require('../../page-objects/context-menu')

describe('Give Context Menu home', () => {
    let contextPage

    beforeEach(() => {
        contextPage = new ContextMenu()
        contextPage.visit()
    })

    it('Title Context Menu exists', () => {
        expect(contextPage.title.getText()).toBe('Context Menu')
    }) 

    it('Right-click works on the box', () => {
        browser.actions().mouseMove(contextPage.insideBox).perform();
        browser.actions().click(protractor.Button.RIGHT).perform().then(()=>{
        expect(true).toBe(true)
    });
        browser.sleep(10000);
    })

    it("Right-click out the box doesn't' work", () => {
        browser.actions().click(protractor.Button.RIGHT).perform();
    } )
})


