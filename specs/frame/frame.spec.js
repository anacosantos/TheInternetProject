
const { browser } = require('protractor')
const Frame = require('../../page-objects/frame')
const provideConfig = require('../../utils/configCreator')
const URL_Frames = provideConfig().baseUrl + 'frames'
const URL_NestedFrame = provideConfig().baseUrl + 'nested_frames'
const URL_IFrame = provideConfig().baseUrl + 'iframe'

describe('Give me Frame page', () =>{
    let frame = new Frame ()

    beforeEach(() => {
        frame.visit()
    })

    // it('Check if frame title exists', () => {
    //     expect(frame.title.getText()).toBe('Frames')
    // })

    // it('Check if Nested Frames is clickable', () => {
    //     frame.contentButton.first().click()
    //     expect(browser.getCurrentUrl()).toBe(URL_NestedFrame)
    //     browser.navigate().back()
    //     expect(browser.getCurrentUrl()).toBe(URL_Frames)
    // })

    // it('Check if iFrame is clickable', () => {
    //     frame.contentButton.last().click()
    //     expect(browser.getCurrentUrl()).toBe(URL_IFrame)
    //     browser.navigate().back()
    //     expect(browser.getCurrentUrl()).toBe(URL_Frames)
    // })

    it('Check if the frames are nested', () => {
        // frame.frameBotton.getAttribute('name').then((e) => {
        //     console.log(e)
        //     browser.switchTo().frame(frameBotton).getWebElement()
        // })
    })
})