const { browser } = require('protractor')
const ExitIntent = require('../../page-objects/exit-intent')


describe('Give me Exit Intent page', () => {
    let exitIntent = new ExitIntent ()

    beforeEach(() => {
        exitIntent.visit()
    })

    it('Check if title Exit Intent exists', () => {
        expect(exitIntent.title.getText()).toBe('Exit Intent')
    })

    it('Check if mouse out of the viewport pane and see a modal window appear', () => {
        browser.actions().mouseUp().perform()
        expect(exitIntent.modalWindow.isPresent()).toBe(true)
       
       
       
       
       
       
        // exitIntent.modalWindow.getLocation().then((location) => console.log(location))
        // //let actions = new Actions(driver)
        // browser.actions.moveByOffset(0, 0).build().perform()

        // browser.wait(ExpectedConditions.visibilityOf(exitIntent.modalWindow), 10000, 'Dashboard never loaded')
        // expect(exitIntent.modalWindow.isPresent()).toBe(true)

    })
})

// browser.wait(ExpectedConditions.visibilityOf(entryAd.modalWindow), 10000, 'Dashboard never loaded')
//expect(entryAd.modalWindow.isPresent()).toBe(true)

//action.moveToElement(e).moveByOffset(600,-1).build().perform();

// WebElement ele= driver.findElement(By.xpath("x-path"));
// Point point = ele.getLocation(); = existintent.
// int numberX = point.getX();
// int numberY = point.getY();
//act.moveByOffset(numberX+1, numberY).click().build().perform();

//         let numberX = exitIntent.modalWindow.getLocation()
//         let numberY = exitIntent.modalWindow.getLocation()
//         let actions = new Actions(driver)
//         actions.moveByOffset(numberX, numberY).then((x) => console.log(x))
//         console.log(numberX)
