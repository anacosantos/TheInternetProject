

const { browser} = require('protractor')
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

    it('Check if frame title exists', () => {
        expect(frame.title.getText()).toBe('Frames')
    })

    it('Check if Nested Frames is clickable', () => {
        frame.contentButton.first().click()
        expect(browser.getCurrentUrl()).toBe(URL_NestedFrame)
        browser.navigate().back()
        expect(browser.getCurrentUrl()).toBe(URL_Frames)
    })

    it('Check if iFrame is clickable', () => {
        frame.contentButton.last().click()
        expect(browser.getCurrentUrl()).toBe(URL_IFrame)
        browser.navigate().back()
        expect(browser.getCurrentUrl()).toBe(URL_Frames)
    })

    it('Check if the frames are nested and if is possible handle all of them', () => {
        //works to frame top
        frame.contentButton.first().click()
        browser.sleep(3000)
        frame.frameSet.getAttribute('name').then((alltop) => {   
            expect(alltop).toBe('frame-top')  
        })

        //works to left
        browser.navigate().back()
        frame.contentButton.first().click()
        browser.switchTo().frame(frame.frameSet.getWebElement())
        browser.switchTo().frame(element(by.xpath('/html/frameset/frame[1]')).getWebElement()) 
        //browser.findElement(by.xpath('/html/body')).getText().then(a => console.log(a));
        expect(browser.findElement(by.xpath('/html/body')).getText()).toBe('LEFT')


        //works to middle
        browser.navigate().back()
        frame.contentButton.first().click()
        browser.switchTo().frame(frame.frameSet.getWebElement())
        browser.switchTo().frame(element(by.xpath('/html/frameset/frame[2]')).getWebElement())
        //browser.findElement(by.xpath('/html/body')).getText().then(b => console.log(b))
        expect(browser.findElement(by.xpath('/html/body')).getText()).toBe('MIDDLE')

        
        //woks to right
        browser.navigate().back()
        frame.contentButton.first().click()
        browser.switchTo().frame(frame.frameSet.getWebElement())
        browser.switchTo().frame(element(by.xpath('/html/frameset/frame[3]')).getWebElement()) 
       // browser.findElement(by.xpath('/html/body')).getText().then(c => console.log(c))
        expect(browser.findElement(by.xpath('/html/body')).getText()).toBe('RIGHT')


        //works to bottom
        browser.navigate().back()
        frame.contentButton.first().click()
        browser.sleep(3000)
        frame.frameBottom.getAttribute('name').then((bottom) => {   
            //console.log(bottom)
            expect(bottom).toBe('frame-bottom')  
        })
    })
})
